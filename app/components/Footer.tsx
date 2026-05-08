"use client";
import { Settings, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const pages = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Çekici Hizmeti", href: "/cekici" },
    { label: "Müşteri Yorumları", href: "/yorumlar" },
    { label: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
    "Motor Bakımı",
    "Fren Sistemi",
    "Elektrik Arızaları",
    "Lastik Değişimi",
    "Yağ Değişimi",
    "Motor Çekici",
];

const socials = [
    {
        href: "https://instagram.com/ayazmotogaraj",
        label: "Instagram",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        href: "https://wa.me/905535356096",
        label: "WhatsApp",
        svg: <MessageCircle className="w-4 h-4" />,
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden">

            {/* Corner decorations — matches Hero */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-red-600/20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-red-600/20 pointer-events-none" />

            {/* Subtle red ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-600/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* ── TOP SECTION ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="lg:col-span-1 flex flex-col gap-7">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="bg-red-600 p-2.5 rounded-xl">
                            <Settings className="w-6 h-6 text-white animate-[spin_10s_linear_infinite]" />
                        </div>
                        <div>
                            <p className="font-black text-xl leading-none tracking-tighter uppercase">AYAZ MOTO</p>
                            <p className="text-[10px] text-red-600 tracking-[0.35em] font-bold uppercase mt-0.5">GARAJ</p>
                        </div>
                    </div>

                    <p className="text-neutral-500 text-sm leading-relaxed max-w-[240px]">
                        Ankara'nın güvenilir motosiklet tamircisi. Her marka, her model. Usta ellerde, güvenle.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-3">
                        {socials.map(({ svg, href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-200 group text-neutral-500 hover:text-white"
                            >
                                {svg}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Pages */}
                <div>
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white mb-7 flex items-center gap-3">
                        SAYFALAR
                        <span className="flex-1 h-px bg-white/[0.06]" />
                    </h4>
                    <ul className="space-y-3">
                        {pages.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="group flex items-center gap-2 text-neutral-500 hover:text-white text-sm font-medium transition-colors"
                                >
                                    <ArrowRight className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white mb-7 flex items-center gap-3">
                        HİZMETLER
                        <span className="flex-1 h-px bg-white/[0.06]" />
                    </h4>
                    <ul className="space-y-3">
                        {serviceLinks.map((s) => (
                            <li
                                key={s}
                                className="text-neutral-500 hover:text-neutral-300 text-sm font-medium transition-colors cursor-default flex items-center gap-2 group"
                            >
                                <span className="w-1 h-1 bg-red-600/60 rounded-full group-hover:bg-red-600 transition-colors" />
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-white mb-7 flex items-center gap-3">
                        İLETİŞİM
                        <span className="flex-1 h-px bg-white/[0.06]" />
                    </h4>
                    <ul className="space-y-5">
                        <li>
                            <a
                                href="tel:05535356096"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-9 h-9 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                                    <Phone className="w-4 h-4 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-neutral-600 uppercase tracking-wider font-bold mb-0.5">Telefon</p>
                                    <p className="text-neutral-300 text-sm font-bold group-hover:text-white transition-colors">0553 535 60 96</p>
                                </div>
                            </a>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-9 h-9 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <p className="text-[10px] text-neutral-600 uppercase tracking-wider font-bold mb-0.5">Adres</p>
                                <p className="text-neutral-400 text-sm">Ankara, Türkiye</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-9 h-9 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                <Clock className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                                <p className="text-[10px] text-neutral-600 uppercase tracking-wider font-bold mb-1">Çalışma Saatleri</p>
                                <p className="text-neutral-400 text-sm">Hafta İçi: 10:00 – 20:00</p>
                                <p className="text-neutral-400 text-sm">Cumartesi: 10:00 – 20:00</p>
                                <p className="text-neutral-400 text-sm">
                                    Pazar: <span className="text-red-600 font-bold uppercase tracking-wider">Kapalı</span>
                                </p>
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-green-500 font-bold tracking-wider uppercase">Çekici 7/24</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ── DIVIDER ── */}
            <div className="relative z-10 mx-8 lg:mx-16 h-px bg-white/[0.06]" />

            {/* ── BOTTOM BAR ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-neutral-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                    © {year} Ayaz Moto Garaj — Tüm Hakları Saklıdır.
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-neutral-600 text-[10px] tracking-wider">Ayaz Moto ile</span>
                    <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">GÜVENDE</span>
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                </div>
            </div>

        </footer>
    );
}