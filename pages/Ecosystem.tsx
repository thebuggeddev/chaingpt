import React from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import { Footer } from '../components/sections';

const Ecosystem = () => {
    const categories = [
        { name: "Infrastructure", items: ["Chainlink", "Polygon", "BNB Chain", "LayerZero"] },
        { name: "DeFi", items: ["Uniswap", "PancakeSwap", "Aave", "Curve"] },
        { name: "Security", items: ["CertiK", "Hacken", "SlowMist", "SolidProof"] },
        { name: "Launchpads", items: ["Seedify", "DAO Maker", "Polkastarter", "GameFi"] }
    ];

    return (
        <>
            <div className="bg-lab-bg py-20 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                     {[...Array(36)].map((_, i) => <div key={i} className="border border-gray-400"></div>)}
                </div>
                <h1 className="relative z-10 font-display font-bold text-6xl md:text-8xl text-lab-dark uppercase tracking-tighter text-center">
                    OUR_ECOSYSTEM
                </h1>
                <p className="relative z-10 font-mono text-sm text-gray-500 mt-4 max-w-lg text-center">
                    A robust network of partners, integrations, and technological alliances powering the next generation of Web3.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-lab-border">
                {categories.map((cat, i) => (
                    <div key={i} className="bg-white p-12 hover:bg-gray-50 transition-colors">
                        <h3 className="font-display font-bold text-2xl text-lab-dark uppercase mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-lab-accent"></span>
                            {cat.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {cat.items.map((item, j) => (
                                <div key={j} className="border border-lab-border p-4 flex items-center justify-between group cursor-pointer hover:border-lab-dark transition-colors">
                                    <span className="font-mono text-xs font-bold text-gray-600 group-hover:text-lab-dark">{item}</span>
                                    <LinkIcon size={12} className="text-gray-400 group-hover:text-lab-accent" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-lab-dark text-white p-8 md:p-12 border-t border-lab-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                     <div>
                         <h3 className="font-display font-bold text-4xl mb-6">JOIN THE NETWORK</h3>
                         <p className="font-mono text-sm text-gray-400 leading-relaxed mb-8">
                             We are always looking for synergies with forward-thinking protocols and technology providers.
                         </p>
                         <button className="bg-lab-accent hover:bg-orange-600 text-white font-bold text-xs uppercase px-8 py-4 tracking-widest transition-colors">
                             Become a Partner
                         </button>
                     </div>
                     <div className="flex justify-center">
                         <div className="w-64 h-64 md:w-96 md:h-96 border border-gray-700 relative flex items-center justify-center overflow-hidden">
                             <ThreeIsometricShape type="Globe" zoom={1.2} className="w-full h-full opacity-80" />
                             <div className="absolute bottom-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">Node Status: Active</div>
                         </div>
                     </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Ecosystem;
