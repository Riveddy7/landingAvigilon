export function Footer() {
    return (
        <footer className="bg-white text-slate-600 py-12 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <img
                            src="/images/LOGO IAMET.png"
                            alt="Iamet Logo"
                            className="h-8 w-auto object-contain mb-4 mx-auto md:mx-0 opacity-90"
                        />
                        <p className="text-sm font-medium">Premier Avigilon Partner</p>
                        <p className="text-sm mt-1 text-slate-500">Paseo del Río 16220, CP. 22226, Tijuana, B.C.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-[#0078D4] transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-[#0078D4] transition-colors">Términos y Condiciones</a>
                    </div>

                    <div className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Iamet. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}
