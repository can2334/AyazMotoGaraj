"use client";
import React from 'react';
import {
    Users,
    Trophy,
    Wrench,
    History,
    CheckCircle,
    ShieldCheck
} from "lucide-react";
import PageSEO from '../components/PageSEO';

export default function HakkimizdaPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pb-20">
            <PageSEO title="Hakkımızda" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full -top-24 -right-24 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                            Biz Kimiz?
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-8 italic uppercase">
                            YOLA TUTKUYLA <br />
                            <span className="text-red-600">BAĞLIYIZ</span>
                        </h1>
                        <p className="text-neutral-400 text-xl leading-relaxed max-w-2xl border-l-2 border-red-600/40 pl-6">
                            Ankara'nın kalbinde, her motorun bir ruhu olduğuna inanarak yola çıktık.
                            Ayaz Moto Garaj, sadece bir tamirhane değil, motosiklet tutkunlarının güvenli limanıdır.
                        </p>
                    </div>
                </div>
            </section>

            {/* HİKAYEMİZ & VİZYON */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-[40px] bg-neutral-900 border border-white/5 overflow-hidden relative group">
                            {/* Buraya Vedat Usta'nın dükkanda çalışırken bir fotoğrafı gelecek */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-2">Kurucu & Baş Usta</p>
                                <h3 className="text-2xl font-black italic">VEDAT USTA</h3>
                            </div>
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tighter uppercase italic">
                            10 YILLIK <span className="text-red-600">TECRÜBE</span> <br />
                            VE ŞEFFAF İŞÇİLİK
                        </h2>
                        <div className="space-y-6 text-neutral-400 leading-relaxed">
                            <p>
                                Vedat Usta, Nam-ı Diğer Tek Teker Vedat , motosiklet tutkusu ve ustalığıyla tanınan, Ankara’nın sevilen ve güven duyulan tamircilerinden biridir. Genç yaşta başladığı bu meslekte zamanla sadece bir usta değil, birçok motorcunun dostu ve danışmanı haline gelmiştir.
                                Zaman içinde edindiği deneyimle her marka ve model motosikletin dilinden anlayan Vedat Usta, en karmaşık arızaları bile kısa sürede tespit eder, çözüm üretir. Ustalığı kadar dürüstlüğüyle de tanınır. “Fazlasını değil, gerektiğini yaparız” felsefesiyle çalışır.

                            </p>
                            <p>
                                Bugün “Ayaz Motor” çatısı altında hizmet veren Vedat Usta, müşteri memnuniyetini her şeyin önünde tutar. İster arıza, ister bakım; motosikletinizi gönül rahatlığıyla teslim edebilirsiniz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                '🛠️ Motorun kalbine dokunan eller,',
                                '🕰️ Zamanında teslim,',
                                '🤝 Güven esaslı işçilik.',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-red-600" />
                                    <span className="text-sm font-bold text-neutral-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MİSYONUMUZ KARTI */}
            <section className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[40px] p-10 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <Trophy className="w-20 h-20 text-white/10 absolute -top-4 -left-4 rotate-12" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase italic">MİSYONUMUZ</h2>
                        <p className="text-red-50 text-lg lg:text-xl font-medium leading-relaxed">
                            "Motosiklet sürücülerinin güvenliğini en üst seviyede tutarak, sürüş keyfini kesintisiz kılmak. Ankara'da dürüstlük ve profesyonellik denince akla gelen ilk garaj olmaya devam etmek."
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}