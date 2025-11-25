"use client";

import { Button } from "@/components/ui/button";

export function LeadForm({ className }: { className?: string }) {
    return (
        <form className={`space-y-4 ${className}`}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="Ej. Roberto Martínez"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Corporativo</label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="nombre@empresa.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="(664) 000-0000"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50"
                    placeholder="Nombre de tu empresa"
                />
            </div>

            <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interés Principal</label>
                <div className="relative">
                    <select
                        id="interest"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0078D4] focus:border-transparent outline-none transition-all bg-white/50 appearance-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="unity">CCTV Unity (Servidor)</option>
                        <option value="access">Control de Acceso</option>
                        <option value="alta">Nube (Alta)</option>
                        <option value="all">Todo</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <Button className="w-full font-bold text-base py-6 mt-2 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                AGENDAR LEVANTAMIENTO SIN COSTO
            </Button>

            <p className="text-xs text-center text-gray-500 mt-3">
                Tus datos están protegidos. No compartimos información.
            </p>
        </form>
    );
}
