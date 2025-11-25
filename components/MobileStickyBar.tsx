"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useModal } from "@/components/ModalContext";

export function MobileStickyBar() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
            <Button
                onClick={openModal}
                className="w-full font-bold shadow-lg"
            >
                Agendar Demo
            </Button>
        </motion.div>
    );
}
