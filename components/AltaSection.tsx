"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cloud, Lock, Smartphone, Globe } from "lucide-react";
import { useModal } from "@/components/ModalContext";

export function AltaSection() {
    const { openModal } = useModal();

    return (
        <section id="alta-section" className="py-32 bg-white text-slate-900 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
                            <Cloud size={14} />
                            <span>Cloud-Native Security</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
                            Avigilon Alta <br />
                            <span className="text-blue-600">Seguridad 100% en la Nube</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Sin servidores, sin complicaciones. La solución ideal para empresas modernas que buscan agilidad, acceso móvil y gestión remota desde cualquier lugar.
                        </p>
                    </motion.div>
                </div>

                {/* Access Control Subsection */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <Smartphone size={24} />
                                </div>
                                Alta Access (Openpath)
                            </h3>
                            <p className="text-slate-600 text-lg">
                                Olvida las tarjetas plásticas. Alta Access convierte tu celular en tu llave, permitiendo una experiencia de acceso rápida, segura y sin contacto.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Wave to Unlock</h4>
                                        <p className="text-slate-500 text-sm">Abre puertas sin sacar el celular de tu bolsillo. Solo pasa la mano frente al lector.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Gestión Remota</h4>
                                        <p className="text-slate-500 text-sm">Otorga pases de invitado, abre puertas y bloquea usuarios desde tu dashboard en la nube.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 aspect-square bg-slate-50">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/05.jpg')" }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <Lock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">Acceso Concedido</div>
                                                <div className="text-xs text-slate-500">Oficina Principal • Hace 2 min</div>
                                            </div>
                                        </div>
                                        <div className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">AUTORIZADO</div>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium">
                                            +12
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Security Subsection */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                                <img src="https://avigilon-745199569.imgix.net/product/H6A_Bullet_Product_Detail_Image_1.png?auto=format&fit=clip&q=80&w=600&s=f81c78f679563636b2b234f00f93a46d" alt="Alta Camera" className="w-full h-auto bg-gray-50" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Alta Video</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-rain"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M16 14v6" /><path d="M8 14v6" /><path d="M12 16v6" /></svg>
                                </div>
                                Alta Video (Ava)
                            </h3>
                            <p className="text-slate-600 text-lg">
                                Cámaras inteligentes que no necesitan NVRs. Almacenan video en la cámara y en la nube, con analíticas de IA listas para usar desde el primer día.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Smart Search</strong>
                                        <span className="text-slate-500 text-sm">Busca eventos como lo harías en Google. "Hombre con mochila azul" o "Coche rojo en el estacionamiento".</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Mapas Dinámicos</strong>
                                        <span className="text-slate-500 text-sm">Visualiza todas tus cámaras y alarmas en un mapa interactivo de tus instalaciones.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">✓</div>
                                    <div>
                                        <strong className="text-slate-900 block">Detección de Anomalías de Audio</strong>
                                        <span className="text-slate-500 text-sm">Las cámaras escuchan y alertan sobre gritos, disparos o rotura de cristales.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-xl"
                    >
                        Conocer Alta Cloud
                    </button>
                    <p className="mt-4 text-sm text-slate-500">
                        Agenda una demo virtual y ve cómo funciona la nube de Avigilon.
                    </p>
                </div>
            </div>
        </section>
    );
}
