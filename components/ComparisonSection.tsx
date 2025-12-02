"use client";

import { motion } from "framer-motion";
import { Check, X, Server, Cloud } from "lucide-react";

export function ComparisonSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-white border-b border-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        ¿Cuál es la solución ideal para tu organización?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Avigilon ofrece dos caminos poderosos: la robustez del control total On-Premise con <span className="font-bold text-[#0078D4]">Unity</span> o la agilidad y escalabilidad de la Nube con <span className="font-bold text-[#0078D4]">Alta</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Unity Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Server size={120} />
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                <Server className="text-[#0078D4]" />
                                Avigilon Unity
                            </h3>
                            <p className="text-sm font-semibold text-[#0078D4] uppercase tracking-wider mt-1">On-Premise Security Suite</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex gap-3">
                                <Check className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700">Control total de datos e infraestructura local.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700">Ideal para sitios con restricciones de internet o cumplimiento estricto.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700">Analíticas de IA avanzadas en el borde (Edge) y servidor.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700">Gestión unificada de Video y Acceso desde una sola interfaz.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-green-600 shrink-0" size={20} />
                                <span className="text-slate-700">Sin rentas mensuales obligatorias (Licenciamiento perpetuo).</span>
                            </li>
                        </ul>

                        <button
                            onClick={() => scrollToSection('unity-section')}
                            className="w-full py-4 rounded-xl bg-white border-2 border-[#0078D4] text-[#0078D4] font-bold hover:bg-[#0078D4] hover:text-white transition-all duration-300 shadow-sm"
                        >
                            Explorar Soluciones Unity
                        </button>
                    </motion.div>

                    {/* Alta Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Cloud size={120} className="text-white" />
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Cloud className="text-blue-400" />
                                Avigilon Alta
                            </h3>
                            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mt-1">Cloud-Native Security</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex gap-3">
                                <Check className="text-blue-400 shrink-0" size={20} />
                                <span className="text-slate-300">100% en la Nube. Sin servidores ni mantenimiento de software.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-400 shrink-0" size={20} />
                                <span className="text-slate-300">Acceso móvil "Wave to Unlock" y gestión remota desde cualquier lugar.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-400 shrink-0" size={20} />
                                <span className="text-slate-300">Escalabilidad infinita, desde 1 puerta hasta miles de sitios.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-400 shrink-0" size={20} />
                                <span className="text-slate-300">Ciberseguridad automática y actualizaciones al instante.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-400 shrink-0" size={20} />
                                <span className="text-slate-300">Modelo de suscripción flexible (OpEx).</span>
                            </li>
                        </ul>

                        <button
                            onClick={() => scrollToSection('alta-section')}
                            className="w-full py-4 rounded-xl bg-[#0078D4] text-white font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/20"
                        >
                            Explorar Soluciones Alta
                        </button>
                    </motion.div>
                </div>

                {/* Comparison Table for Desktop */}
                <div className="hidden md:block mt-20 max-w-5xl mx-auto">
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Característica</th>
                                    <th className="p-4 text-sm font-bold text-slate-900 w-1/3">Avigilon Unity (On-Premise)</th>
                                    <th className="p-4 text-sm font-bold text-[#0078D4] w-1/3">Avigilon Alta (Cloud)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr>
                                    <td className="p-4 text-slate-600 font-medium">Infraestructura</td>
                                    <td className="p-4 text-slate-800">Servidores Locales (NVRs/Appliances)</td>
                                    <td className="p-4 text-slate-800">100% Sin Servidores (Cloud-Native)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-slate-600 font-medium">Acceso Remoto</td>
                                    <td className="p-4 text-slate-800">Vía Unity Cloud Services (Híbrido)</td>
                                    <td className="p-4 text-slate-800">Nativo desde cualquier navegador/app</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-slate-600 font-medium">Mantenimiento</td>
                                    <td className="p-4 text-slate-800">Controlado por TI (Actualizaciones manuales)</td>
                                    <td className="p-4 text-slate-800">Automático (Siempre actualizado)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-slate-600 font-medium">Modelo de Costo</td>
                                    <td className="p-4 text-slate-800">CapEx (Inversión inicial mayor, sin rentas)</td>
                                    <td className="p-4 text-slate-800">OpEx (Suscripción anual recurrente)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-slate-600 font-medium">Ciberseguridad</td>
                                    <td className="p-4 text-slate-800">Gestionada por el usuario/partner</td>
                                    <td className="p-4 text-slate-800">Gestionada por Avigilon (End-to-End)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#0078D4] transition-all duration-200 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 hover:scale-105"
                    >
                        Solicitar Asesoría Personalizada
                    </button>
                    <p className="mt-3 text-sm text-gray-500">
                        ¿No estás seguro? Nuestros expertos te ayudan a elegir.
                    </p>
                </div>
            </div>
        </section>
    );
}
