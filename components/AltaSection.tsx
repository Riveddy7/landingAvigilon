"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cloud, Lock, Smartphone, Globe } from "lucide-react";
import { useModal } from "@/components/ModalContext";

export function AltaSection() {
    const { openModal } = useModal();

    return (
        <section className="py-32 bg-white text-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
                            <Cloud className="w-4 h-4" />
                            Cloud-Native Security
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                            Avigilon Alta. <br />
                            <span className="text-blue-600">Seguridad en la Nube.</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            Sin servidores. Sin complicaciones. Acceso y video 100% en la nube para la empresa moderna. Gestiona múltiples sitios desde tu celular.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Mobile First</h4>
                                    <p className="text-slate-500">Credenciales móviles y gestión remota.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Escalabilidad Infinita</h4>
                                    <p className="text-slate-500">Crece de 1 a 1000 puertas sin hardware extra.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                onClick={openModal}
                                className="h-12 px-8 text-lg bg-slate-900 text-white hover:bg-slate-800 rounded-full"
                            >
                                Conocer Alta
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 aspect-square bg-slate-50">
                            {/* Abstract Dashboard Visual */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/05.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

                            {/* Floating Cards */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="absolute bottom-10 left-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                            >
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
                                    <div className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">
                                        AUTORIZADO
                                    </div>
                                </div>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium">
                                        +12
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
