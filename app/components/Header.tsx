"use client";

import { useState } from "react";
import {
    Settings2,
    PhoneCall,
    Home,
    Wrench,
    Truck,
    Star,
    MapPin,
    Menu,
    X,
    Info,
} from "lucide-react";

const navLinks = [
    { label: "ANA SAYFA", icon: Home, href: "/" },
    { label: "HİZMETLER", icon: Wrench, href: "hizmetler" },
    { label: "HAKKIMIZDA", icon: Info, href: "hakkimizda" },
    { label: "ÇEKİCİ", icon: Truck, href: "" },
    { label: "YORUMLAR", icon: Star, href: "yorumlar" },
    { label: "İLETİŞİM", icon: MapPin, href: "iletisim" },
];

export default function Header() {
    const [menuAcik, setMenuAcik] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Ana menü */}
            <div className="flex items-center justify-between px-6 lg:px-10 bg-black/80 backdrop-blur-md border-b border-white/5 h-[68px]">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Ayaz Moto Garaj Logo"
                        className="w-12 h-12 object-contain"
                    />

                    <div>
                        <h1
                            className="font-black text-xl leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                        >
                            AYAZ MOTO
                        </h1>

                        <p className="text-[9px] text-red-500 tracking-[0.3em] font-bold mt-0.5">
                            GARAJ &amp; SERVİS
                        </p>
                    </div>
                </div>
                {/* Nav - desktop */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white hover:bg-white/5 px-3.5 py-2 rounded-lg transition-all"
                        >
                            <item.icon className="w-3.5 h-3.5" />
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Sağ aksiyonlar */}
                <div className="flex items-center gap-3">
                    {/* Telefon - desktop */}
                    <a
                        href="tel:+905553536096"
                        className="hidden md:flex items-center gap-2 border border-white/10 text-gray-300 hover:border-red-600 hover:text-white px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest transition-all"
                    >
                        <PhoneCall className="w-3.5 h-3.5 text-red-500" />
                        0555 353 60 96
                    </a>

                    {/* Telefon - mobile (sadece ikon) */}
                    <a
                        href="tel:+905553536096"
                        className="md:hidden flex items-center justify-center w-10 h-10 bg-red-600/10 hover:bg-red-600 border border-red-600/30 hover:border-red-600 rounded-lg transition-all group"
                    >
                        <PhoneCall className="w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
                    </a>

                    {/* Hamburger butonu - mobile */}
                    <button
                        onClick={() => setMenuAcik(!menuAcik)}
                        className="md:hidden flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                        aria-label="Menüyü aç/kapat"
                    >
                        {menuAcik
                            ? <X className="w-4 h-4 text-white" />
                            : <Menu className="w-4 h-4 text-white" />
                        }
                    </button>
                </div>
            </div>

            {/* Mobil menü */}
            {menuAcik && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5">
                    <nav className="flex flex-col px-4 py-3 gap-1">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuAcik(false)}
                                className="flex items-center gap-3 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white hover:bg-white/5 px-4 py-3.5 rounded-xl transition-all"
                            >
                                <item.icon className="w-4 h-4 text-red-500" />
                                {item.label}
                            </a>
                        ))}

                        {/* Telefon - mobil menü içi */}
                        <a
                            href="tel:+905553536096"
                            onClick={() => setMenuAcik(false)}
                            className="flex items-center gap-3 mt-2 bg-red-600/10 hover:bg-red-600 border border-red-600/30 hover:border-red-600 px-4 py-3.5 rounded-xl transition-all group"
                        >
                            <PhoneCall className="w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
                            <span className="text-[11px] font-black tracking-widest text-gray-300 group-hover:text-white transition-colors">
                                0555 353 60 96
                            </span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}