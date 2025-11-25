"use client";

import { motion } from "framer-motion";

const clients = [
    "Industria Maquiladora",
    "Parques Industriales",
    "Logística y Transporte",
    "Sector Educativo",
    "Centros Comerciales",
    "Desarrollos Residenciales",
    "Hospitales",
    "Aeropuertos",
];

export function TrustSection() {
    return (
        <section className="py-10 bg-white border-y border-gray-200 overflow-hidden">
            <div className="flex relative">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className={`text-2xl font-bold uppercase tracking-widest ${i % 2 === 0 ? 'text-gray-900' : 'text-[#0078D4]'}`}>
                                {client}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
        </section>
    );
}
