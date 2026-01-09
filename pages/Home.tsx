import React from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Database,
  Layers,
  Lock,
  PieChart,
  Server,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { createSearchParams, useNavigate } from "react-router";
import { ThreeIsometricShape } from "../components/ThreeIsometricShape";
import {
  EnterpriseSolutions,
  Footer,
  NetworkStats,
  PartnersGrid,
  ResearchSection,
  NewsletterSection,
} from "../components/sections";

const Home = () => {
  const navigate = useNavigate();

  const navigateToPortfolio = (search?: string) => {
    if (search) {
      navigate({
        pathname: "/portfolio",
        search: createSearchParams({ search }).toString(),
      });
      return;
    }

    navigate("/portfolio");
  };

  return (
    <>
      <div className="bg-lab-bg border-b border-lab-border relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          <div className="p-8 md:p-12 flex flex-col justify-center border-r border-lab-border bg-lab-bg relative z-10">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-lab-accent animate-pulse rounded-full"></div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                System Online
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] text-lab-dark mb-8 tracking-tighter">
              ARCHITECTS
              <br />
              <span className="text-transparent text-outline">OF FUTURE</span>
              <br />
              INTELLIGENCE
            </h1>
            <p className="font-mono text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mb-10">
              We incubate, accelerate, and invest in the protocols defining the
              intersection of AI and Web3.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigateToPortfolio()}
                className="bg-lab-dark text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                View Portfolio
              </button>
              <button
                onClick={() => navigate("/incubation")}
                className="border border-lab-dark text-lab-dark px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="relative bg-gray-100 flex items-center justify-center overflow-hidden h-[700px] md:h-auto">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10 pointer-events-none">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>

            <div className="w-full h-full absolute inset-0">
              <ThreeIsometricShape
                type="AI-Stack"
                className="w-full h-full opacity-90 scale-110"
              />
            </div>

            <div className="absolute top-12 right-12 bg-white/80 backdrop-blur p-4 border border-lab-border shadow-sm z-10">
              <div className="flex items-center gap-2 mb-2">
                <Activity size={12} className="text-lab-accent" />
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  Network Activity
                </span>
              </div>
              <div className="text-xl font-mono font-bold text-lab-dark">
                98.4%
              </div>
            </div>

            <div className="absolute bottom-12 left-12 bg-white/80 backdrop-blur p-4 border border-lab-border shadow-sm z-10">
              <div className="flex items-center gap-2 mb-2">
                <Database size={12} className="text-lab-accent" />
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  Capital Deployed
                </span>
              </div>
              <div className="text-xl font-mono font-bold text-lab-dark">
                $42M+
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px]">
        <div
          className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => navigate("/incubation")}
        >
          <Layers className="w-8 h-8 text-lab-dark mb-6" />
          <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">
            INCUBATION
          </h3>
          <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
            End-to-end support for early-stage projects. From tokenomics to
            technical architecture.
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">
            Learn More →
          </span>
        </div>
        <div
          className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => navigate("/acceleration")}
        >
          <Zap className="w-8 h-8 text-lab-dark mb-6" />
          <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">
            ACCELERATION
          </h3>
          <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
            Growth hacking, market making, and exchange listings for established
            protocols.
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">
            Learn More →
          </span>
        </div>
        <div
          className="bg-white p-12 group hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => navigate("/advisory")}
        >
          <Cpu className="w-8 h-8 text-lab-dark mb-6" />
          <h3 className="font-display font-bold text-2xl mb-4 text-lab-dark">
            ADVISORY
          </h3>
          <p className="font-mono text-xs text-gray-500 leading-relaxed mb-8 h-16">
            Strategic guidance on legal frameworks, compliance, and long-term
            sustainability.
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-lab-accent group-hover:translate-x-2 transition-transform inline-block">
            Learn More →
          </span>
        </div>
      </div>

      <div className="bg-lab-dark text-white border-b border-lab-border grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <Server size={24} className="text-lab-accent" />
            <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
              Lab Infrastructure
            </h3>
          </div>
          <p className="font-mono text-sm text-gray-400 mb-8 leading-relaxed">
            We provide our portfolio companies with enterprise-grade
            infrastructure, high-frequency trading nodes, and dedicated GPU
            clusters for AI model training.
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
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900/50">
          <div className="w-full h-full absolute inset-0">
            <ThreeIsometricShape
              type="Server-Rack"
              zoom={1.7}
              className="w-full h-full opacity-80"
            />
          </div>
          <div className="absolute bottom-6 left-6 text-[10px] font-mono text-gray-600 uppercase">
            SYS_INFRA_V4.0
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-lab-border grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-50 order-2 md:order-1 border-t md:border-t-0 border-lab-border">
          <div className="w-full h-full absolute inset-0">
            <ThreeIsometricShape
              type="Governance-Cluster"
              zoom={1.6}
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-6 right-6 text-[10px] font-mono text-gray-400 uppercase">
            DAO_STRUCT_01
          </div>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2 border-l border-lab-border">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={24} className="text-lab-dark" />
            <h3 className="font-display font-bold text-2xl text-lab-dark uppercase tracking-wide">
              Governance & DAO
            </h3>
          </div>
          <p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">
            Decentralization is at our core. We help projects transition from
            centralized entities to fully community-owned DAOs through robust
            tokenomic design.
          </p>
          <button
            onClick={() => navigate("/research")}
            className="self-start border border-lab-dark text-lab-dark px-6 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-lab-dark hover:text-white transition-colors"
          >
            View Governance Papers
          </button>
        </div>
      </div>

      <EnterpriseSolutions />

      <NetworkStats />

      <div className="bg-lab-bg border-b border-lab-border">
        <div className="p-8 border-b border-lab-border flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab-dark rounded-full"></div>
            <h3 className="font-display font-bold text-xl uppercase text-lab-dark">
              Recent Deployments
            </h3>
          </div>
          <button
            onClick={() => navigateToPortfolio()}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-lab-accent transition-colors"
          >
            View Full Portfolio <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-lab-border">
          <div
            onClick={() => navigateToPortfolio("GT Protocol")}
            className="bg-white p-12 flex flex-col group cursor-pointer hover:bg-[#ff5500] transition-colors"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-24 h-24 relative flex items-center justify-center bg-gray-50 rounded-full border border-lab-border group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                <Shield
                  className="w-10 h-10 text-lab-dark group-hover:text-white"
                  strokeWidth={1.5}
                />
                <div className="absolute -bottom-2 -right-2 bg-lab-accent group-hover:bg-gray-50 text-white group-hover:text-lab-dark p-1.5 rounded-full border group-hover:border-lab-border border-white/30">
                  <TrendingUp size={12} />
                </div>
              </div>
              <div className="text-[10px] font-bold bg-lab-accent text-white px-2 py-1 uppercase group-hover:bg-white group-hover:text-lab-accent">
                Incubated
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4 text-lab-dark group-hover:text-white transition-colors">
              GT PROTOCOL
            </h2>
            <p className="font-mono text-xs text-gray-600 mb-6 line-clamp-2 group-hover:text-white/80">
              A decentralized, trustless platform designed to streamline and
              secure decentralized asset management.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-white/20 flex justify-between items-end">
              <div>
                <div className="text-xl font-bold font-mono text-lab-dark group-hover:text-white">
                  $4.1M
                </div>
                <div className="text-[9px] uppercase font-bold text-gray-400 group-hover:text-white/60">
                  Raised
                </div>
              </div>
              <ArrowRight
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </div>
          </div>

          <div
            onClick={() => navigateToPortfolio("Cookie3")}
            className="bg-white p-12 flex flex-col group cursor-pointer hover:bg-[#ff5500] transition-colors"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-24 h-24 relative flex items-center justify-center bg-gray-50 rounded-full border border-lab-border group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                <Database
                  className="w-10 h-10 text-lab-dark group-hover:text-white"
                  strokeWidth={1.5}
                />
                <div className="absolute -bottom-2 -right-2 bg-lab-dark group-hover:bg-gray-50 text-white group-hover:text-lab-dark p-1.5 rounded-full border group-hover:border-lab-border border-white/30">
                  <PieChart size={12} />
                </div>
              </div>
              <div className="text-[10px] font-bold border border-gray-300 text-gray-500 px-2 py-1 uppercase group-hover:bg-white group-hover:text-lab-accent group-hover:border-transparent">
                Accelerated
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4 text-lab-dark group-hover:text-white transition-colors">
              COOKIE3
            </h2>
            <p className="font-mono text-xs text-gray-600 mb-6 line-clamp-2 group-hover:text-white/80">
              The first MarketingFi protocol connecting users, creators, and
              brands in the Web3 data economy.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-white/20 flex justify-between items-end">
              <div>
                <div className="text-xl font-bold font-mono text-lab-dark group-hover:text-white">
                  $6.2M
                </div>
                <div className="text-[9px] uppercase font-bold text-gray-400 group-hover:text-white/60">
                  Raised
                </div>
              </div>
              <ArrowRight
                size={20}
                className="text-gray-300 group-hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <PartnersGrid />
      <ResearchSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Home;
