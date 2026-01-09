import React from 'react';
import { Download } from 'lucide-react';
import { Footer, NewsletterSection } from '../components/sections';

const Research = () => {
    const papers = [
        { title: "Scalability in Zero-Knowledge Rollups", cat: "INFRASTRUCTURE", date: "OCT 2024", abstract: "A deep dive into the throughput limitations of current zk-rollup implementations and proposed architectural solutions using parallel proving networks." },
        { title: "Automated Market Makers: V3 Analysis", cat: "DEFI", date: "SEP 2024", abstract: "Analyzing capital efficiency improvements in concentrated liquidity models versus traditional xy=k bonding curves." },
        { title: "Smart Contract Audit Standards 2.0", cat: "SECURITY", date: "AUG 2024", abstract: "Proposing a new framework for formal verification and automated testing pipelines in high-value protocol deployments." },
        { title: "Decentralized AI Compute Networks", cat: "AI / WEB3", date: "JUL 2024", abstract: "Evaluating the economic incentives and latency challenges in distributed GPU grids for LLM training and inference." },
        { title: "Tokenomic Models for DAOs", cat: "GOVERNANCE", date: "JUN 2024", abstract: "Comparative analysis of vote-escrowed models versus quadratic voting systems in maturing decentralized organizations." }
    ];

    return (
        <>
            <div className="bg-lab-bg py-20 px-8 border-b border-lab-border flex flex-col items-center justify-center relative overflow-hidden">
                <h1 className="relative z-10 font-display font-bold text-5xl md:text-7xl text-lab-dark uppercase tracking-tighter text-center">
                    LAB_RESEARCH
                </h1>
                <p className="relative z-10 font-mono text-xs md:text-sm text-gray-500 mt-4 max-w-lg text-center">
                    Technical deep dives, whitepapers, and architectural proposals from our engineering team.
                </p>
            </div>

            <div className="bg-white">
                {papers.map((paper, i) => (
                    <div key={i} className="border-b border-lab-border p-8 md:p-12 hover:bg-gray-50 transition-colors group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-bold bg-lab-accent text-white px-2 py-1 rounded uppercase tracking-wider">{paper.cat}</span>
                                    <span className="font-mono text-[10px] text-gray-400 font-bold">{paper.date}</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-lab-dark mb-4 group-hover:text-lab-accent transition-colors">{paper.title}</h3>
                                <p className="font-mono text-xs text-gray-600 leading-relaxed max-w-2xl">
                                    {paper.abstract}
                                </p>
                            </div>
                            <div className="shrink-0 flex items-center">
                                <button className="flex items-center gap-2 border border-gray-300 hover:border-lab-dark hover:bg-lab-dark hover:text-white px-6 py-3 transition-colors text-[10px] font-bold uppercase tracking-widest">
                                    <Download size={14} />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <NewsletterSection />
            <Footer />
        </>
    );
};

export default Research;
