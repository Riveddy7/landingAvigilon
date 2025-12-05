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
        <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-20" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                >
                    <source src="https://www.avigilon.com/fs/videos/Hero-Videos/Homepage/Homepage-Video-2880x1480-10.23.25-9mb.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mr-auto space-y-8 text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm tracking-widest uppercase font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#0078D4] animate-pulse" />
                        IAMET | Avigilon Premier Partner
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none drop-shadow-lg">
                        Tu Socio Certificado de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-blue-400">Avigilon</span> en México.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-md">
                        Validación inmediata de seguridad inteligente. Somos integradores Premier con REPSE, opciones de crédito y soporte local desde Tijuana para todo el país.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6 pt-8">
                        <Button
                            onClick={openModal}
                            className="h-14 px-8 text-lg font-bold bg-[#0078D4] hover:bg-[#006cbd] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-105"
                        >
                            Contactanos
                        </Button>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="group flex items-center gap-3 text-white hover:text-[#0078D4] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#0078D4] group-hover:bg-[#0078D4]/10 transition-all">
                                <Play className="w-5 h-5 fill-current" />
                            </div>
                            <span className="font-medium tracking-wide drop-shadow-md">Ver Video</span>
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
