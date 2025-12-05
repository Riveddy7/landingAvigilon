'use server'

interface LeadData {
    name: string;
    email: string;
    phone: string;
    company: string;
    interest: string;
}

export async function submitLead(data: LeadData) {
    const webhookUrl = "https://bajanet.bitrix24.mx/rest/18/52dhvj14djtdpv86/crm.lead.add";

    // Map interest to Bitrix ID
    // Radar: 750, Termografía: 752, Audio: 754, Control de Acceso: 756, Visualización: 758
    let interestId = 758; // Default to Visualización

    switch (data.interest) {
        case 'access':
            interestId = 756; // Control de Acceso
            break;
        case 'unity':
        case 'alta':
        case 'all':
        default:
            interestId = 758; // Visualización
            break;
    }

    const payload = {
        fields: {
            TITLE: `Lead Web: ${data.name} - ${data.interest.toUpperCase()}`,
            NAME: data.name,
            COMPANY_TITLE: data.company,
            EMAIL: [{ VALUE: data.email, VALUE_TYPE: "WORK" }],
            PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
            COMMENTS: `Interés original: ${data.interest}. Enviado desde landing page Avigilon.`,
            SOURCE_ID: "WEB",
            UF_CRM_LEAD_1764101315689: interestId
        },
        params: {
            REGISTER_SONET_EVENT: "Y"
        }
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Bitrix API error: ${response.statusText}`);
        }

        const result = await response.json();

        if (result.error) {
            throw new Error(`Bitrix error: ${result.error_description || result.error}`);
        }

        return { success: true, data: result };
    } catch (error) {
        console.error("Error submitting lead to Bitrix:", error);
        return { success: false, error: "Error al enviar el formulario. Por favor intente de nuevo." };
    }
}
