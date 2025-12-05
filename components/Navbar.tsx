"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { GoogleTranslate } from "./GoogleTranslate";

export function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/images/LOGO IAMET.png"
                        alt="Iamet Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('unity-section')} className="text-sm font-medium text-slate-600 hover:text-[#0078D4] transition-colors">
                        Unity (Servidor Físico)
                    </button>
                    <button onClick={() => scrollToSection('alta-section')} className="text-sm font-medium text-slate-600 hover:text-[#0078D4] transition-colors">
                        Alta (Nube)
                    </button>
                    <button onClick={() => scrollToSection('contact-section')} className="text-sm font-medium text-slate-600 hover:text-[#0078D4] transition-colors">
                        Contacto
                    </button>
                    <GoogleTranslate />
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="md:hidden">
                    {/* Add mobile menu logic here if needed */}
                </div>
            </div>
        </nav>
    );
}
