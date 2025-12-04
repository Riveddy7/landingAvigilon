"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo - Left Aligned */}
                <div className="flex items-center gap-2">
                    <div className="font-bold text-lg tracking-tight whitespace-nowrap flex items-center gap-2 text-[#111827]">
                        <img src="/images/LOGO IAMET.png" alt="Iamet Logo" className="h-8 w-auto object-contain" />
                        <span className="text-[#0078D4]">|</span>
                        <span className="text-sm font-normal opacity-90 hidden sm:block">Avigilon Premier Partner</span>
                    </div>
                </div>

                {/* Navigation Links - Center */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('unity-section')} className="text-sm font-medium text-gray-600 hover:text-[#0078D4] transition-colors">
                        Unity (Servidor Físico)
                    </button>
                    <button onClick={() => scrollToSection('alta-section')} className="text-sm font-medium text-gray-600 hover:text-[#0078D4] transition-colors">
                        Alta (Nube)
                    </button>
                    <button onClick={() => scrollToSection('products-section')} className="text-sm font-medium text-gray-600 hover:text-[#0078D4] transition-colors">
                        Productos
                    </button>
                    <button onClick={() => scrollToSection('contact-section')} className="text-sm font-medium text-gray-600 hover:text-[#0078D4] transition-colors">
                        Contacto
                    </button>
                </div>

                {/* Avigilon Logo - Right Aligned */}
                <div className="flex items-center">
                    <img
                        src="https://get.avigilon.com/hubfs/Avigilon/Logo/Avigilon-Logo_RGB-1.svg"
                        alt="Avigilon Logo"
                        className="h-6 w-auto object-contain opacity-80"
                    />
                </div>
            </div>
        </nav>
    );
}
