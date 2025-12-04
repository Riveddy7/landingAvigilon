"use client";

import { LeadForm } from "@/components/LeadForm";

export function BottomContactSection() {
    return (
        <section id="contact-section" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ¿Listo para blindar tu operación? Hablemos.
                        </h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Analizamos tus riesgos y diseñamos tu solución.
                        </p>
                        <p className="text-xl font-bold text-[#0078D4]">
                            Llámanos: 664 370 4676
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <LeadForm className="max-w-2xl mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
