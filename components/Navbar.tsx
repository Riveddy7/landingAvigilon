"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
    const handleContact = () => window.open("https://wa.me/526643704676", "_blank");

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo - Left Aligned */}
                <div className="flex items-center gap-2">
                    <div className="font-bold text-lg tracking-tight whitespace-nowrap flex items-center gap-2 text-[#111827]">
                        <img src="/images/LOGO IAMET.png" alt="Iamet Logo" className="h-8 w-auto object-contain" />
                        <span className="text-[#0078D4]">|</span>
                        <span className="text-sm font-normal opacity-90">Avigilon Premier Partner</span>
                    </div>
                </div>

                {/* Contact Button - Right Aligned */}
                <Button
                    className="font-semibold gap-2 bg-green-600 text-white hover:bg-green-700 border-none h-9 text-sm"
                    onClick={handleContact}
                >
                    <MessageCircle className="w-4 h-4" />
                    Contactanos
                </Button>
            </div>
        </nav>
    );
}
