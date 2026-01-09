import React from 'react';
import { Briefcase, Scale } from 'lucide-react';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import { Footer } from '../components/sections';

const Advisory = () => {
    return (
        <>
            <div className="bg-white py-20 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                <h1 className="relative z-10 font-display font-bold text-5xl md:text-8xl text-lab-dark uppercase tracking-tighter text-center">
                    STRATEGIC<br/>ARCHITECTURE
                </h1>
                <p className="relative z-10 font-mono text-sm text-gray-500 mt-4 max-w-lg text-center">
                    Expert guidance on tokenomics, legal frameworks, and long-term protocol sustainability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-lab-border gap-[1px]">
                 <div className="bg-white p-12 flex flex-col justify-center border-b md:border-b-0">
                    <div className="mb-8">
                       <Briefcase className="w-10 h-10 text-lab-accent mb-4" />
                       <h3 className="font-display font-bold text-3xl uppercase mb-4">Corporate Structuring</h3>
                       <p className="font-mono text-sm text-gray-600 leading-relaxed">
                           Navigating the complex regulatory landscape of Web3. We help set up foundations, entities, and compliance frameworks across multiple jurisdictions including Switzerland, UAE, and BVI.
                       </p>
                    </div>
                    <ul className="space-y-3 font-mono text-xs font-bold text-gray-500">
                        <li className="flex items-center gap-2"><span>•</span> Regulatory Compliance</li>
                        <li className="flex items-center gap-2"><span>•</span> Entity Formation</li>
                        <li className="flex items-center gap-2"><span>•</span> IP Protection</li>
                    </ul>
                 </div>
                 <div className="bg-lab-bg relative overflow-hidden flex items-center justify-center h-[400px]">
                     <ThreeIsometricShape type="L-shape" className="w-full h-full opacity-80" />
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-lab-border gap-[1px] border-t border-lab-border">
                 <div className="bg-lab-bg relative overflow-hidden flex items-center justify-center h-[400px] order-2 md:order-1">
                     <ThreeIsometricShape type="Stairs" className="w-full h-full opacity-80" />
                 </div>
                 <div className="bg-white p-12 flex flex-col justify-center order-1 md:order-2">
                    <div className="mb-8">
                       <Scale className="w-10 h-10 text-lab-accent mb-4" />
                       <h3 className="font-display font-bold text-3xl uppercase mb-4">Tokenomic Design</h3>
                       <p className="font-mono text-sm text-gray-600 leading-relaxed">
                           Designing sustainable economies. Our team models supply schedules, utility loops, and governance mechanisms to ensure long-term value alignment.
                       </p>
                    </div>
                    <ul className="space-y-3 font-mono text-xs font-bold text-gray-500">
                        <li className="flex items-center gap-2"><span>•</span> Vesting Schedules</li>
                        <li className="flex items-center gap-2"><span>•</span> Utility Modeling</li>
                        <li className="flex items-center gap-2"><span>•</span> Governance Design</li>
                    </ul>
                 </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Advisory;
