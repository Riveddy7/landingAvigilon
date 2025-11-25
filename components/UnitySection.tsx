"use client";

import { motion } from "framer-motion";
import { Eye, Search, UserCheck, Brain, Shield, Zap } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";

const features = [
    {
        title: "Focus of Attention",
        description: "IA que te muestra solo lo que importa. Ignora el ruido visual y enfócate en eventos críticos.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <img
                    src="/images/01.jpg"
                    alt="Focus of Attention Interface"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
        ),
        icon: <Eye className="h-4 w-4 text-white" />,
    },
    {
        title: "Appearance Search",
        description: "Encuentra personas por ropa, género o edad en segundos a través de todas tus cámaras.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <img
                    src="/images/02.jpg"
                    alt="Appearance Search"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
        ),
        icon: <Search className="h-4 w-4 text-white" />,
    },
    {
        title: "Reconocimiento Facial",
        description: "Listas de vigilancia integradas. Identifica VIPs o amenazas conocidas al instante.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <img
                    src="/images/06.png"
                    alt="Facial Recognition"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
        ),
        icon: <UserCheck className="h-4 w-4 text-white" />,
    },
    {
        title: "AdaptAI Analytics",
        description: "Algoritmos que aprenden y se adaptan a tu entorno para reducir falsas alarmas.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <img
                    src="/images/03.png"
                    alt="AI Analytics"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
        ),
        icon: <Brain className="h-4 w-4 text-white" />,
    },
    {
        title: "Gestión Unificada",
        description: "Video, control de acceso y nube en una sola interfaz intuitiva.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <img
                    src="/images/04.jpg"
                    alt="Unified Management"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
        ),
        icon: <Zap className="h-4 w-4 text-white" />,
    },
];

export function UnitySection() {
    return (
        <section className="py-32 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            <span className="text-[#0078D4]">Avigilon Unity</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            La plataforma de seguridad on-premise más inteligente del mundo.
                        </p>
                    </motion.div>
                </div>

                <BentoGrid className="max-w-6xl mx-auto">
                    {features.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
