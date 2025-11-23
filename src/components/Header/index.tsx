"use client";

import { useState } from "react";
import { TbChristmasBall } from "react-icons/tb";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-red-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href=""
                            className="text-3xl font-extrabold text-christmas-green flex items-center space-x-2"
                        >
                            <TbChristmasBall size={32} className="text-christmas-red" />
                            <span className="drop-shadow">HoHoList</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <NavLink href="#funcionalidades">Funcionalidades</NavLink>
                        <NavLink href="#precos">Preços</NavLink>
                        <NavLink href="#como-funciona">Como funciona</NavLink>

                        <a
                            href="#"
                            className="py-2 px-5 bg-christmas-red text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Entrar / Criar conta
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-christmas-red transition"
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Animated) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col bg-white/95 backdrop-blur-md border-b border-red-100 shadow-inner">
                    <MobileItem href="#funcionalidades">Funcionalidades</MobileItem>
                    <MobileItem href="#precos">Preços</MobileItem>
                    <MobileItem href="#como-funciona">Como funciona</MobileItem>

                    <a
                        href="#"
                        className="w-full text-center mt-3 py-2 px-4 bg-christmas-red text-white font-semibold rounded-full hover:bg-red-700 transition shadow-md"
                    >
                        Entrar / Criar conta
                    </a>
                </div>
            </div>
        </header>
    );
}

/* Componentes auxiliares */

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="text-gray-600 hover:text-christmas-red font-medium transition duration-150 relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-christmas-red before:transition-all before:duration-300 hover:before:w-full"
        >
            {children}
        </a>
    );
}

function MobileItem({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="text-gray-700 hover:bg-red-50 block px-3 py-2 rounded-md text-base font-medium transition"
        >
            {children}
        </a>
    );
}
