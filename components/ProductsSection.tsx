"use client";

import { motion } from "framer-motion";

const products = [
    {
        title: "AI NVR",
        description: "Grabador de video en red con inteligencia artificial integrada para análisis avanzado.",
        image: "https://avigilon-745199569.imgix.net/product/AI_NVR_Premium-Plus_1.png?auto=format&fit=clip&q=80&w=600&s=8762817681728a5e07b59ad1edde39df"
    },
    {
        title: "Cámara PTZ",
        description: "Cobertura de áreas amplias con control de movimiento pan-tilt-zoom y largo alcance.",
        image: "https://avigilon-745199569.imgix.net/product/H5A_PTZ_01.png?auto=format&fit=clip&q=80&w=600&s=b3ae71950467f705d94d8c015cb8f59d"
    },
    {
        title: "Cámara Modular",
        description: "Diseño discreto y flexible para instalaciones en espacios reducidos o encubiertos.",
        image: "https://avigilon-745199569.imgix.net/product/H5A_Modular_01.png?auto=format&fit=clip&q=80&w=600&s=223a37f03f577da70a4435968e733300"
    },
    {
        title: "Cámara Multisensor",
        description: "Cobertura de hasta 360 grados con múltiples sensores en una sola carcasa.",
        image: "https://avigilon-745199569.imgix.net/product/H5A_Multisensor_01_2024-09-02-173128_gmdn.png?auto=format&fit=clip&q=80&w=600&s=b041f7fe465f1bfaa4f4902428241334"
    },
    {
        title: "Cámara Domo",
        description: "Diseño resistente y versátil para vigilancia en interiores y exteriores.",
        image: "https://avigilon-745199569.imgix.net/product/H6_Mini_09-v1.png?auto=format&fit=clip&q=80&w=600&s=aeee8eef34a7df18545b3104a5f53856"
    },
    {
        title: "Cámara Bullet",
        description: "Disuasión visual con potente iluminación IR para visión nocturna de largo alcance.",
        image: "https://avigilon-745199569.imgix.net/product/H6A_Bullet_Product_Detail_Image_1.png?auto=format&fit=clip&q=80&w=600&s=f81c78f679563636b2b234f00f93a46d"
    },
    {
        title: "Cámara Fisheye",
        description: "Vista panorámica de 360 grados sin puntos ciegos para conocimiento total de la situación.",
        image: "https://avigilon-745199569.imgix.net/product/H6A-Fisheye-01.png?auto=format&fit=clip&q=80&w=600&s=b7f96474be156bd1930912089e7152d6"
    },
    {
        title: "Cámara LPR",
        description: "Captura y reconocimiento de placas vehiculares de alta precisión en diversas condiciones.",
        image: "https://avigilon-745199569.imgix.net/product/L6A-Product_Detail_Image_1.png?auto=format&fit=clip&q=80&w=600&s=52fa77d22c4e3e40c997d97b5431ade7"
    }
];

export function ProductsSection() {
    return (
        <section id="products-section" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Hardware <span className="text-[#0078D4]">Avigilon Unity</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Soluciones de seguridad on-premise diseñadas para el rendimiento.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col"
                        >
                            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-neutral-50 flex items-center justify-center p-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 group-hover:text-[#0078D4] transition-colors line-clamp-1">
                                {product.title}
                            </h3>

                            <p className="text-xs text-slate-500 leading-snug line-clamp-3">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('lead-form-modal')?.click()}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#0078D4] rounded-full hover:bg-blue-600 hover:scale-105 shadow-lg"
                    >
                        Cotizar Equipos
                    </button>
                </div>
            </div>
        </section>
    );
}
