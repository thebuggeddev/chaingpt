import React from 'react';
import { BarChart3, Coins, Megaphone } from 'lucide-react';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import { Footer } from '../components/sections';

const Acceleration = () => {
    return (
        <>
            <div className="bg-lab-bg py-20 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                <h1 className="relative z-10 font-display font-bold text-5xl md:text-8xl text-lab-dark uppercase tracking-tighter text-center">
                    GROWTH & SCALE
                </h1>
                <p className="relative z-10 font-mono text-sm text-gray-500 mt-4 max-w-lg text-center">
                    Supercharging established protocols with market making, exchange listings, and global marketing campaigns.
                </p>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none">
                     <ThreeIsometricShape type="City-block" className="w-full h-full" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px]">
                 <div className="bg-white p-12 group hover:bg-gray-50 transition-colors">
                    <Megaphone className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark uppercase">Marketing</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">
                       Access to our network of 500+ KOLs, PR agencies, and community managers to drive adoption.
                    </p>
                 </div>
                 <div className="bg-white p-12 group hover:bg-gray-50 transition-colors">
                    <BarChart3 className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark uppercase">Market Making</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">
                       Liquidity provision strategies and connections to top-tier market makers for healthy volume.
                    </p>
                 </div>
                 <div className="bg-white p-12 group hover:bg-gray-50 transition-colors">
                    <Coins className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark uppercase">Exchanges</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">
                       Fast-track listings on Binance, Bybit, KuCoin, and other major centralized exchanges.
                    </p>
                 </div>
            </div>

            <div className="bg-lab-dark text-white p-12 border-t border-lab-border flex flex-col items-center text-center">
                <h2 className="font-display font-bold text-4xl mb-6">READY TO SCALE?</h2>
                <button className="bg-lab-accent text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors">
                    Apply for Acceleration
                </button>
            </div>
            
            <Footer />
        </>
    );
};

export default Acceleration;
