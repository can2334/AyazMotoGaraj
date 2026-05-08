"use client";
import Link from "next/link";
import {
    MessageCircle,
    LayoutGrid,
    ShieldCheck,
    Settings,
    Star,
    BadgeCheck,
    Wrench,
    Zap,
    Shield,
    Cog,
    Truck,
    CircleDot,
    Phone,
    MapPin,
    User,
    CheckCircle,
    ArrowRight,
    Check,
} from "lucide-react";
import { useEffect } from "react";
import PageSEO from "./PageSEO";

/* ─────────────────── DATA ─────────────────── */
const stats = [
    { value: "10+", label: "Yıl Tecrübe" },
    { value: "500+", label: "Mutlu Müşteri" },
    { value: "50+", label: "Marka & Model" },
    { value: "24/7", label: "Çekici Hizmeti" },
];

const services = [
    { icon: Wrench, title: "Motor Bakımı", desc: "Periyodik bakım, yağ değişimi ve genel kontrol hizmetleri." },
    { icon: Zap, title: "Elektrik Arızaları", desc: "Akü, kontak, aydınlatma ve elektronik sistem tamiri." },
    { icon: Shield, title: "Fren Sistemi", desc: "Fren balataları, disk ve hidrolik sistem kontrolü." },
    { icon: Cog, title: "Mekanik Tamir", desc: "Motor revizyonu, vites kutusu ve aktarma organları." },
    { icon: Truck, title: "Motor Çekici", desc: "Ankara genelinde 7/24 motosiklet çekici hizmeti." },
    { icon: CircleDot, title: "Jant & Lastik", desc: "Lastik değişimi, jant düzeltme ve balans ayarı." },
];

const testimonials = [
    { name: "Murat K.", rating: 5, text: "Vedat usta elinden çıkmış gibi, motorum sanki sıfırlandı. Fiyat performans en iyisi." },
    { name: "Serkan T.", rating: 5, text: "Yıllardır gidiyorum, hiç hayal kırıklığı yaşamadım. Dürüst, hızlı ve kaliteli." },
    { name: "Emre Y.", rating: 5, text: "Gece 11'de arıza yaptım, çekici 20 dakikada geldi. Gerçekten 7/24 hizmet veriyorlar." },
];

const brands = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "BMW", "Ducati", "KTM", "Triumph", "Harley", "Royal Enfield"];

/* ─────────────────── COMPONENT ─────────────────── */
export default function HomePage() {
    /* Scroll reveal */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("reveal-visible");
                });
            },
            { threshold: 0.12 }
        );
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <PageSEO title="AnaSayfa" />
            <section className="relative overflow-hidden bg-[#0A0A0A] min-h-screen flex flex-col">
                {/* Background lines */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 h-px bg-white/[0.03]" style={{ top: `${15 + i * 15}%` }} />
                ))}

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-600/30" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-600/30" />

                {/* Main content */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 py-20 relative z-10">

                    {/* LEFT */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-red-600 mb-6">
                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
                                Ankara'nın Güvenilir Tamircisi
                            </span>
                        </div>

                        <h1 className="text-7xl lg:text-9xl font-black uppercase leading-[0.88] tracking-tighter mb-6">
                            MOTORU<br />
                            <span className="text-red-600">USTA</span><br />
                            ELLERE<br />BIRAKIN
                        </h1>

                        <div className="w-12 h-[3px] bg-red-600 mb-6" />

                        <p className="text-neutral-400 text-sm max-w-md leading-relaxed mb-8">
                            Vedat Usta ile 10+ yıllık tecrübe. Her marka, her model motosiklet için
                            profesyonel bakım ve tamir hizmeti.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            <Link
                                href="https://wa.me/905535356096?text=Merhaba%2C%20randevu%20almak%20istiyorum"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
                            >
                                <MessageCircle className="w-5 h-5 fill-current" />
                                WHATSAPP RANDEVU
                            </Link>
                            <Link
                                href="/hizmetler"
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-2xl font-bold text-sm transition-all"
                            >
                                <LayoutGrid className="w-5 h-5" />
                                HİZMETLERİMİZ
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            {["Ücretsiz Keşif", "Garanti İşçilik", "Aynı Gün Teslimat"].map((b) => (
                                <div key={b} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                                    <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center items-center py-16">
                        <div className="absolute w-[320px] h-[320px] border border-white/5 rounded-full" />
                        <div className="absolute w-[420px] h-[420px] border border-white/[0.025] rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[520px] h-[520px] border border-red-600/5 rounded-full animate-[spin_90s_linear_infinite_reverse]" />

                        <div className="relative z-10 bg-[#0F0F0F] border border-red-600/40 p-14 rounded-3xl shadow-2xl shadow-red-600/10 flex flex-col items-center gap-5">
                            <Settings className="w-14 h-14 text-red-600 animate-[spin_8s_linear_infinite]" />
                            <div className="text-center">
                                <h2 className="font-black text-3xl tracking-tighter leading-none">AYAZ MOTO</h2>
                                <p className="text-xs text-red-600 tracking-[0.4em] mt-1 uppercase">GARAJ</p>
                            </div>
                        </div>

                        <div className="absolute top-12 right-4 lg:-right-4 bg-neutral-900/90 backdrop-blur border border-white/10 px-3 py-2 rounded-xl flex items-center gap-2 animate-[bounce_4s_ease-in-out_infinite]">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs font-bold">4.9 / 5.0</span>
                        </div>

                        <div className="absolute bottom-12 left-4 lg:-left-4 bg-neutral-900/90 backdrop-blur border border-white/10 px-3 py-2 rounded-xl flex items-center gap-2 animate-[bounce_4s_ease-in-out_0.8s_infinite]">
                            <BadgeCheck className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-bold">Güvenilir Servis</span>
                        </div>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="border-t border-white/[0.06] bg-[#111] relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className={`flex flex-col items-center py-6 ${i !== stats.length - 1 ? "border-r border-white/[0.06]" : ""}`}
                            >
                                <span className="text-4xl font-black text-red-600 leading-none">{s.value}</span>
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-500 mt-2">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          BRAND TICKER
      ═══════════════════════════════════════ */}
            <div className="bg-[#0A0A0A] border-y border-white/[0.06] overflow-hidden py-4">
                <div className="flex gap-0 animate-[ticker_25s_linear_infinite] whitespace-nowrap w-max">
                    {[...brands, ...brands].map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-3 px-8 text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-500">
                            <span className="w-1 h-1 bg-red-600 rounded-full" />
                            {b}
                        </span>
                    ))}
                </div>
                <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
          .reveal-visible { opacity: 1; transform: translateY(0); }
        `}</style>
            </div>

            {/* ═══════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════ */}
            <section className="bg-[#0A0A0A] py-28 px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="mb-16 reveal">
                        <div className="flex items-center gap-2 text-red-600 mb-4">
                            <span className="w-2 h-2 bg-red-600 rounded-full" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Ne Yapıyoruz?</span>
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] mb-4">
                            HİZMET<br /><span className="text-red-600">ALANLARI</span>
                        </h2>
                        <div className="w-12 h-[3px] bg-red-600 mb-6" />
                        <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                            Motosikletinizin her türlü bakım ve tamir ihtiyacı için profesyonel ekibimiz yanınızda.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.title}
                                    className="reveal group relative bg-[#0F0F0F] border border-white/[0.06] hover:border-red-600/40 rounded-2xl p-8 transition-all duration-300 hover:bg-[#141414] overflow-hidden"
                                    style={{ transitionDelay: `${i * 0.07}s` }}
                                >
                                    {/* Number */}
                                    <span className="absolute top-5 right-6 text-5xl font-black text-white/[0.04] select-none leading-none">
                                        0{i + 1}
                                    </span>
                                    <div className="w-11 h-11 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors">
                                        <Icon className="w-5 h-5 text-red-600" />
                                    </div>
                                    <h3 className="font-black text-lg tracking-tight mb-2">{s.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                                    <div className="mt-6 flex items-center gap-1 text-red-600 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                        Detay <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center reveal">
                        <Link
                            href="/hizmetler"
                            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
                        >
                            Tüm Hizmetleri Gör <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
            <section className="bg-[#0D0D0D] py-28 px-8 lg:px-16 border-t border-white/[0.06]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual */}
                    <div className="reveal relative flex justify-center">
                        {/* Rings */}
                        <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute w-[360px] h-[360px] border border-red-600/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                        {/* Main card */}
                        <div className="relative z-10 bg-[#0F0F0F] border border-white/10 rounded-3xl p-10 flex flex-col items-center gap-4 shadow-2xl">
                            <div className="w-20 h-20 bg-red-600/10 border-2 border-red-600/30 rounded-full flex items-center justify-center">
                                <User className="w-9 h-9 text-red-600" />
                            </div>
                            <div className="text-center">
                                <p className="font-black text-2xl tracking-tighter">VEDAT USTA</p>
                                <p className="text-xs text-red-600 tracking-[0.3em] uppercase mt-1">Tek Teker Vedat</p>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>

                        {/* Float badges */}
                        <div className="absolute top-4 right-0 lg:-right-6 bg-neutral-900/90 backdrop-blur border border-white/10 px-4 py-3 rounded-xl">
                            <span className="text-3xl font-black text-red-600 leading-none block">10+</span>
                            <span className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Yıl Deneyim</span>
                        </div>
                        <div className="absolute bottom-4 left-0 lg:-left-6 bg-neutral-900/90 backdrop-blur border border-white/10 px-4 py-3 rounded-xl">
                            <span className="text-3xl font-black text-red-600 leading-none block">500+</span>
                            <span className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Tamir</span>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="reveal">
                        <div className="flex items-center gap-2 text-red-600 mb-4">
                            <span className="w-2 h-2 bg-red-600 rounded-full" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Biz Kimiz?</span>
                        </div>
                        <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.88] mb-4">
                            VEDAT <span className="text-red-600">USTA</span>
                        </h2>
                        <div className="w-12 h-[3px] bg-red-600 mb-6" />

                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            Vedat Usta, nam-ı diğer <strong className="text-white">Tek Teker Vedat</strong>, motosiklet tutkusu ve
                            ustalığıyla Ankara'nın en sevilen tamircilerinden biridir. Genç yaşta başladığı bu meslekte zamanla
                            sadece bir usta değil, birçok motorcunun dostu ve danışmanı haline gelmiştir.
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            Her marka ve model motosikletin dilinden anlayan Vedat Usta, en karmaşık arızaları bile kısa sürede
                            tespit eder. <em className="text-neutral-300">"Fazlasını değil, gerektiğini yaparız"</em> felsefesiyle çalışır.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {["Dürüst fiyatlandırma", "Zamanında teslim", "Garanti işçilik", "Tüm markalar"].map((f) => (
                                <div key={f} className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                                    <Check className="w-4 h-4 text-red-600 shrink-0" />
                                    {f}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-600/25"
                        >
                            <MapPin className="w-5 h-5" />
                            BİZE ULAŞIN
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
            <section className="bg-[#0A0A0A] py-28 px-8 lg:px-16 border-t border-white/[0.06]">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="mb-16 reveal">
                        <div className="flex items-center gap-2 text-red-600 mb-4">
                            <span className="w-2 h-2 bg-red-600 rounded-full" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Ne Diyorlar?</span>
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88]">
                            MÜŞTERİ<br /><span className="text-red-600">YORUMLARI</span>
                        </h2>
                        <div className="w-12 h-[3px] bg-red-600 mt-4" />
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.name}
                                className="reveal bg-[#0F0F0F] border border-white/[0.06] hover:border-red-600/20 rounded-2xl p-8 transition-all duration-300"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-red-600/10 border border-red-600/20 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-red-600" />
                                    </div>
                                    <span className="text-xs font-bold tracking-wider">{t.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center reveal">
                        <Link
                            href="/yorumlar"
                            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
                        >
                            Tüm Yorumları Gör <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
            <section className="relative bg-[#0D0D0D] border-t border-white/[0.06] overflow-hidden">
                {/* Red glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 pointer-events-none" />
                <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-red-600/20" />
                <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-red-600/20" />

                <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="reveal">
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.88] mb-4">
                            MOTORUNUZ MU<br /><span className="text-red-600">ARIZA YAPTI?</span>
                        </h2>
                        <p className="text-neutral-400 text-sm">7/24 çekici hizmetimiz için hemen arayın.</p>
                    </div>
                    <div className="reveal flex flex-wrap gap-4">
                        <a
                            href="tel:05535356096"
                            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
                        >
                            <Phone className="w-5 h-5" />
                            0553 535 60 96
                        </a>
                        <Link
                            href="/cekici"
                            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
                        >
                            Çekici Hizmeti
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}