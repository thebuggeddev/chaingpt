import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, Search, Globe, Users, TrendingUp, ShieldCheck, FileText, Mail, Layers, Zap, Cpu, ArrowUpRight, Server, Database, Share2, Activity, Link as LinkIcon, Lock, Download, CheckCircle, ChevronRight, Target, Rocket, Shield, BarChart3, PieChart, Coins, Briefcase, Trophy, Megaphone, Scale, HeartHandshake, Fingerprint, Box, Eye, Hexagon } from 'lucide-react';
import { PROJECTS, NAV_LINKS, FILTER_TABS } from './constants';
import { LogoPlaceholder } from './components/LogoPlaceholder';
import { ThreeIsometricShape } from './components/ThreeIsometricShape';
import { Project } from './types';

// ================= TYPES & UTILS =================
type ViewState = 'home' | 'portfolio' | 'ecosystem' | 'research' | 'incubation' | 'acceleration' | 'advisory' | 'grant';

const MetricCell: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
  <div className={`flex flex-col justify-center px-5 py-4 border-r border-lab-border last:border-r-0 ${className}`}>
    <span className="text-lab-dark text-base md:text-lg font-bold font-mono tracking-tighter leading-none transition-colors">{value}</span>
    <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1.5 transition-colors">{label}</span>
  </div>
);

// ================= SHARED SECTIONS =================

const EnterpriseSolutions = () => (
  <div className="bg-lab-bg border-b border-lab-border py-20 px-0 md:px-0">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex items-end justify-between">
          <div>
              <div className="inline-flex items-center gap-2 mb-4 border border-lab-dark px-3 py-1 rounded-sm">
                  <div className="w-1.5 h-1.5 bg-lab-accent animate-pulse"></div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-lab-dark font-bold">Enterprise Grade</span>
              </div>
              <h3 className="font-display font-bold text-4xl md:text-5xl uppercase text-lab-dark leading-none">Enterprise<br/>Solutions</h3>
          </div>
          <div className="hidden md:block text-right">
               <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
                  Modular infrastructure designed for institutional scalability and regulatory compliance.
              </p>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px] border-t border-b border-lab-border">
           {/* Card 1: Whitelabel Launchpad */}
           <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
               <div className="flex justify-between items-start mb-10">
                   <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
                      <Rocket size={20} className="text-gray-400 group-hover:text-lab-accent transition-colors"/>
                   </div>
                   <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">01</span>
               </div>
               
               <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">Whitelabel Launchpad</h4>
               <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
                   Complete IDO/INO platform infrastructure with customizable tiers, staking, and vesting contracts.
               </p>
               
               <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Architecture</span>
                      <span className="font-mono text-[10px] text-lab-dark">Multi-Chain</span>
                  </div>
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Compliance</span>
                      <span className="font-mono text-[10px] text-lab-dark">KYC Ready</span>
                  </div>
               </div>
               <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500"></div>
           </div>

           {/* Card 2: AI Audit */}
           <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
               <div className="flex justify-between items-start mb-10">
                   <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
                      <ShieldCheck size={20} className="text-gray-400 group-hover:text-lab-accent transition-colors"/>
                   </div>
                   <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">02</span>
               </div>
               
               <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">Automated AI Auditor</h4>
               <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
                   Real-time smart contract vulnerability scanning powered by our proprietary LLM trained on 10k+ exploits.
               </p>
               
               <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Latency</span>
                      <span className="font-mono text-[10px] text-lab-dark">Real-time</span>
                  </div>
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Coverage</span>
                      <span className="font-mono text-[10px] text-lab-dark">EVM / Rust</span>
                  </div>
               </div>
               <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500 delay-75"></div>
           </div>

           {/* Card 3: ZK Identity */}
           <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
               <div className="flex justify-between items-start mb-10">
                   <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
                      <Fingerprint size={20} className="text-gray-400 group-hover:text-lab-accent transition-colors"/>
                   </div>
                   <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">03</span>
               </div>
               
               <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">ZK-Identity Layer</h4>
               <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
                   Privacy-preserving compliance solution allowing users to prove eligibility without revealing personal data.
               </p>
               
               <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Standard</span>
                      <span className="font-mono text-[10px] text-lab-dark">DID / VC</span>
                  </div>
                  <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Privacy</span>
                      <span className="font-mono text-[10px] text-lab-dark">Zero-Knowledge</span>
                  </div>
               </div>
               <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500 delay-150"></div>
           </div>
      </div>
  </div>
);

// Specific Footer for Portfolio View (CTA Style)
const PortfolioFooter = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-lab-border border-t border-lab-border">
            {/* Left Col: Text */}
            <div className="bg-lab-bg p-8 md:p-12 flex flex-col justify-center min-h-[200px]">
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 border border-gray-400 flex items-center justify-center text-gray-400">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                 </div>
                 <h3 className="font-mono text-sm text-gray-600 leading-snug font-bold mt-1">
                   ▶ READY TO DISCUSS <br/>
                   <span className="bg-lab-dark text-white px-2 py-1 mt-2 inline-block font-bold tracking-wider">YOUR PROJECT?</span>
                 </h3>
               </div>
            </div>

            {/* Middle Col: Icon */}
            <div className="bg-lab-bg p-0 flex items-center justify-center min-h-[200px] overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center opacity-60">
                     {/* Using Stairs as abstract tech geometry */}
                    <ThreeIsometricShape type="Stairs" zoom={1.4} className="w-64 h-64 md:w-80 md:h-80" />
                 </div>
                 <div className="w-2 h-2 border-2 border-lab-dark rounded-full absolute bottom-4 left-4 z-10"></div>
                 <div className="absolute bottom-4 right-4 text-[8px] font-mono text-gray-400">FIG_09.2</div>
            </div>

            {/* Right Col: Buttons */}
            <div className="bg-lab-bg p-8 md:p-12 flex flex-col justify-center gap-4">
                <button className="w-full bg-[#ff5500] hover:bg-orange-600 text-white font-extrabold text-[10px] uppercase tracking-widest px-6 py-4 rounded-sm shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden group">
                  <span className="relative z-10">Apply for Incubation</span>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-white/20 transform rotate-45 translate-x-2 -translate-y-2"></div>
                </button>
                <button className="w-full bg-transparent border border-gray-400 text-lab-dark hover:border-lab-dark hover:bg-white font-extrabold text-[10px] uppercase tracking-widest px-6 py-4 rounded-sm transition-all text-center relative overflow-hidden">
                  <span className="relative z-10">Apply for Funding</span>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-lab-dark"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-lab-dark"></div>
                </button>
            </div>
      </div>
  );
};

// General Site Footer
const Footer = ({ onNavigate }: { onNavigate: (v: ViewState) => void }) => {
    return (
        <footer className="bg-white text-lab-dark border-t border-lab-border">
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-lab-border">
                {/* Brand Column */}
                <div className="p-12 border-b md:border-b-0 md:border-r border-lab-border flex flex-col justify-between h-full bg-gray-50">
                    <div>
                        <div className="w-8 h-8 bg-lab-accent rounded-md flex items-center justify-center text-white shadow-sm mb-6">
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                                <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                                <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                            </div>
                        </div>
                        <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-2">ChainGPT Labs</h4>
                        <p className="font-mono text-xs text-gray-500">
                            Incubating the decentralized future of Artificial Intelligence.
                        </p>
                    </div>
                    <div className="mt-8">
                         <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="font-mono text-[10px] uppercase tracking-widest text-green-600 font-bold">All Systems Operational</span>
                         </div>
                    </div>
                </div>

                {/* Sitemap Col 1 */}
                <div className="p-12 border-b md:border-b-0 md:border-r border-lab-border">
                    <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">Explore</h5>
                    <ul className="space-y-4 font-mono text-xs font-medium">
                        <li><button onClick={() => onNavigate('home')} className="hover:text-lab-accent transition-colors">Home</button></li>
                        <li><button onClick={() => onNavigate('portfolio')} className="hover:text-lab-accent transition-colors">Portfolio</button></li>
                        <li><button onClick={() => onNavigate('ecosystem')} className="hover:text-lab-accent transition-colors">Our Ecosystem</button></li>
                        <li><button onClick={() => onNavigate('research')} className="hover:text-lab-accent transition-colors">Research Papers</button></li>
                    </ul>
                </div>

                {/* Sitemap Col 2 */}
                <div className="p-12 border-b md:border-b-0 md:border-r border-lab-border">
                    <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">Services</h5>
                    <ul className="space-y-4 font-mono text-xs font-medium">
                        <li><button onClick={() => onNavigate('incubation')} className="hover:text-lab-accent transition-colors">Incubation</button></li>
                        <li><button onClick={() => onNavigate('acceleration')} className="hover:text-lab-accent transition-colors">Acceleration</button></li>
                        <li><button onClick={() => onNavigate('advisory')} className="hover:text-lab-accent transition-colors">Advisory</button></li>
                        <li><button onClick={() => onNavigate('grant')} className="hover:text-lab-accent transition-colors">Grant Program</button></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="p-12 flex flex-col justify-between bg-gray-50/50">
                    <div>
                         <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">Connect</h5>
                         <div className="flex gap-4">
                             <a href="#" className="w-10 h-10 border border-lab-border bg-white flex items-center justify-center hover:border-lab-dark transition-colors">
                                 <Share2 size={16} />
                             </a>
                             <a href="#" className="w-10 h-10 border border-lab-border bg-white flex items-center justify-center hover:border-lab-dark transition-colors">
                                 <Mail size={16} />
                             </a>
                         </div>
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono mt-8 md:mt-0">
                        San Francisco, CA <br/>
                        EST. 2023
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-wider bg-white">
                <div>© 2024 ChainGPT Labs. All Rights Reserved.</div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-lab-dark transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-lab-dark transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

const NetworkStats = () => {
  const stats = [
    { label: "Total Value Locked", value: "$420.5M", icon: <TrendingUp size={14} /> },
    { label: "Active Users", value: "850K+", icon: <Users size={14} /> },
    { label: "Global Partners", value: "120+", icon: <Globe size={14} /> },
    { label: "Audits Passed", value: "100%", icon: <ShieldCheck size={14} /> },
  ];

  return (
    <div className="bg-lab-dark text-white grid grid-cols-2 md:grid-cols-4 border-t border-lab-border">
      {stats.map((stat, index) => (
        <div key={index} className="p-8 md:p-12 border-r border-gray-800 last:border-r-0 flex flex-col justify-between min-h-[240px] hover:bg-gray-900 transition-colors cursor-default">
          <div className="text-gray-500 mb-2">{stat.icon}</div>
          <div>
             <div className="font-mono text-3xl font-bold tracking-tighter">{stat.value}</div>
             <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-2">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PartnersGrid = () => {
  const partners = ["BINANCE LABS", "POLYGON STUDIOS", "SEEDIFY", "DAO MAKER", "CHAINLINK", "COINMARKETCAP"];
  
  return (
    <div className="bg-lab-bg border-t border-lab-border flex flex-col md:flex-row">
       <div className="p-8 md:p-12 w-full md:w-1/4 border-b md:border-b-0 md:border-r border-lab-border flex items-center">
          <div>
            <div className="w-1.5 h-1.5 bg-lab-accent mb-4"></div>
            <h3 className="font-display font-bold text-xl uppercase leading-none text-lab-dark">Strategic<br/>Partners</h3>
            <p className="font-mono text-xs text-gray-500 mt-2 max-w-[150px]">
              BACKED BY THE INDUSTRY GIANTS
            </p>
          </div>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-3/4">
          {partners.map((partner, i) => (
            <div key={i} className="border-r border-b border-lab-border p-8 flex items-center justify-center hover:bg-white transition-colors group">
               <span className="font-display font-bold text-sm text-gray-400 group-hover:text-lab-dark transition-colors tracking-tight">{partner}</span>
            </div>
          ))}
       </div>
    </div>
  );
};

const ResearchSection = ({ onNavigate }: { onNavigate: (v: ViewState) => void }) => {
  const articles = [
    { cat: "INFRASTRUCTURE", title: "Scalability in Zero-Knowledge Rollups", date: "OCT 2024" },
    { cat: "DEFI", title: "Automated Market Makers: V3 Analysis", date: "SEP 2024" },
    { cat: "SECURITY", title: "Smart Contract Audit Standards 2.0", date: "AUG 2024" },
  ];

  return (
    <div className="border-t border-lab-border bg-white">
      <div className="p-6 border-b border-lab-border bg-gray-50 flex justify-between items-center">
         <h3 className="font-display font-bold text-lg text-lab-dark uppercase tracking-wide">Latest Research</h3>
         <button onClick={() => onNavigate('research')} className="text-[10px] font-bold uppercase tracking-widest text-lab-accent hover:text-orange-700">View Archive →</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-lab-border">
         {articles.map((article, i) => (
           <div key={i} className="bg-white p-8 group cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-wider">{article.cat}</span>
                <FileText size={16} className="text-gray-300 group-hover:text-lab-accent transition-colors" />
              </div>
              <h4 className="font-display font-bold text-xl leading-tight mb-8 h-12">{article.title}</h4>
              <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                 <span className="font-mono text-[10px] text-gray-400 font-bold">{article.date}</span>
                 <span className="text-xs font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

const NewsletterSection = () => (
  <div className="bg-lab-dark text-white border-t border-lab-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
     <div className="md:w-1/2">
       <div className="flex items-center gap-3 mb-2">
         <Mail size={20} className="text-lab-accent" />
         <h3 className="font-display font-bold text-2xl uppercase tracking-wide">Lab Access</h3>
       </div>
       <p className="font-mono text-xs text-gray-400 max-w-lg">
         Get exclusive access to early-stage incubations, research papers, and ecosystem updates. No noise, just signal.
       </p>
     </div>
     <div className="md:w-1/2 w-full flex">
        <input 
          type="email" 
          placeholder="ENTER_EMAIL_ADDRESS" 
          className="bg-gray-900 border border-gray-700 text-white font-mono text-xs p-4 w-full outline-none focus:border-lab-accent placeholder-gray-600"
        />
        <button className="bg-lab-accent hover:bg-orange-600 text-white font-bold text-xs uppercase px-8 transition-colors whitespace-nowrap">
          Subscribe
        </button>
     </div>
  </div>
);

// ================= VIEW: PORTFOLIO =================

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white flex flex-col h-full group relative overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:z-10">
      
      {/* Sliding Orange Background */}
      <div className="absolute inset-0 bg-[#ff5500] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Category Label */}
      <div className="absolute top-0 left-0 border-b border-r border-lab-border px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white z-20 group-hover:text-lab-dark transition-colors duration-500">
        {project.category}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-12 min-h-[280px] relative z-10">
        <div className="transform group-hover:scale-110 transition-transform duration-500 ease-out scale-125 bg-transparent p-4 rounded-full">
            <LogoPlaceholder name={project.name} className="transition-colors duration-500 group-hover:text-white" />
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="border-t border-lab-border grid grid-cols-2 grid-rows-2 w-full h-[144px] relative z-10">
        
        {/* Metric Cells */}
        <div className="border-r border-b border-lab-border p-4 flex flex-col justify-center h-full hover:bg-white/10 transition-colors duration-300 group-hover:border-white/20">
           <div className="text-lab-dark font-mono font-bold text-sm group-hover:text-white transition-colors duration-300">{project.metrics.fundsRaised}</div>
           <div className="text-[9px] text-gray-500 uppercase mt-1 font-bold tracking-wide group-hover:text-white/80 transition-colors duration-300">Funds Raised</div>
        </div>
        
        <div className="border-b border-lab-border p-4 flex flex-col justify-center h-full hover:bg-white/10 transition-colors duration-300 group-hover:border-white/20">
             <div className="text-lab-dark font-mono font-bold text-sm group-hover:text-white transition-colors duration-300">{project.metrics.socialGrowth}</div>
             <div className="text-[9px] text-gray-500 uppercase mt-1 font-bold tracking-wide group-hover:text-white/80 transition-colors duration-300">Social Growth</div>
        </div>
        
        <div className="border-r border-lab-border p-4 flex flex-col justify-center h-full hover:bg-white/10 transition-colors duration-300 group-hover:border-white/20">
           <div className="text-lab-dark font-mono font-bold text-sm group-hover:text-white transition-colors duration-300">{project.metrics.athRoi}</div>
           <div className="text-[9px] text-gray-500 uppercase mt-1 font-bold tracking-wide group-hover:text-white/80 transition-colors duration-300">ATH ROI</div>
        </div>
        
        <div className="p-4 flex justify-between items-center cursor-pointer h-full hover:bg-white/10 transition-colors duration-300 group-hover:border-white/20">
           <div className="flex flex-col justify-center">
             <div className="text-lab-dark font-mono font-bold text-sm group-hover:text-white transition-colors duration-300">{project.metrics.partnerships}</div>
             <div className="text-[9px] text-gray-500 uppercase mt-1 font-bold tracking-wide group-hover:text-white/80 transition-colors duration-300">Partnerships</div>
           </div>
           <ArrowRight className="w-4 h-4 text-lab-dark transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

const PortfolioView: React.FC<{ onNavigate: (v: ViewState) => void, initialSearch?: string }> = ({ onNavigate, initialSearch }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState(initialSearch || '');
  
  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
      setActiveTab('All'); 
    }
  }, [initialSearch]);
  
  const featuredProject = PROJECTS[0];
  const allGridProjects = PROJECTS.slice(1);

  const filteredGridProjects = allGridProjects.filter(project => {
    const matchesCategory = activeTab === 'All' || project.category === activeTab;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="bg-lab-bg overflow-hidden py-16 md:py-20 px-4 md:px-8 relative group cursor-default flex items-center justify-center border-b border-lab-border">
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
             <div className="border-r border-lab-border opacity-60 h-full"></div>
             <div className="border-r border-lab-border opacity-60 h-full"></div>
             <div className="border-r border-lab-border opacity-60 h-full"></div>
          </div>
          <h1 className="relative z-10 font-display font-bold text-lab-dark uppercase text-center select-none flex items-end justify-center leading-[0.75]">
             <span className="text-[14vw] md:text-[10rem] tracking-tight">PORT</span>
             <span className="text-[14vw] md:text-[10rem] tracking-tight text-lab-dark mx-2 md:mx-4 transform translate-y-[2%]">_</span>
             <span className="text-[14vw] md:text-[10rem] tracking-tight">FOLIO</span>
          </h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-[1px] bg-lab-border">
            <div className="bg-lab-bg p-6 md:p-8 flex flex-col relative min-h-[250px] md:min-h-[450px]">
               <div className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-lab-dark hover:border-lab-dark cursor-pointer bg-transparent transition-colors mb-12">
                 <X size={16} strokeWidth={1.5} />
               </div>
               <div className="flex items-start gap-4 mb-auto">
                    <div className="w-1.5 h-1.5 bg-lab-dark mt-2.5 shrink-0"></div>
                    <p className="font-mono text-xs md:text-sm font-medium leading-relaxed text-gray-600 max-w-[160px]">
                    Meet our recent incubations
                    </p>
               </div>
               <div className="pt-12 border-t border-transparent">
                 <div className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold">Projects</div>
                 <div className="font-display font-bold text-6xl tracking-tighter text-lab-dark">10</div>
               </div>
            </div>

            <div className="bg-white md:col-span-2 flex flex-col relative group">
               <div className="absolute top-0 left-0 flex z-10">
                 <div className="bg-[#ff5500] text-white text-[10px] font-bold uppercase px-3 py-1.5 tracking-wider">New</div>
                 <div className="bg-white border-b border-r border-lab-border text-gray-500 text-[10px] font-bold uppercase px-3 py-1.5 tracking-wider">Incubated</div>
               </div>

               <div className="flex-1 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mt-8 md:mt-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 border border-lab-border relative">
                      <ThreeIsometricShape type="C-shape" className="w-full h-full" />
                      <div className="absolute top-2 left-2 w-2 h-px bg-gray-400"></div>
                      <div className="absolute top-2 left-2 w-px h-2 bg-gray-400"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-px bg-gray-400"></div>
                      <div className="absolute bottom-2 right-2 w-px h-2 bg-gray-400"></div>
                      <div className="absolute bottom-2 left-2 text-[8px] font-mono text-gray-400">FIG. 01</div>
                  </div>

                  <div className="flex-1 max-w-md">
                     <div className="flex items-center gap-4 mb-5">
                       <LogoPlaceholder name="GT" className="w-8 h-8 md:w-10 md:h-10 text-lab-dark" />
                       <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-lab-dark">GT Protocol</h2>
                     </div>
                     <p className="text-xs md:text-xs font-mono font-medium text-gray-500 leading-relaxed uppercase tracking-wide">
                       GT Protocol is a decentralized, trustless platform designed to streamline and secure decentralized asset management
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 border-t border-lab-border h-auto md:h-24">
                  <MetricCell label="Funds Raised" value={featuredProject.metrics.fundsRaised} className="bg-gray-50/50" />
                  <MetricCell label="ATH ROI" value={featuredProject.metrics.athRoi} className="bg-gray-50/50" />
                  <MetricCell label="Social Growth" value={featuredProject.metrics.socialGrowth} className="bg-gray-50/50" />
                  <div className="flex items-center justify-between px-6 py-4 border-r border-lab-border last:border-r-0 cursor-pointer bg-white hover:bg-gray-100 transition-colors">
                     <div className="flex flex-col justify-center">
                       <span className="text-lab-dark text-base md:text-lg font-bold font-mono tracking-tighter leading-none">{featuredProject.metrics.partnerships}</span>
                       <span className="block text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1.5">Partnerships</span>
                     </div>
                     <ArrowRight className="w-5 h-5 text-lab-dark" />
                  </div>
               </div>
            </div>
      </div>

      <div className="bg-lab-bg flex flex-col md:flex-row md:items-center justify-between border-b border-lab-border h-auto md:h-14">
           <div className="flex overflow-x-auto no-scrollbar h-full">
              {FILTER_TABS.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 md:px-8 h-14 md:h-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap border-r border-lab-border transition-colors flex items-center
                    ${activeTab === tab ? 'bg-lab-dark text-white' : 'text-gray-500 hover:text-lab-dark hover:bg-gray-200'}
                  `}
                >
                  {tab}
                </button>
              ))}
           </div>
           
           <div className="flex items-center px-6 h-14 md:h-full md:w-80 border-t md:border-t-0 md:border-l border-lab-border bg-lab-bg">
             <Search size={14} className="text-gray-400 mr-3" />
             <input 
               type="text" 
               placeholder="Search"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="bg-transparent border-none outline-none text-[10px] uppercase tracking-widest w-full placeholder-gray-400 text-lab-dark font-bold"
             />
           </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-lab-border">
           {filteredGridProjects.length > 0 ? (
             filteredGridProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))
           ) : (
             <div className="col-span-3 p-12 text-center text-gray-500 font-mono text-sm">
               NO PROJECTS FOUND MATCHING CRITERIA
             </div>
           )}
      </div>

      <NetworkStats />
      <PartnersGrid />
      <ResearchSection onNavigate={onNavigate} />
      <NewsletterSection />
      <PortfolioFooter />
    </>
  );
};

// ================= VIEW: ECOSYSTEM =================

const EcosystemView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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
                             {/* Responsive Globe Size */}
                             <ThreeIsometricShape type="Globe" zoom={1.2} className="w-full h-full opacity-80" />
                             <div className="absolute bottom-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">Node Status: Active</div>
                         </div>
                     </div>
                </div>
            </div>
            
            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: RESEARCH =================

const ResearchView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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
            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: INCUBATION =================

const IncubationView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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

            {/* The Process */}
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

            {/* Detailed Offering */}
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

            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: ACCELERATION =================

const AccelerationView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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
            
            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: ADVISORY =================

const AdvisoryView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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
            
            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: GRANT PROGRAM =================

const GrantProgramView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
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
            
            <Footer onNavigate={onNavigate} />
        </>
    );
};

// ================= VIEW: HOME =================

interface HomeViewProps {
  onNavigate: (view: ViewState, params?: { search?: string }) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      {/* HOME HERO */}
      <div className="bg-lab-bg border-b border-lab-border relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
           {/* Text Side */}
           <div className="p-8 md:p-12 flex flex-col justify-center border-r border-lab-border bg-lab-bg relative z-10">
              <div className="inline-flex items-center gap-2 mb-8">
                 <div className="w-2 h-2 bg-lab-accent animate-pulse rounded-full"></div>
                 <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">System Online</span>
              </div>
              <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] text-lab-dark mb-8 tracking-tighter">
                ARCHITECTS<br/>
                <span className="text-transparent text-outline">OF FUTURE</span><br/>
                INTELLIGENCE
              </h1>
              <p className="font-mono text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mb-10">
                We incubate, accelerate, and invest in the protocols defining the intersection of AI and Web3.
              </p>
              <div className="flex gap-4">
                 <button onClick={() => onNavigate('portfolio')} className="bg-lab-dark text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-colors">
                   View Portfolio
                 </button>
                 <button onClick={() => onNavigate('incubation')} className="border border-lab-dark text-lab-dark px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
                   Apply Now
                 </button>
              </div>
           </div>
           
           {/* Visual Side */}
           <div className="relative bg-gray-100 flex items-center justify-center overflow-hidden h-[700px] md:h-auto">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10 pointer-events-none">
                 {[...Array(64)].map((_, i) => <div key={i} className="border border-gray-300"></div>)}
              </div>
              
              {/* Force explicit height for container */}
              <div className="w-full h-full absolute inset-0">
                  <ThreeIsometricShape type="AI-Stack" className="w-full h-full opacity-90 scale-110" />
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute top-12 right-12 bg-white/80 backdrop-blur p-4 border border-lab-border shadow-sm z-10">
                 <div className="flex items-center gap-2 mb-2">
                     <Activity size={12} className="text-lab-accent" />
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Network Activity</span>
                 </div>
                 <div className="text-xl font-mono font-bold text-lab-dark">98.4%</div>
              </div>
              
              <div className="absolute bottom-12 left-12 bg-white/80 backdrop-blur p-4 border border-lab-border shadow-sm z-10">
                 <div className="flex items-center gap-2 mb-2">
                     <Database size={12} className="text-lab-accent" />
                     <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Capital Deployed</span>
                 </div>
                 <div className="text-xl font-mono font-bold text-lab-dark">$42M+</div>
              </div>
           </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="bg-lab-accent text-white py-3 border-b border-lab-border overflow-hidden flex">
         <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] font-mono text-xs font-bold uppercase tracking-[0.1em] flex gap-12">
            <span>/// Incubating the Future</span>
            <span>/// AI x Web3</span>
            <span>/// Decentralized Intelligence</span>
            <span>/// Next Gen Protocols</span>
            <span>/// Incubating the Future</span>
            <span>/// AI x Web3</span>
            <span>/// Decentralized Intelligence</span>
            <span>/// Next Gen Protocols</span>
         </div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px]">
         <div className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => onNavigate('incubation')}>
            <Layers className="w-8 h-8 text-lab-dark mb-6" />
            <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">INCUBATION</h3>
            <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
               End-to-end support for early-stage projects. From tokenomics to technical architecture.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
         </div>
         <div className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => onNavigate('acceleration')}>
            <Zap className="w-8 h-8 text-lab-dark mb-6" />
            <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">ACCELERATION</h3>
            <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
               Growth hacking, market making, and exchange listings for established protocols.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
         </div>
         <div className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => onNavigate('advisory')}>
            <Cpu className="w-8 h-8 text-lab-dark mb-6" />
            <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">ADVISORY</h3>
            <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
               Strategic guidance on legal frameworks, compliance, and long-term sustainability.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">Learn More →</span>
         </div>
      </div>
      
      {/* NEW SECTION: Infrastructure (Dark Mode) */}
      <div className="bg-lab-dark text-white border-b border-lab-border grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                  <Server size={24} className="text-lab-accent" />
                  <h3 className="font-display font-bold text-2xl uppercase tracking-wide">Lab Infrastructure</h3>
              </div>
              <p className="font-mono text-sm text-gray-400 mb-8 leading-relaxed">
                  We provide our portfolio companies with enterprise-grade infrastructure, high-frequency trading nodes, and dedicated GPU clusters for AI model training.
              </p>
              <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 font-mono text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-lab-accent"></div>
                      Dedicated RPC Nodes
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-lab-accent"></div>
                      H100 GPU Clusters
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-lab-accent"></div>
                      Zero-Latency Execution
                  </li>
              </ul>
          </div>
          {/* Responsive Height Container - Reduced Height as requested */}
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900/50">
               {/* Fixed Height Container for 3D */}
               <div className="w-full h-full absolute inset-0">
                  {/* Zoom Prop Adjusted to fill the smaller space */}
                  <ThreeIsometricShape type="Server-Rack" zoom={1.7} className="w-full h-full opacity-80" />
               </div>
               <div className="absolute bottom-6 left-6 text-[10px] font-mono text-gray-600 uppercase">SYS_INFRA_V4.0</div>
          </div>
      </div>

      {/* NEW SECTION: Governance */}
      <div className="bg-white border-b border-lab-border grid grid-cols-1 md:grid-cols-2">
          {/* Responsive Height Container - Reduced Height as requested */}
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-50 order-2 md:order-1 border-t md:border-t-0 border-lab-border">
               {/* Fixed Height Container for 3D */}
               <div className="w-full h-full absolute inset-0">
                   {/* Zoom Prop Adjusted to fill the smaller space */}
                   <ThreeIsometricShape type="Governance-Cluster" zoom={1.6} className="w-full h-full" />
               </div>
               <div className="absolute top-6 right-6 text-[10px] font-mono text-gray-400 uppercase">DAO_STRUCT_01</div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2 border-l border-lab-border">
              <div className="flex items-center gap-3 mb-6">
                  <Lock size={24} className="text-lab-dark" />
                  <h3 className="font-display font-bold text-2xl text-lab-dark uppercase tracking-wide">Governance & DAO</h3>
              </div>
              <p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">
                  Decentralization is at our core. We help projects transition from centralized entities to fully community-owned DAOs through robust tokenomic design.
              </p>
              <button onClick={() => onNavigate('research')} className="self-start border border-lab-dark text-lab-dark px-6 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-lab-dark hover:text-white transition-colors">
                   View Governance Papers
              </button>
          </div>
      </div>
      
      {/* ENTERPRISE SOLUTIONS (NEW SECTION) */}
      <EnterpriseSolutions />

      <NetworkStats />

      {/* LATEST DEPLOYMENTS (Expanded) */}
      <div className="bg-lab-bg border-b border-lab-border">
         <div className="p-8 border-b border-lab-border flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-lab-dark rounded-full"></div>
               <h3 className="font-display font-bold text-xl uppercase text-lab-dark">Recent Deployments</h3>
            </div>
            <button onClick={() => onNavigate('portfolio')} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-lab-accent transition-colors">
               View Full Portfolio <ArrowUpRight size={14} />
            </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-lab-border">
             {/* Case Study 1 */}
             <div onClick={() => onNavigate('portfolio', { search: 'GT Protocol' })} className="bg-white p-12 flex flex-col group cursor-pointer hover:bg-[#ff5500] transition-colors">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-24 h-24 relative flex items-center justify-center bg-gray-50 rounded-full border border-lab-border group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                        <Shield className="w-10 h-10 text-lab-dark group-hover:text-white" strokeWidth={1.5} />
                        <div className="absolute -bottom-2 -right-2 bg-lab-accent group-hover:bg-gray-50 text-white group-hover:text-lab-dark p-1.5 rounded-full border group-hover:border-lab-border border-white/30">
                            <TrendingUp size={12} />
                        </div>
                    </div>
                    <div className="text-[10px] font-bold bg-lab-accent text-white px-2 py-1 uppercase group-hover:bg-white group-hover:text-lab-accent">Incubated</div>
                 </div>
                 <h2 className="text-3xl font-display font-bold mb-4 text-lab-dark group-hover:text-white transition-colors">GT PROTOCOL</h2>
                 <p className="font-mono text-xs text-gray-600 mb-6 line-clamp-2 group-hover:text-white/80">
                    A decentralized, trustless platform designed to streamline and secure decentralized asset management.
                 </p>
                 <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-white/20 flex justify-between items-end">
                     <div>
                        <div className="text-xl font-bold font-mono text-lab-dark group-hover:text-white">$4.1M</div>
                        <div className="text-[9px] uppercase font-bold text-gray-400 group-hover:text-white/60">Raised</div>
                     </div>
                     <ArrowRight size={20} className="text-gray-300 group-hover:text-white" />
                 </div>
             </div>
             
             {/* Case Study 2 */}
             <div onClick={() => onNavigate('portfolio', { search: 'Cookie3' })} className="bg-white p-12 flex flex-col group cursor-pointer hover:bg-[#ff5500] transition-colors">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-24 h-24 relative flex items-center justify-center bg-gray-50 rounded-full border border-lab-border group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                         <Database className="w-10 h-10 text-lab-dark group-hover:text-white" strokeWidth={1.5} />
                         <div className="absolute -bottom-2 -right-2 bg-lab-dark group-hover:bg-gray-50 text-white group-hover:text-lab-dark p-1.5 rounded-full border group-hover:border-lab-border border-white/30">
                            <PieChart size={12} />
                        </div>
                    </div>
                    <div className="text-[10px] font-bold border border-gray-300 text-gray-500 px-2 py-1 uppercase group-hover:bg-white group-hover:text-lab-accent group-hover:border-transparent">Accelerated</div>
                 </div>
                 <h2 className="text-3xl font-display font-bold mb-4 text-lab-dark group-hover:text-white transition-colors">COOKIE3</h2>
                 <p className="font-mono text-xs text-gray-600 mb-6 line-clamp-2 group-hover:text-white/80">
                    The first MarketingFi protocol connecting users, creators, and brands in the Web3 data economy.
                 </p>
                 <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-white/20 flex justify-between items-end">
                     <div>
                        <div className="text-xl font-bold font-mono text-lab-dark group-hover:text-white">$6.2M</div>
                        <div className="text-[9px] uppercase font-bold text-gray-400 group-hover:text-white/60">Raised</div>
                     </div>
                     <ArrowRight size={20} className="text-gray-300 group-hover:text-white" />
                 </div>
             </div>
         </div>
      </div>

      <PartnersGrid />
      <ResearchSection onNavigate={onNavigate} />
      <NewsletterSection />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

// ================= MAIN APP =================

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [initialSearch, setInitialSearch] = useState<string>('');

  const handleNavigate = (v: ViewState, params?: { search?: string }) => {
    setView(v);
    if (params?.search) {
      setInitialSearch(params.search);
    } else if (v !== 'portfolio') {
      setInitialSearch('');
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-0 md:p-12 flex justify-center bg-[#e5e7eb] font-sans selection:bg-lab-accent selection:text-white">
      {/* Main Frame */}
      <div className="w-full max-w-[1440px] bg-lab-border border border-lab-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative flex flex-col gap-[1px]">
        
        {/* SHARED HEADER */}
        <header className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-6 bg-lab-bg sticky top-0 z-50 border-b border-lab-border">
          <div className="flex items-center w-full md:w-auto">
            <div className="flex items-center gap-2.5 mr-16 cursor-pointer" onClick={() => handleNavigate('home')}>
              <div className="w-8 h-8 bg-[#ff5500] rounded-md flex items-center justify-center text-white shadow-sm">
                 <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                    <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                    <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                 </div>
              </div>
              <div className="flex flex-col justify-center -space-y-0.5">
                <div className="font-bold text-sm tracking-tight text-lab-dark">ChainGPT</div>
                <div className="font-display font-bold text-[10px] tracking-[0.25em] text-lab-dark uppercase">Labs</div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest">
             {NAV_LINKS.map(link => (
               <button 
                 key={link} 
                 onClick={() => {
                     if (link === 'Portfolio') handleNavigate('portfolio');
                     else if (link === 'Our Ecosystem') handleNavigate('ecosystem');
                     else handleNavigate('home');
                 }}
                 className={`relative ${
                   ((link === 'Portfolio' && view === 'portfolio') || (link === 'Our Ecosystem' && view === 'ecosystem')) 
                   ? 'text-lab-dark' 
                   : 'text-gray-400 hover:text-lab-dark'
                 }`}
               >
                 {((link === 'Portfolio' && view === 'portfolio') || (link === 'Our Ecosystem' && view === 'ecosystem')) && (
                   <span className="absolute -left-3 -top-1 text-gray-400 font-light text-xs">┌</span>
                 )}
                 {link}
               </button>
             ))}
          </nav>

          <div className="hidden md:flex items-center gap-8">
             <button onClick={() => handleNavigate('incubation')} className="bg-[#ff5500] hover:bg-orange-600 text-white text-[10px] font-extrabold px-6 py-2.5 rounded-sm uppercase tracking-widest transition-colors shadow-sm">
               Apply Now
             </button>
          </div>
        </header>

        {/* CONTENT SWITCHER */}
        {view === 'portfolio' ? <PortfolioView onNavigate={handleNavigate} initialSearch={initialSearch} /> : 
         view === 'ecosystem' ? <EcosystemView onNavigate={handleNavigate} /> : 
         view === 'research' ? <ResearchView onNavigate={handleNavigate} /> :
         view === 'incubation' ? <IncubationView onNavigate={handleNavigate} /> :
         view === 'acceleration' ? <AccelerationView onNavigate={handleNavigate} /> :
         view === 'advisory' ? <AdvisoryView onNavigate={handleNavigate} /> :
         view === 'grant' ? <GrantProgramView onNavigate={handleNavigate} /> :
         <HomeView onNavigate={handleNavigate} />}

      </div>
    </div>
  );
}