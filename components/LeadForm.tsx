"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitLead } from "@/app/actions/submitLead";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function LeadForm({ className }: { className?: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setStatus('idle');
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            company: formData.get('company') as string,
            interest: formData.get('interest') as string,
        };

        try {
            const result = await submitLead(data);
            if (result.success) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();

                // Track Google Ads Conversion
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-17435666964/nPk2CIWg4MwbEJTU_PlA',
                        'value': 1.0,
                        'currency': 'MXN'
                    });
                }
            } else {
                setStatus('error');
                setErrorMessage(result.error || "Algo salió mal.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage("Error de conexión.");
        } finally {
            setIsLoading(false);
        }
    }

    if (status === 'success') {
        return (
            <div className={`flex flex-col items-center justify-center py-12 text-center space-y-4 ${className}`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                    Gracias por contactarnos. Un especialista de Avigilon se pondrá en contacto contigo pronto.
                </p>
                <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="mt-4"
                >
                    Enviar otro mensaje
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                    required
                    name="name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="Ej. Roberto Martínez"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Corporativo</label>
                <input
                    required
                    name="email"
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="nombre@empresa.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                    required
                    name="phone"
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="(664) 000-0000"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input
                    required
                    name="company"
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="Nombre de tu empresa"
                />
            </div>

            <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interés Principal</label>
                <div className="relative">
                    <select
                        required
                        name="interest"
                        id="interest"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50 appearance-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="unity">CCTV Unity (Servidor)</option>
                        <option value="access">Control de Acceso</option>
                        <option value="alta">Nube (Alta)</option>
                        <option value="all">Todo</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                </div>
            )}

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full font-bold text-base py-6 mt-2 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    "AGENDAR LEVANTAMIENTO SIN COSTO"
                )}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-3">
                Tus datos están protegidos. No compartimos información.
            </p>
        </form>
    );
}
