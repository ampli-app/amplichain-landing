
import React from "react";
import { Gift, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DiscountBannerProps {
  className?: string;
  variant?: "default" | "compact";
}

const DiscountBanner: React.FC<DiscountBannerProps> = ({ 
  className, 
  variant = "default" 
}) => {
  if (variant === "compact") {
    return (
      <div className={cn(
        "inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-6 py-3 shadow-lg animate-pulse-light",
        className
      )}>
        <Gift className="h-5 w-5" />
        <div className="text-sm font-bold">
          <span className="hidden sm:inline">Kod rabatowy! </span>
          Rejestracja do 31.12 = prowizja tylko 3%
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg relative overflow-hidden",
      className
    )}>
      {/* Animated background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 animate-pulse" />
      
      <div className="flex items-start gap-4">
        <div className="bg-orange-500 text-white rounded-full p-3 shadow-lg">
          <Gift className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-black text-orange-800">
              Kod rabatowy na start!
            </h3>
            <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              NOWY
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-orange-700 font-semibold text-lg">
              Zarejestruj się do <span className="font-black text-red-600">31 grudnia 2024</span>
            </p>
            <p className="text-orange-800 font-bold text-lg">
              i otrzymaj kod obniżający prowizję do tylko <span className="text-2xl font-black text-red-600">3%</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-3 text-sm text-orange-600">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Oferta ograniczona czasowo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
