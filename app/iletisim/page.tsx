"use client";
import HaritaKart from "../components/HaritaKart";
import CalismaSaatleri from "../components/CalismaSaatleri";
import React, { useState } from "react";
import {
    Phone,
    MapPin,
    Clock,
    MessageCircle,
    Send,
    PhoneCall,
    Navigation,
    CheckCircle,
} from "lucide-react";
import PageSEO from "../components/PageSEO";

const WHATSAPP_URL = "https://wa.me/905553536096";
const PHONE = "0555 353 60 96";
const ADDRESS = "Çağlayan, Tıp Fakültesi Cd. 210/a, 06260 Mamak/Ankara";

const saatler = [
    { gun: "Hafta İçi", saat: "09:00 – 19:00", kapali: false },
    { gun: "Cumartesi", saat: "09:00 – 17:00", kapali: false },
    { gun: "Pazar", saat: "Kapalı", kapali: true },
];

function IconInstagram({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

function IconTikTok({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
        </svg>
    );
}

export default function IletisimPage() {
    const [form, setForm] = useState({ ad: "", telefon: "", model: "", mesaj: "" });
    const [gonderildi, setGonderildi] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setGonderildi(true);
        setTimeout(() => setGonderildi(false), 4000);
        setForm({ ad: "", telefon: "", model: "", mesaj: "" });
    };

    return (
        <main className="bg-[#050505] min-h-screen text-white pb-24">
            <PageSEO title="İletişim" />
            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600/8 blur-[140px]" />
                <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-red-800/5 blur-[100px]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Bize Ulaşın
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 italic uppercase">
                        GARAJLA{" "}
                        <span className="text-red-600 relative">
                            BAĞLANTI
                            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-red-600/40 rounded-full" />
                        </span>{" "}
                        KURUN
                    </h1>
                    <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
                        Motosikletiniz için hızlı randevu, teknik danışmanlık veya acil çekici hizmetine tek tıkla ulaşın.
                    </p>
                </div>
            </section>

            {/* ═══ HIZLI AKSİYON ═══ */}
            <section className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a
                        href={`tel:${PHONE.replace(/\s/g, "")}`}
                        className="group flex items-center gap-5 bg-[#0F0F0F] hover:bg-red-600/10 border border-white/5 hover:border-red-600/40 p-5 rounded-2xl transition-all duration-300"
                    >
                        <div className="p-3.5 bg-red-600/10 group-hover:bg-red-600 rounded-xl text-red-500 group-hover:text-white transition-all shrink-0">
                            <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Bizi Arayın</p>
                            <p className="text-base font-black text-white">{PHONE}</p>
                        </div>
                    </a>

                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 bg-[#0F0F0F] hover:bg-green-600/10 border border-white/5 hover:border-green-600/40 p-5 rounded-2xl transition-all duration-300"
                    >
                        <div className="p-3.5 bg-green-600/10 group-hover:bg-green-600 rounded-xl text-green-500 group-hover:text-white transition-all shrink-0">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">WhatsApp</p>
                            <p className="text-base font-black text-white">Mesaj Gönder</p>
                        </div>
                    </a>

                    <a
                        href={`https://maps.app.goo.gl/Eexv9BA99b2EF26EA`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 bg-[#0F0F0F] hover:bg-blue-600/10 border border-white/5 hover:border-blue-600/40 p-5 rounded-2xl transition-all duration-300"
                    >
                        <div className="p-3.5 bg-blue-600/10 group-hover:bg-blue-600 rounded-xl text-blue-500 group-hover:text-white transition-all shrink-0">
                            <Navigation className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Konum</p>
                            <p className="text-base font-black text-white">Yol Tarifi Al</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* ═══ ANA İÇERİK ═══ */}
            <section className="container mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* SOL: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#0D0D0D] border border-white/5 p-8 lg:p-10 rounded-[32px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-red-600/30 rounded-tl-[32px] pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-red-600/10 rounded-br-[32px] pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase mb-1">
                                    Randevu / Mesaj
                                </h3>
                                <p className="text-neutral-500 text-sm mb-8">
                                    Formu doldurun, en kısa sürede size dönelim.
                                </p>

                                {gonderildi ? (
                                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                                        <CheckCircle className="w-14 h-14 text-green-500" />
                                        <p className="text-xl font-black uppercase tracking-tight">Mesajınız İletildi!</p>
                                        <p className="text-neutral-500 text-sm">En kısa sürede sizi arayacağız.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Adınız Soyadınız"
                                                value={form.ad}
                                                onChange={(e) => setForm({ ...form, ad: e.target.value })}
                                                className="bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 outline-none focus:border-red-600/50 transition-all text-sm font-bold placeholder:text-neutral-600 w-full"
                                            />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Telefon Numaranız"
                                                value={form.telefon}
                                                onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                                                className="bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 outline-none focus:border-red-600/50 transition-all text-sm font-bold placeholder:text-neutral-600 w-full"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Motosiklet Marka / Model (ör: Honda CB500)"
                                            value={form.model}
                                            onChange={(e) => setForm({ ...form, model: e.target.value })}
                                            className="bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 outline-none focus:border-red-600/50 transition-all text-sm font-bold placeholder:text-neutral-600 w-full"
                                        />
                                        <textarea
                                            placeholder="Mesajınız veya şikayetinizi kısaca açıklayın..."
                                            rows={5}
                                            value={form.mesaj}
                                            onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                                            className="bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 outline-none focus:border-red-600/50 transition-all text-sm font-bold placeholder:text-neutral-600 w-full resize-none"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 tracking-widest text-xs uppercase shadow-lg shadow-red-600/20"
                                        >
                                            <Send className="w-4 h-4" />
                                            Gönder
                                        </button>
                                        <a
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-3 border border-green-600/30 hover:border-green-600/60 text-green-500 hover:text-green-400 font-black py-4 rounded-xl transition-all tracking-widest text-xs uppercase"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            WhatsApp ile Gönder
                                        </a>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Sosyal Medya */}
                        <div className="mt-6 bg-[#0D0D0D] border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-6">
                            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] shrink-0">Sosyal Medya</span>
                            <div className="h-px flex-1 bg-white/5" />
                            <a
                                href="https://www.instagram.com/ayazmotogaraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/5 text-neutral-500 hover:text-pink-500 transition-all"
                            >
                                <IconInstagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@ayaz.moto.garaj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/5 text-neutral-500 hover:text-white transition-all"
                            >
                                <IconTikTok className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* SAĞ: Harita + Saat + Çekici */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Harita */}
                        <HaritaKart />

                        {/* Çalışma Saatleri */}
                        <CalismaSaatleri />
                    </div>
                </div>
            </section>
        </main>
    );
}