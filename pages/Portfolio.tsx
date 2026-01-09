import React, { useEffect, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { PROJECTS, FILTER_TABS } from '../constants';
import { LogoPlaceholder } from '../components/LogoPlaceholder';
import { ThreeIsometricShape } from '../components/ThreeIsometricShape';
import {
  NetworkStats,
  PartnersGrid,
  ResearchSection,
  NewsletterSection,
  PortfolioFooter,
} from '../components/sections';
import { Project } from '../types';

const MetricCell: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
  <div className={`flex flex-col justify-center px-5 py-4 border-r border-lab-border last:border-r-0 ${className}`}>
    <span className="text-lab-dark text-base md:text-lg font-bold font-mono tracking-tighter leading-none transition-colors">{value}</span>
    <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1.5 transition-colors">{label}</span>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white flex flex-col h-full group relative overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:z-10">
      <div className="absolute inset-0 bg-[#ff5500] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      <div className="absolute top-0 left-0 border-b border-r border-lab-border px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white z-20 group-hover:text-lab-dark transition-colors duration-500">
        {project.category}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-12 min-h-[280px] relative z-10">
        <div className="transform group-hover:scale-110 transition-transform duration-500 ease-out scale-125 bg-transparent p-4 rounded-full">
            <LogoPlaceholder name={project.name} className="transition-colors duration-500 group-hover:text-white" />
        </div>
      </div>
      
      <div className="border-t border-lab-border grid grid-cols-2 grid-rows-2 w-full h-[144px] relative z-10">
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

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  
  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
      setActiveTab('All');
    } else {
      setSearchTerm('');
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
      <ResearchSection />
      <NewsletterSection />
      <PortfolioFooter />
    </>
  );
};

export default Portfolio;
