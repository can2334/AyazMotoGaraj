"use client";
import React from 'react';
import {
    Users,
    Trophy,
    Wrench,
    CheckCircle,
    ShieldCheck,
    Clock,
    Handshake,
    Star,
    Zap,
    Award,
} from "lucide-react";
import PageSEO from '../components/PageSEO';

const ozellikler = [
    { icon: Wrench, label: "Motorun kalbine dokunan eller" },
    { icon: Clock, label: "Zamanında teslim" },
    { icon: Handshake, label: "Güven esaslı işçilik" },
];

// ─────────────────────────────────────────────
// EKİP — İstediğin kadar kişi ekleyebilirsin.
// Fotoğraf yoksa foto alanını boş bırak (""),
// placeholder otomatik gelir.
// ─────────────────────────────────────────────
const ekip = [
    {
        foto: "/vedat.jpg",
        isim: "VEDAT USTA",
        unvan: "Kurucu & Baş Usta",
        yil: "10+",
        biyografi:
            'Vedat Usta, nam-ı diğer <span class="text-white font-bold">Tek Teker Vedat</span>, motosiklet tutkusu ve ustalığıyla tanınan, Ankara\'nın sevilen ve güven duyulan tamircilerinden biridir.',
    },
    {
        foto: "/halil.jpeg",
        isim: "HALİL",
        unvan: "Usta Çırak",
        yil: "1+",
        biyografi:
            'xx',
    },
    {
        foto: "/berk.jpeg",
        isim: "BERK",
        unvan: "Usta Çırak",
        yil: "1+",
        biyografi:
            'xx',
    },
    {
        foto: "/",
        isim: "",
        unvan: "",
        yil: "",
        biyografi:
            '',
    },
    // Örnek — eklediğinde grid otomatik düzenlenir:
    // {
    //     foto: "/ahmet.jpg",
    //     isim: "AHMET USTA",
    //     unvan: "Motor Elektroniği Uzmanı",
    //     yil: "5+",
    //     biyografi: "Elektronik sistemler ve modern enjeksiyon arızalarında uzmanlaşmış, Ankara'nın tercih ettiği isimlerden.",
    // },
];

// ─────────────────────────────────────────────
// EkipKarti — her üye için kullanılan kart
// ─────────────────────────────────────────────
function EkipKarti({ uye }: { uye: typeof ekip[0] }) {
    return (
        <div className="relative group">
            {/* Fotoğraf kartı */}
            <div className="aspect-[3/4] rounded-[32px] bg-[#0D0D0D] border border-white/5 overflow-hidden relative">
                {/* Köşe dekorlar */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-600/40 rounded-tl-[32px] z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600/20 rounded-br-[32px] z-20 pointer-events-none" />

                {/* Fotoğraf */}
                {uye.foto ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${uye.foto}')` }}
                    />
                ) : (
                    /* Fotoğraf yoksa placeholder */
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 gap-4 text-neutral-700">
                        <Wrench className="w-12 h-12" />
                        <p className="text-[10px] font-black tracking-[0.25em] uppercase">Ayaz Moto Garaj</p>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* Alt bilgi */}
                <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.25em] mb-1">
                        {uye.unvan}
                    </p>
                    <h3 className="text-xl font-black italic">{uye.isim}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-red-500 fill-red-500" />
                        ))}
                        <span className="text-[10px] text-neutral-400 ml-1 font-bold">{uye.yil} Yıl</span>
                    </div>
                </div>
            </div>

            {/* Hover — kısa biyografi */}
            <div
                className="mt-4 text-neutral-400 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: uye.biyografi }}
            />

            {/* Arka dekor kutu */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-red-600/8 border border-red-600/15 -z-10 pointer-events-none" />
        </div>
    );
}

export default function HakkimizdaPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pb-20">
            <PageSEO title="Hakkımızda" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600/8 blur-[140px]" />
                <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-red-900/5 blur-[100px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                            Biz Kimiz?
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8 italic uppercase">
                            YOLA TUTKUYLA <br />
                            <span className="text-red-600">BAĞLIYIZ</span>
                        </h1>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl border-l-2 border-red-600/50 pl-6">
                            Ankara'nın kalbinde, her motorun bir ruhu olduğuna inanarak yola çıktık.
                            Ayaz Moto Garaj, sadece bir tamirhane değil, motosiklet tutkunlarının güvenli limanıdır.
                        </p>
                    </div>
                </div>
            </section>

            {/* HİKAYEMİZ */}
            <section className="container mx-auto px-6 mb-16">
                <div className="max-w-xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                        Hikayemiz
                    </span>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-tight mb-6">
                        10 YILLIK <span className="text-red-600">TECRÜBE</span> <br />
                        VE ŞEFFAF İŞÇİLİK
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Zaman içinde edinilen deneyimle her marka ve model motosikletin dilinden anlayan ekibimiz,
                        en karmaşık arızaları bile kısa sürede tespit eder, çözüm üretir.
                        Ustalığı kadar dürüstlüğüyle de tanınır.
                    </p>
                    <p className="text-white/60 italic border-l-2 border-red-600/40 pl-4 text-xs">
                        "Fazlasını değil, gerektiğini yaparız."
                    </p>
                </div>
            </section>

            {/* EKİBİMİZ — dinamik grid */}
            <section className="container mx-auto px-6 mb-24">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                        EKİBİMİZ <span className="text-red-600">({ekip.length} Usta)</span>
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-red-600/30 to-transparent ml-8" />
                </div>

                {/*
                    Grid otomatik sütun sayısı:
                    • 1 kişi  → 1 sütun ortada
                    • 2 kişi  → 2 sütun
                    • 3 kişi  → 3 sütun
                    • 4+ kişi → max 4 sütun, satır satır dolar
                */}
                <div
                    className={`grid gap-8
                        ${ekip.length === 1 ? "grid-cols-1 max-w-sm mx-auto" : ""}
                        ${ekip.length === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
                        ${ekip.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
                        ${ekip.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : ""}
                    `}
                >
                    {ekip.map((uye) => (
                        <EkipKarti key={uye.isim} uye={uye} />
                    ))}
                </div>
            </section>

            {/* DEĞERLER — özellikler çubuğu */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {ozellikler.map((item) => (
                        <div key={item.label} className="flex items-center gap-4 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-red-600/20 px-5 py-4 rounded-xl transition-all group">
                            <div className="p-2 bg-red-600/10 group-hover:bg-red-600/20 rounded-lg transition-all shrink-0">
                                <item.icon className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-sm font-bold text-neutral-200">{item.label}</span>
                            <CheckCircle className="w-4 h-4 text-red-600/50 ml-auto shrink-0" />
                        </div>
                    ))}
                </div>
            </section>

            {/* MİSYONUMUZ KARTI */}
            <section className="container mx-auto px-6">
                <div className="relative bg-gradient-to-br from-red-700 to-red-950 rounded-[40px] p-10 lg:p-20 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    <Trophy className="w-32 h-32 text-white/5 absolute -top-4 -left-4 rotate-12 pointer-events-none" />
                    <ShieldCheck className="w-24 h-24 text-white/5 absolute -bottom-4 -right-4 -rotate-12 pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                            Ne İçin Varız?
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase italic">MİSYONUMUZ</h2>
                        <p className="text-red-50/80 text-base lg:text-lg font-medium leading-relaxed">
                            "Motosiklet sürücülerinin güvenliğini en üst seviyede tutarak, sürüş keyfini kesintisiz kılmak.
                            Ankara'da dürüstlük ve profesyonellik denince akla gelen ilk garaj olmaya devam etmek."
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}