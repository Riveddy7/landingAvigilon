"use client";

import { AlertTriangle, Clock, Lock } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
    {
        icon: AlertTriangle,
        title: "Falsas Alarmas constantes",
        description: "Tu equipo de seguridad ignora alertas porque el 90% son errores, dejando brechas reales sin atención.",
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        icon: Clock,
        title: "Horas perdidas buscando video",
        description: "Buscar un incidente manualmente te toma horas. Con Avigilon, encuentras lo que buscas en segundos.",
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        icon: Lock,
        title: "Sistemas vulnerables",
        description: "Cámaras desconectadas, firmwares obsoletos y puertas traseras. Tu seguridad física es un riesgo digital.",
        color: "text-red-500",
        bg: "bg-red-50",
    },
];

export function PainPoints() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Sigues confiando en grabaciones forenses?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        La mayoría de los sistemas de seguridad solo sirven para ver qué pasó cuando ya es demasiado tarde.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`w-14 h-14 rounded-full ${point.bg} flex items-center justify-center mb-6`}>
                                <point.icon className={`w-7 h-7 ${point.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-lg"
                    >
                        Resolver mis Problemas de Seguridad
                    </button>
                </div>
            </div>
        </section>
    );
}
