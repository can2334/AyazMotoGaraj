import { Settings, Phone } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-12 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="bg-red-600/10 border border-red-600 p-1.5 rounded-lg">
                    <Settings className="w-6 h-6 text-red-600" />
                </div>
                <div>
                    <h1 className="font-bold text-xl leading-none tracking-tighter">AYAZ MOTO</h1>
                    <p className="text-[10px] text-red-600 tracking-[0.2em] font-bold">GARAJ</p>
                </div>
            </div>

            {/* Menü */}
            <nav className="hidden md:flex items-center gap-8">
                {['ANA SAYFA', 'HİZMETLER', 'ÇEKİCİ', 'YORUMLAR', 'İLETİŞİM'].map((item) => (
                    <a key={item} href="#" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors">
                        {item}
                    </a>
                ))}
            </nav>

            {/* Buton */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold transition-all transform hover:scale-105">
                <Phone className="w-4 h-4 fill-current" />
                RANDEVU AL
            </button>
        </header>
    );
}