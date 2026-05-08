"use client";
import PageSEO from '../components/PageSEO';
import { Star, MessageSquare, MapPin } from "lucide-react";

export default function YorumlarPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pb-20">
            <PageSEO title="Müşteri Yorumları" />

            {/* Üst Başlık Alanı */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full -top-24 -left-24 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                            Sürücü Deneyimleri
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 italic uppercase">
                            BİZİ BİR DE <br />
                            <span className="text-red-600">ONLARDAN DİNLEYİN</span>
                        </h1>
                        <p className="text-neutral-400 text-lg max-w-xl border-l-2 border-red-600/40 pl-6">
                            Ayaz Moto Garaj'da yapılan her işlem, bir dostluğun başlangıcıdır. Google üzerindeki gerçek kullanıcı deneyimlerini aşağıda görebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* İstatistik Özet Kartları */}
            <section className="container mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0F0F0F] border border-white/5 p-6 rounded-3xl flex items-center gap-5">
                        <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
                            <Star className="w-6 h-6 fill-red-600" />
                        </div>
                        <div>
                            <div className="text-2xl font-black">4.9 / 5.0</div>
                            <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">Google Puanı</div>
                        </div>
                    </div>
                    <div className="bg-[#0F0F0F] border border-white/5 p-6 rounded-3xl flex items-center gap-5">
                        <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-black">100+</div>
                            <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">Gerçek Yorum</div>
                        </div>
                    </div>
                    <div className="bg-[#0F0F0F] border border-white/5 p-6 rounded-3xl flex items-center gap-5">
                        <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-2xl font-black">Ankara</div>
                            <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">Mamak / Tıp Fakültesi Caddesi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gerçek Elfsight Widget */}
            <section className="container mx-auto px-6">
                <div className="bg-[#0F0F0F] border border-white/5 p-2 lg:p-8 rounded-[40px] min-h-[600px]">
                    {/* Az önce oluşturduğumuz widget ID'si buraya gelecek */}
                    <div
                        className="elfsight-app-fd7b50fd-cf48-4275-a491-5060ffc95600"
                        data-elfsight-app-lazy
                    />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-neutral-500 text-sm mb-6">Siz de deneyiminizi paylaşmak ister misiniz?</p>
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJZ_PJVORR0xQRz8JxamVsDX4" // Buraya dükkanın yorum bırakma linkini koy
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase italic text-sm hover:bg-red-600 hover:text-white transition-all active:scale-95"
                    >
                        Yorum Yaz
                        <Star className="w-4 h-4 fill-current" />
                    </a>
                </div>
            </section>
        </main>
    );
}