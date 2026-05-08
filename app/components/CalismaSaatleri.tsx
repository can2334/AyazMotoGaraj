"use client";

import { Clock } from "lucide-react";

// ─── Çalışma Saatleri Konfig ───────────────────────────────────────────────
type GunBilgisi = {
    gun: string;
    gunler: number[]; // 0=Pazar, 1=Pzt, ..., 6=Cmt
    acilis: number | null;
    kapanis: number | null;
};

const CALISMA_SAATLERI: GunBilgisi[] = [
    { gun: "Hafta İçi", gunler: [1, 2, 3, 4, 5], acilis: 10, kapanis: 20 },
    { gun: "Cumartesi", gunler: [6], acilis: 10, kapanis: 20 },
    { gun: "Pazar", gunler: [0], acilis: null, kapanis: null },
];

// ─── Yardımcı Fonksiyonlar ─────────────────────────────────────────────────
function saatFormat(saat: number | null): string {
    if (saat === null) return "Kapalı";
    return `${String(saat).padStart(2, "0")}:00`;
}

function aralik(acilis: number | null, kapanis: number | null): string {
    if (acilis === null) return "Kapalı";
    return `${saatFormat(acilis)} – ${saatFormat(kapanis)}`;
}

function getSonrakiAcilisGunu(bugunIndex: number): string {
    for (let i = 1; i <= 7; i++) {
        const sonraki = CALISMA_SAATLERI.find((s) =>
            s.gunler.includes((bugunIndex + i) % 7)
        );
        if (sonraki?.acilis !== null && sonraki) {
            return `${sonraki.gun} ${saatFormat(sonraki.acilis)}'de açılır`;
        }
    }
    return "yakında açılır";
}

function getDurum(): { acik: boolean; mesaj: string } {
    const now = new Date();
    const gunIndex = now.getDay();
    const suAnSaat = now.getHours() + now.getMinutes() / 60;

    const bugun = CALISMA_SAATLERI.find((s) => s.gunler.includes(gunIndex));

    // Bugün kapalı
    if (!bugun || bugun.acilis === null) {
        return { acik: false, mesaj: `Kapalı — ${getSonrakiAcilisGunu(gunIndex)}` };
    }

    const { acilis, kapanis } = bugun;

    // Henüz açılmadı
    if (suAnSaat < acilis!) {
        const kalan = Math.round((acilis! - suAnSaat) * 60);
        return { acik: false, mesaj: `Kapalı — ${kalan} dakika sonra açılıyor` };
    }

    // Açık
    if (suAnSaat < kapanis!) {
        const kalan = Math.round((kapanis! - suAnSaat) * 60);
        if (kalan <= 60) {
            return { acik: true, mesaj: `Açık — ${kalan} dakika sonra kapanıyor` };
        }
        return { acik: true, mesaj: `Açık — ${saatFormat(kapanis)}'a kadar` };
    }

    // Kapandı
    return { acik: false, mesaj: `Kapalı — ${getSonrakiAcilisGunu(gunIndex)}` };
}

// ─── Bileşen ──────────────────────────────────────────────────────────────
export default function CalismaSaatleri() {
    const durum = getDurum();
    const bugunGun = new Date().getDay();

    return (
        <div className="bg-[#0D0D0D] border border-white/5 p-6 rounded-[24px]">

            {/* Başlık */}
            <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-red-600/10 rounded-lg">
                    <Clock className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                    Çalışma Saatleri
                </h3>
            </div>

            {/* Saat Listesi */}
            <ul className="space-y-2">
                {CALISMA_SAATLERI.map((s) => {
                    const bugun = s.gunler.includes(bugunGun);
                    const kapali = s.acilis === null;

                    return (
                        <li
                            key={s.gun}
                            className={`
                                flex justify-between items-center
                                px-3 py-2.5 rounded-xl transition-all
                                ${bugun ? "bg-white/5 border border-white/8" : ""}
                            `}
                        >
                            {/* Sol: Gün adı */}
                            <div className="flex items-center gap-2">
                                {bugun && (
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                                )}
                                <span className={`text-sm font-semibold ${bugun ? "text-white" : "text-neutral-500"}`}>
                                    {s.gun}
                                </span>
                                {bugun && (
                                    <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">
                                        bugün
                                    </span>
                                )}
                            </div>

                            {/* Sağ: Saat */}
                            <span className={`
                                text-sm font-black tracking-wide
                                ${kapali ? "text-red-600" : bugun ? "text-white" : "text-neutral-400"}
                            `}>
                                {aralik(s.acilis, s.kapanis)}
                            </span>
                        </li>
                    );
                })}
            </ul>

            {/* Gerçek Zamanlı Durum */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className={`
                    w-2 h-2 rounded-full shrink-0
                    ${durum.acik ? "bg-green-500 animate-pulse" : "bg-red-600"}
                `} />
                <span className={`
                    text-[11px] font-bold tracking-wide
                    ${durum.acik ? "text-green-500" : "text-red-500"}
                `}>
                    {durum.mesaj}
                </span>
            </div>
        </div>
    );
}