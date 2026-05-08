"use client";
import { useEffect } from "react";

export default function GoogleReviews() {
    return (
        <section className="py-20 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-12 text-center">
                    <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
                        Müşteri Deneyimleri
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter">
                        Gerçek <span className="text-red-600">Yorumlar</span>
                    </h2>
                </div>

                {/* Elfsight Widget Alanı */}
                <div className="rounded-[32px] overflow-hidden border border-white/5 bg-[#0F0F0F] p-4">
                    <div
                        className="elfsight-app-fd7b50fd-cf48-4275-a491-5060ffc95600"
                        data-elfsight-app-lazy
                    />
                </div>
            </div>
        </section>
    );
}