"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Wrench,
    Zap,
    ShieldCheck,
    Settings2,
    Truck,
    Disc,
    CheckCircle2,
    ArrowRight,
    MessageCircle
} from "lucide-react";
import PageSEO from '../components/PageSEO';

const services = [
    {
        id: '01',
        icon: <Wrench className="w-8 h-8" />,
        title: 'Periyodik Bakım',
        desc: 'Motor ömrünü uzatan profesyonel yağ değişimi, filtre kontrolü ve 21 nokta genel kontrol hizmeti.',
        features: ['Motul/Castrol Yağlar', 'Orijinal Filtreler', 'Zincir Ayarı & Yağlama']
    },
    {
        id: '02',
        icon: <Zap className="w-8 h-8" />,
        title: 'Elektrik & Elektronik',
        desc: 'Beyin tamiri, tesisat yenileme, akü ölçümü ve modern arıza tespit cihazları ile hızlı çözüm.',
        features: ['Arıza Tespiti', 'Aydınlatma Sistemleri', 'Hırsızlık Alarm Montajı']
    },
    {
        id: '03',
        icon: <Disc className="w-8 h-8" />,
        title: 'Fren & Güvenlik',
        desc: 'Fren balatası değişimi, disk düzeltme ve ABS sistem kontrolleri ile güvenli sürüş sağlıyoruz.',
        features: ['Balata Değişimi', 'Hidrolik Yenileme', 'Çelik Fren Hortumu']
    },
    {
        id: '04',
        icon: <Settings2 className="w-8 h-8" />,
        title: 'Mekanik Revizyon',
        desc: 'Motor bloğu tamiri, vites kutusu onarımı ve performans iyileştirme çalışmaları.',
        features: ['Debriyaj Seti Değişimi', 'Silindir & Piston Revizyonu', 'Şanzıman Tamiri']
    },
    {
        id: '05',
        icon: <Truck className="w-8 h-8" />,
        title: '7/24 Yol Yardım',
        desc: "Ankara'nın her bölgesine 7/24 ulaşan güvenli motosiklet çekici hizmetimizle yanınızdayız.",
        features: ['Şehir İçi Transfer', 'Acil Müdahale', 'Güvenli Bağlama Sistemi']
    },
    {
        id: '06',
        icon: <ShieldCheck className="w-8 h-8" />,
        title: 'Ekspertiz Hizmeti',
        desc: 'İkinci el alımlarda motorun geçmişini, kazasını ve mekanik durumunu şeffaf bir şekilde raporluyoruz.',
        features: ['Şasi Kontrolü', 'Kompresyon Testi', 'Elektronik Tarama']
    },
];

export default function ServicesPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="bg-[#050505] min-h-screen text-white pb-20">
            <PageSEO title="Hizmetlerimiz" />
            {/* ÜST HEADER ALANI */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full -top-24 -left-24 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6 animate-fade-in">
                            Neler Yapıyoruz?
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 italic uppercase">
                            PROFESYONEL <br />
                            <span className="text-red-600">SERVİS</span> ÇÖZÜMLERİ
                        </h1>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl border-l-2 border-red-600/40 pl-6">
                            Vedat Usta'nın 10 yılı aşkın tecrübesiyle Ankara'da tüm marka ve model motosikletler için
                            garantili işçilik ve dürüst fiyatlandırma sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* HİZMET KARTLARI */}
            <section className="container mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group bg-[#0F0F0F] border border-white/5 p-8 rounded-[32px] hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Kart Arka Plan Efekti */}
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors" />

                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-white/5 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-4xl font-black text-white/5 group-hover:text-red-600/10 transition-colors tracking-tighter">
                                    {service.id}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">
                                {service.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                                {service.desc}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-xs font-bold text-neutral-400">
                                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://wa.me/905535356096"
                                className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-white group-hover:text-red-600 transition-colors"
                            >
                                RANDEVU AL <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA: ÇEKİCİ HATTI */}
            <section className="container mx-auto px-6 mt-20">
                <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-red-600 to-red-800 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 group">
                    {/* Arka plan süslemesi */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    <Settings2 className="absolute -left-20 -bottom-20 w-80 h-80 text-white/5 animate-spin-slow pointer-events-none" />

                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
                            YOLDA MI KALDINIZ?
                        </h2>
                        <p className="text-red-100 text-lg font-medium max-w-xl">
                            Ankara genelinde 7/24 motosiklet çekici hizmetimiz için bir tık uzağınızdayız.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:05535356096"
                            className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black text-sm tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
                        >
                            <Truck className="w-5 h-5" />
                            0553 535 60 96
                        </a>
                        <Link
                            href="https://wa.me/905535356096"
                            className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-black/30 transition-all flex items-center justify-center gap-3"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WHATSAPP
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}