"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/components/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function LeadFormModal() {
    const { isModalOpen, closeModal } = useModal();

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[70] px-4"
                    >
                        <div className="bg-white rounded-xl shadow-2xl p-8 relative overflow-hidden">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Auditoría + Demo</h3>
                            <p className="text-gray-600 mb-6 text-sm">Descubre vulnerabilidades en tu sistema actual sin costo.</p>

                            <LeadForm />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
