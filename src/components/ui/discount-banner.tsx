import React, { useState, useEffect } from "react";
import { Gift, ArrowRight, Zap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Helper Hook: Logika odliczania czasu ---
const useCountdown = (deadline: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const total = Date.parse(deadline) - Date.now();
      if (total <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(total / (1000 * 60 * 60 * 24)),
          hours: Math.floor((total / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((total / 1000 / 60) % 60),
          seconds: Math.floor((total / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return timeLeft;
};

// --- Główne propsy komponentu ---
interface DiscountBannerProps {
  className?: string;
  variant?: "default" | "compact";
  deadlineDate: string; 
  onCtaClick: () => void; 
}

// --- Enhanced Pro Komponent ---
const DiscountBanner: React.FC<DiscountBannerProps> = ({
  className,
  variant = "default",
  deadlineDate,
  onCtaClick,
}) => {
  const timeLeft = useCountdown(deadlineDate);
  const deadlineFormatted = new Date(deadlineDate).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
  });

  // Wariant kompaktowy z pulsującym efektem
  if (variant === "compact") {
    return (
      <button
        onClick={onCtaClick}
        className={cn(
          "group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white rounded-2xl px-6 py-3.5 shadow-2xl transition-all duration-300 hover:shadow-red-500/25 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-300 overflow-hidden",
          className
        )}
      >
        {/* Animowany background shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
        
        {/* Pulsująca ikona */}
        <div className="relative">
          <Zap className="h-5 w-5 flex-shrink-0 animate-pulse" />
          <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-30 animate-ping" />
        </div>
        
        <div className="text-sm font-bold text-center relative z-10">
          <span className="text-yellow-200">FLASH SALE:</span> Kod rabatowy na -70% prowizji do {deadlineFormatted}!
        </div>
      </button>
    );
  }

  // --- Wariant pro z poprawionym UX na mobile ---
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden",
        "p-4 sm:p-6 md:p-8", // Responsywny padding
        className
      )}
    >
      {/* Tło i efekty wizualne - bez zmian */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10" />
      <div className="absolute -top-16 -right-16 w-48 h-48 md:-top-24 md:-right-24 md:w-64 md:h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 md:-bottom-12 md:-left-12 md:w-48 md:h-48 bg-gradient-to-br from-orange-500/15 to-yellow-500/15 rounded-full blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        {/* SEKCJA GŁÓWNA (LEWA) - Treść i oferta */}
        <div className="flex-1 w-full space-y-4 text-center md:text-left">
          
          {/* Górna część z ikoną i nagłówkiem */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
            {/* Zmniejszona ikona na mobile */}
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl md:rounded-3xl blur-md opacity-60 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <Gift className="h-8 w-8 md:h-12 md:w-12" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                <Clock className="h-4 w-4" />
                OFERTA LIMITOWANA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
               Bonusy na start
              </h3>
            </div>
          </div>

          {/* Sekcja z ceną */}
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              -70%
            </span>
            
          </div>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Startujemy w lipcu! Ekskluzywne bonusy dla pierwszych użytkowników        </p>
        </div>

        {/* SEKCJA CTA (PRAWA) - Licznik i Przycisk */}
        <div className="w-full lg:w-auto flex-shrink-0 mt-4 md:mt-0">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 space-y-4">
            
            {/* Zmniejszony licznik na mobile */}
            <div className="text-center space-y-2">
              <div className="text-xs font-semibold text-red-400 uppercase tracking-wider flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Oferta kończy się za
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[
                  { value: timeLeft.days, label: 'DNI' },
                  { value: timeLeft.hours, label: 'GODZ' },
                  { value: timeLeft.minutes, label: 'MIN' },
                  { value: timeLeft.seconds, label: 'SEK' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg p-2 border border-gray-600">
                      <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Przycisk CTA */}
            <button
              onClick={onCtaClick}
              data-tally-open="m6pqbA"
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="group relative w-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-bold text-base sm:text-lg px-6 py-3 sm:py-4 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-red-500/25 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
              <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span>Zarejestruj się i zyskaj</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;