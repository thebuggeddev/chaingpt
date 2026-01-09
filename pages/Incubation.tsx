import React from 'react';
import { CheckCircle, Cpu, Rocket, Target, Users } from 'lucide-react';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import { Footer } from '../components/sections';

const Incubation = () => {
    return (
        <>
            <div className="bg-lab-dark text-white py-24 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                     <ThreeIsometricShape type="Quantum-Core" zoom={0.8} className="w-full h-full" />
                </div>
                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur">
                         <div className="w-2 h-2 bg-lab-accent animate-pulse rounded-full"></div>
                         <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">Accepting Batch #04</span>
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter mb-6 relative">
                        Concept to<br/><span className="text-outline-white text-transparent">Unicorn</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400 max-w-xl mx-auto leading-relaxed relative">
                        A rigorous 12-week program designed to transform ambitious ideas into market-leading Web3 protocols through capital, code, and network effects.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 bg-lab-border gap-[1px]">
                 <div className="bg-white p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 right-0 p-4 font-display font-bold text-4xl text-gray-100 group-hover:text-lab-accent/10 transition-colors">01</div>
                    <Target className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-xl uppercase mb-4">Selection</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">Rigorous due diligence on team, tech, and total addressable market. Only 2% acceptance rate.</p>
                 </div>
                 <div className="bg-white p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 right-0 p-4 font-display font-bold text-4xl text-gray-100 group-hover:text-lab-accent/10 transition-colors">02</div>
                    <Cpu className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-xl uppercase mb-4">Build</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">Access to our in-house engineering team, audit partners, and architectural guidance.</p>
                 </div>
                 <div className="bg-white p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 right-0 p-4 font-display font-bold text-4xl text-gray-100 group-hover:text-lab-accent/10 transition-colors">03</div>
                    <Users className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-xl uppercase mb-4">Network</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">Direct introductions to tier-1 VCs, exchanges, and ecosystem partners.</p>
                 </div>
                 <div className="bg-white p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 right-0 p-4 font-display font-bold text-4xl text-gray-100 group-hover:text-lab-accent/10 transition-colors">04</div>
                    <Rocket className="w-8 h-8 text-lab-dark mb-6" />
                    <h3 className="font-display font-bold text-xl uppercase mb-4">Launch</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">Go-to-market strategy, TGE support, and post-launch advisory.</p>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-lab-bg p-12 flex items-center justify-center border-b border-lab-border md:border-b-0 md:border-r">
                    <div className="w-64 h-64 relative">
                        <ThreeIsometricShape type="Funding-Cube" className="w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/80 backdrop-blur px-4 py-2 border border-gray-200 shadow-sm">
                                <span className="font-mono text-xs font-bold text-lab-dark uppercase tracking-widest">$100K - $500K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-12 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-3xl uppercase mb-8">What We Provide</h3>
                    <ul className="space-y-4">
                        {[
                            "Pre-seed capital injection",
                            "Smart contract auditing credits",
                            "Legal entity structuring",
                            "Tokenomics simulation & design",
                            "Market maker introductions",
                            "CEX listing support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle size={16} className="text-lab-accent" />
                                <span className="font-mono text-sm text-gray-600 font-bold uppercase">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-10 self-start bg-lab-dark text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-lab-accent transition-colors">
                        Apply for Batch #04
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Incubation;
