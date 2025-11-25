"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/components/ModalContext";
import { Play, X } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const { openModal } = useModal();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/10 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/85 z-20" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="https://www.avigilon.com/fs/videos/Hero-Videos/avigilon-960-720-COMPRESS-1.8.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-30 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80 text-sm tracking-widest uppercase font-medium mb-4 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#0078D4] animate-pulse" />
                        Avigilon Premier Partner
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                        Detecta. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-blue-400 drop-shadow-[0_4px_12px_rgba(0,120,212,0.5)]">Verifica.</span> Actúa.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        La seguridad física evolucionada. Inteligencia Artificial que entiende lo que ve, para que tú puedas enfocarte en lo que importa.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button
                            onClick={openModal}
                            className="h-14 px-8 text-lg font-bold bg-[#0078D4] hover:bg-[#006cbd] text-white rounded-full shadow-[0_0_40px_-10px_rgba(0,120,212,0.5)] hover:shadow-[0_0_60px_-15px_rgba(0,120,212,0.6)] transition-all duration-300 scale-100 hover:scale-105"
                        >
                            Solicitar Demo en Vivo
                        </Button>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="group flex items-center gap-3 text-white hover:text-[#0078D4] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#0078D4] group-hover:bg-[#0078D4]/10 transition-all">
                                <Play className="w-5 h-5 fill-current" />
                            </div>
                            <span className="font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Ver Video</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsVideoOpen(false)}
                            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100]"
                        />

                        {/* Video Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
                        >
                            <div className="relative w-full max-w-6xl aspect-video">
                                <button
                                    onClick={() => setIsVideoOpen(false)}
                                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <video
                                    autoPlay
                                    controls
                                    className="w-full h-full rounded-lg shadow-2xl"
                                >
                                    <source src="https://www.avigilon.com/fs/videos/Hero-Videos/avigilon-960-720-COMPRESS-1.8.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
