"use client";

import { useState } from "react";
import { MapPin, Navigation, Map, Satellite } from "lucide-react";

// ─── Ayaz Moto Garaj — Gerçek Konum Bilgileri ─────────────────────────────
const KOORDINAT = { lat: 39.92543208539416, lng: 32.90746077648904 };
const ADRES = "Ayaz Moto Garaj, Ankara";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Eexv9BA99b2EF26EA";

// !5e0 = normal, !5e1 = uydu — &iwloc=& sol üst info kutusunu gizler
const EMBED_NORMAL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.713284607889!2d32.90746077648904!3d39.92543208539416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351e454c9f367%3A0x7e0d6c656a71c2cf!2sAyaz%20Moto%20Garaj!5e0!3m2!1str!2str!4v1778236699578!5m2!1str!2str&output=embed";
const EMBED_UYDU = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.713284607889!2d32.90746077648904!3d39.92543208539416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351e454c9f367%3A0x7e0d6c656a71c2cf!2sAyaz%20Moto%20Garaj!5e1!3m2!1str!2str!4v1778236699578!5m2!1str!2str&output=embed";

// ─── Tipler ───────────────────────────────────────────────────────────────
type GorunumTipi = "normal" | "uydu";

const GORUNUM_SECENEKLERI: { tip: GorunumTipi; label: string; icon: typeof Map; url: string }[] = [
    { tip: "normal", label: "Harita", icon: Map, url: EMBED_NORMAL },
    { tip: "uydu", label: "Uydu", icon: Satellite, url: EMBED_UYDU },
];

// ─── Bileşen ──────────────────────────────────────────────────────────────
export default function HaritaKart() {
    const [aktifGorunum, setAktifGorunum] = useState<GorunumTipi>("normal");
    const [yukleniyor, setYukleniyor] = useState(false);

    const aktif = GORUNUM_SECENEKLERI.find((g) => g.tip === aktifGorunum)!;

    function gorunumDegistir(tip: GorunumTipi) {
        if (tip === aktifGorunum) return;
        setYukleniyor(true);
        setAktifGorunum(tip);
    }

    const filterStyle =
        aktifGorunum === "normal"
            ? "saturate(1.2) contrast(1.05)"
            : "saturate(1.1) brightness(1.05)";

    return (
        <div className="rounded-[24px] overflow-hidden border border-white/8 relative bg-[#0D0D0D]">

            {/* ── Üst Bar ── */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2.5 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2 bg-black/70 border border-white/10 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="text-[11px] font-bold text-white">{ADRES}</span>
                </div>

                <div className="flex items-center gap-1 bg-black/70 border border-white/10 p-1 rounded-lg">
                    {GORUNUM_SECENEKLERI.map(({ tip, label, icon: Icon }) => (
                        <button
                            key={tip}
                            onClick={() => gorunumDegistir(tip)}
                            className={`
                                flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all
                                ${aktifGorunum === tip
                                    ? "bg-red-600 text-white"
                                    : "text-neutral-400 hover:text-white hover:bg-white/10"
                                }
                            `}
                        >
                            <Icon className="w-3 h-3" />
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Harita iframe ── */}
            <div className="relative" style={{ height: "340px" }}>
                {yukleniyor && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div className="w-6 h-6 border-2 border-white/20 border-t-red-500 rounded-full animate-spin" />
                    </div>
                )}
                <iframe
                    key={aktifGorunum}
                    src={aktif.url}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: filterStyle, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ayaz Moto Garaj Konumu"
                    onLoad={() => setYukleniyor(false)}
                />
            </div>

            {/* ── Alt Bar ── */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2.5 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] text-neutral-500 font-mono">
                    {KOORDINAT.lat.toFixed(5)}° K,&nbsp;{KOORDINAT.lng.toFixed(5)}° D
                </span>
                <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
                >
                    <Navigation className="w-3 h-3" />
                    Yol Tarifi
                </a>
            </div>
        </div>
    );
}