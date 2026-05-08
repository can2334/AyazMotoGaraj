"use client";

import {
    Settings2,
    Phone,
    PhoneCall,
    Home,
    Wrench,
    Truck,
    Star,
    MapPin,
    CalendarPlus,
    Clock,
} from "lucide-react";

const navLinks = [
    { label: "ANA SAYFA", icon: Home, href: "/" },
    { label: "HİZMETLER", icon: Wrench, href: "hizmetler" },
    { label: "ÇEKİCİ", icon: Truck, href: "" },
    { label: "YORUMLAR", icon: Star, href: "#" },
    { label: "İLETİŞİM", icon: MapPin, href: "iletisim" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50">
            {/* Ana menü */}
            <div className="flex items-center justify-between px-10 bg-black/80 backdrop-blur-md border-b border-white/5 h-[68px]">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="bg-red-600 w-11 h-11 rounded-lg flex items-center justify-center">
                        <Settings2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1
                            className="font-black text-xl leading-none text-white"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                        >
                            AYAZ MOTO
                        </h1>
                        <p className="text-[9px] text-red-500 tracking-[0.3em] font-bold mt-0.5">GARAJ &amp; SERVİS</p>
                    </div>
                </div>

                {/* Nav */}
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
                    {/* Acil çekici pill */}
                    <div className="flex items-center gap-2 border border-red-600 text-red-500 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        ACİL ÇEKİCİ
                    </div>

                    {/* Telefon butonu */}
                    <button className="hidden lg:flex items-center gap-2 border border-white/10 text-gray-300 hover:border-red-600 hover:text-white px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest transition-all">
                        <PhoneCall className="w-3.5 h-3.5 text-red-500" />
                        0312 000 00 00
                    </button>

                    {/* Randevu butonu */}
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest transition-all hover:-translate-y-0.5">
                        <CalendarPlus className="w-3.5 h-3.5" />
                        RANDEVU AL
                    </button>
                </div>
            </div>
        </header>
    );
}