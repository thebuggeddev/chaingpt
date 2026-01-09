import React from 'react';
import { Briefcase, HeartHandshake, Trophy } from 'lucide-react';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import { Footer } from '../components/sections';

const GrantProgram = () => {
    return (
        <>
            <div className="bg-lab-dark text-white py-20 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20">
                     <ThreeIsometricShape type="C-shape" zoom={0.8} className="w-full h-full" />
                </div>
                <h1 className="relative z-10 font-display font-bold text-5xl md:text-8xl uppercase tracking-tighter text-center">
                    FUELING<br/><span className="text-outline-white text-transparent">INNOVATION</span>
                </h1>
                <p className="relative z-10 font-mono text-sm text-gray-400 mt-4 max-w-lg text-center">
                    Non-dilutive funding for open-source developers, researchers, and community builders advancing the AI x Web3 thesis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px]">
                 <div className="bg-white p-12 flex flex-col items-center text-center">
                    <Trophy className="w-12 h-12 text-lab-dark mb-6" strokeWidth={1} />
                    <div className="font-display font-bold text-4xl mb-2 text-lab-accent">$10K</div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Micro Grants</div>
                    <p className="font-mono text-xs text-gray-500 mt-4 leading-relaxed">
                        For solo devs and small teams building prototypes or hackathon projects.
                    </p>
                 </div>
                 <div className="bg-white p-12 flex flex-col items-center text-center border-l border-r border-lab-border">
                    <Briefcase className="w-12 h-12 text-lab-dark mb-6" strokeWidth={1} />
                    <div className="font-display font-bold text-4xl mb-2 text-lab-accent">$50K</div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Project Grants</div>
                    <p className="font-mono text-xs text-gray-500 mt-4 leading-relaxed">
                        For MVPs and beta stage projects with clear roadmap and deliverables.
                    </p>
                 </div>
                 <div className="bg-white p-12 flex flex-col items-center text-center">
                    <HeartHandshake className="w-12 h-12 text-lab-dark mb-6" strokeWidth={1} />
                    <div className="font-display font-bold text-4xl mb-2 text-lab-accent">$100K+</div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Ecosystem Grants</div>
                    <p className="font-mono text-xs text-gray-500 mt-4 leading-relaxed">
                        For major infrastructure contributions and public goods.
                    </p>
                 </div>
            </div>

            <div className="bg-lab-bg p-12 flex flex-col items-center border-t border-lab-border">
                <h3 className="font-display font-bold text-2xl uppercase mb-8">Selection Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                     <div className="bg-white p-6 border border-lab-border">
                        <h4 className="font-bold text-sm uppercase mb-2">Open Source</h4>
                        <p className="font-mono text-xs text-gray-600">Code must be open source and accessible to the community.</p>
                     </div>
                     <div className="bg-white p-6 border border-lab-border">
                        <h4 className="font-bold text-sm uppercase mb-2">Public Good</h4>
                        <p className="font-mono text-xs text-gray-600">Project should benefit the broader ecosystem, not just private profit.</p>
                     </div>
                     <div className="bg-white p-6 border border-lab-border">
                        <h4 className="font-bold text-sm uppercase mb-2">Technical Merit</h4>
                        <p className="font-mono text-xs text-gray-600">Novel approaches to solving key challenges in AI/Web3.</p>
                     </div>
                     <div className="bg-white p-6 border border-lab-border">
                        <h4 className="font-bold text-sm uppercase mb-2">Team Capability</h4>
                        <p className="font-mono text-xs text-gray-600">Demonstrated ability to execute and deliver.</p>
                     </div>
                </div>
                <button className="mt-12 bg-lab-dark text-white px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-lab-accent transition-colors">
                    Apply for Grant
                </button>
            </div>
            
            <Footer />
        </>
    );
};

export default GrantProgram;
