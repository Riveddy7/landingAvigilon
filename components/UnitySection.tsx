"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";

export function UnitySection() {
    return (
        <section id="unity-section" className="py-24 bg-white text-slate-900 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
                            <Server size={14} />
                            <span>Con Servidor Físico</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-[#0078D4]">Avigilon Unity</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Plataforma unificada de video y acceso. Control total en tu propio servidor.
                        </p>
                    </motion.div>
                </div>

                {/* Video Security Subsection */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
                                </div>
                                Video Inteligente
                            </h3>
                            <p className="text-slate-600 text-lg mb-6">
                                Unity Video entiende lo que ve. Graba y encuentra lo importante al instante.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Focus of Attention</strong>
                                        <span className="text-slate-500 text-sm">Te avisa solo cuando hay actividad inusual.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Búsqueda por Apariencia</strong>
                                        <span className="text-slate-500 text-sm">Encuentra personas o vehículos por descripción en segundos.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Reconocimiento Facial y Placas</strong>
                                        <span className="text-slate-500 text-sm">Alertas automáticas de personas o autos de interés.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden h-48 relative group shadow-md">
                                        <img src="/images/01.jpg" alt="Focus of Attention" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm text-white">Focus of Attention</span>
                                        </div>
                                    </div>
                                    <div className="rounded-xl overflow-hidden h-32 relative group shadow-md">
                                        <img src="/images/02.jpg" alt="Appearance Search" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm text-white">AI Search</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-xl overflow-hidden h-32 relative group shadow-md">
                                        <img src="/images/06.png" alt="Facial Rec" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm text-white">Reconocimiento Facial</span>
                                        </div>
                                    </div>
                                    <div className="rounded-xl overflow-hidden h-48 relative group shadow-md">
                                        <img src="/images/03.png" alt="Analytics" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm text-white">AdaptAI Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Access Control Subsection */}
                <div className="mb-20">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                Control de Acceso
                            </h3>
                            <p className="text-slate-600 text-lg mb-6">
                                Gestiona puertas y usuarios desde tu navegador. Sin instalar software en cada PC.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Todo en Uno</strong>
                                        <span className="text-slate-500 text-sm">Ve el video de quien entra o sale en la misma pantalla.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Sin Licencias Extra</strong>
                                        <span className="text-slate-500 text-sm">Usuarios ilimitados. Entra desde Chrome o Edge.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Siempre Activo</strong>
                                        <span className="text-slate-500 text-sm">Diseñado para operar 24/7 sin interrupciones.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <img src="/images/04.jpg" alt="Unity Access Interface" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-sm font-mono text-slate-900">Alerta: Puerta Principal Forzada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#0078D4] rounded-full hover:bg-blue-600 hover:scale-105 shadow-lg"
                    >
                        Solicitar Demo de Unity
                    </button>
                    <p className="mt-4 text-sm text-slate-500">
                        Mira cómo Unity protege tu operación.
                    </p>
                </div>
            </div>
        </section>
    );
}
