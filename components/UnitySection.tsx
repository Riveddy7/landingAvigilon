"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";

export function UnitySection() {
    return (
        <section id="unity-section" className="py-24 bg-black text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
                            <Server size={14} />
                            <span>On-Premise Security Suite</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-[#0078D4]">Avigilon Unity</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            La plataforma unificada de video y control de acceso on-premise más inteligente del mundo. Control total, inteligencia artificial avanzada y gestión simplificada.
                        </p>
                    </motion.div>
                </div>

                {/* Video Security Subsection */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
                                </div>
                                Video Seguridad Inteligente
                            </h3>
                            <p className="text-gray-400 text-lg mb-6">
                                Unity Video (anteriormente ACC) revoluciona la forma en que interactúas con tu seguridad. No solo grabes, entiende lo que sucede.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Focus of Attention</strong>
                                        <span className="text-gray-400 text-sm">Interfaz que prioriza lo importante. Ignora las cámaras estáticas y te alerta solo cuando hay actividad inusual.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Appearance Search</strong>
                                        <span className="text-gray-400 text-sm">Busca personas o vehículos por descripción física (ej. "hombre con camisa roja") en todas tus cámaras en segundos.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Reconocimiento Facial y de Placas</strong>
                                        <span className="text-gray-400 text-sm">Listas de vigilancia integradas para alertar sobre personas o vehículos de interés al instante.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden h-48 relative group">
                                        <img src="/images/01.jpg" alt="Focus of Attention" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm">Focus of Attention</span>
                                        </div>
                                    </div>
                                    <div className="rounded-xl overflow-hidden h-32 relative group">
                                        <img src="/images/02.jpg" alt="Appearance Search" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm">AI Search</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-xl overflow-hidden h-32 relative group">
                                        <img src="/images/06.png" alt="Facial Rec" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm">Reconocimiento Facial</span>
                                        </div>
                                    </div>
                                    <div className="rounded-xl overflow-hidden h-48 relative group">
                                        <img src="/images/03.png" alt="Analytics" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                            <span className="font-bold text-sm">AdaptAI Analytics</span>
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
                                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                Control de Acceso Unificado
                            </h3>
                            <p className="text-gray-400 text-lg mb-6">
                                Unity Access (anteriormente ACM) es un sistema 100% basado en navegador. Gestiona puertas, usuarios y horarios desde cualquier dispositivo sin instalar software.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Unificación Real</strong>
                                        <span className="text-gray-400 text-sm">Ve el video asociado a cada evento de acceso (puerta forzada, acceso denegado) en la misma pantalla.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Sin Licencias de Cliente</strong>
                                        <span className="text-gray-400 text-sm">Accede desde Chrome, Safari o Edge. Usuarios ilimitados sin costo extra por operador.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-white block">Alta Disponibilidad</strong>
                                        <span className="text-gray-400 text-sm">Hardware robusto diseñado para operar 24/7 con opciones de failover y redundancia.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-white/5 rounded-2xl p-6 border border-white/10">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img src="/images/04.jpg" alt="Unity Access Interface" className="w-full h-auto opacity-90" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-sm font-mono text-white">Alerta: Puerta Principal Forzada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#0078D4] rounded-full hover:bg-blue-600 hover:scale-105 shadow-[0_0_20px_rgba(0,120,212,0.4)]"
                    >
                        Solicitar Demo de Unity
                    </button>
                    <p className="mt-4 text-sm text-gray-500">
                        Nuestros ingenieros te mostrarán cómo Unity protege tu operación.
                    </p>
                </div>
            </div>
        </section>
    );
}
