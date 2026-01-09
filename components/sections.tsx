import React from "react";
import { Link } from "react-router";
import {
  FileText,
  Fingerprint,
  Globe,
  Mail,
  Rocket,
  Share2,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { ThreeIsometricShape } from "./ThreeIsometricShape";

export const EnterpriseSolutions = () => (
  <div className="bg-lab-bg border-b border-lab-border py-20 px-0 md:px-0">
    <div className="max-w-7xl mx-auto px-8 mb-12 flex items-end justify-between">
      <div>
        <div className="inline-flex items-center gap-2 mb-4 border border-lab-dark px-3 py-1 rounded-sm">
          <div className="w-1.5 h-1.5 bg-lab-accent animate-pulse"></div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-lab-dark font-bold">
            Enterprise Grade
          </span>
        </div>
        <h3 className="font-display font-bold text-4xl md:text-5xl uppercase text-lab-dark leading-none">
          Enterprise
          <br />
          Solutions
        </h3>
      </div>
      <div className="hidden md:block text-right">
        <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
          Modular infrastructure designed for institutional scalability and
          regulatory compliance.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 bg-lab-border gap-[1px] border-t border-b border-lab-border">
      <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
        <div className="flex justify-between items-start mb-10">
          <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
            <Rocket
              size={20}
              className="text-gray-400 group-hover:text-lab-accent transition-colors"
            />
          </div>
          <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">
            01
          </span>
        </div>

        <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">
          Whitelabel Launchpad
        </h4>
        <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
          Complete IDO/INO platform infrastructure with customizable tiers,
          staking, and vesting contracts.
        </p>

        <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Architecture
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              Multi-Chain
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Compliance
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              KYC Ready
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500"></div>
      </div>

      <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
        <div className="flex justify-between items-start mb-10">
          <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
            <ShieldCheck
              size={20}
              className="text-gray-400 group-hover:text-lab-accent transition-colors"
            />
          </div>
          <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">
            02
          </span>
        </div>

        <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">
          Automated AI Auditor
        </h4>
        <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
          Real-time smart contract vulnerability scanning powered by our
          proprietary LLM trained on 10k+ exploits.
        </p>

        <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Latency
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              Real-time
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Coverage
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              EVM / Rust
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500 delay-75"></div>
      </div>

      <div className="bg-white p-10 hover:bg-gray-50 transition-colors group relative overflow-hidden">
        <div className="flex justify-between items-start mb-10">
          <div className="w-12 h-12 border border-lab-border flex items-center justify-center bg-white group-hover:border-lab-dark transition-colors">
            <Fingerprint
              size={20}
              className="text-gray-400 group-hover:text-lab-accent transition-colors"
            />
          </div>
          <span className="font-mono text-[10px] font-bold text-gray-300 group-hover:text-lab-dark">
            03
          </span>
        </div>

        <h4 className="font-display font-bold text-xl uppercase mb-4 text-lab-dark group-hover:translate-x-1 transition-transform">
          ZK-Identity Layer
        </h4>
        <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12 min-h-[48px]">
          Privacy-preserving compliance solution allowing users to prove
          eligibility without revealing personal data.
        </p>

        <div className="border-t border-lab-border pt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Standard
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              DID / VC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">
              Privacy
            </span>
            <span className="font-mono text-[10px] text-lab-dark">
              Zero-Knowledge
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-lab-accent group-hover:w-full transition-all duration-500 delay-150"></div>
      </div>
    </div>
  </div>
);

export const PortfolioFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-lab-border border-t border-lab-border">
      <div className="bg-lab-bg p-8 md:p-12 flex flex-col justify-center min-h-[200px]">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 border border-gray-400 flex items-center justify-center text-gray-400">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
          <h3 className="font-mono text-sm text-gray-600 leading-snug font-bold mt-1">
            ▶ READY TO DISCUSS <br />
            <span className="bg-lab-dark text-white px-2 py-1 mt-2 inline-block font-bold tracking-wider">
              YOUR PROJECT?
            </span>
          </h3>
        </div>
      </div>

      <div className="bg-lab-bg p-0 flex items-center justify-center min-h-[200px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <ThreeIsometricShape
            type="Stairs"
            zoom={1.4}
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </div>
        <div className="w-2 h-2 border-2 border-lab-dark rounded-full absolute bottom-4 left-4 z-10"></div>
        <div className="absolute bottom-4 right-4 text-[8px] font-mono text-gray-400">
          FIG_09.2
        </div>
      </div>

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

export const Footer = () => {
  return (
    <footer className="bg-white text-lab-dark border-t border-lab-border">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-lab-border">
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
            <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-2">
              ChainGPT Labs
            </h4>
            <p className="font-mono text-xs text-gray-500">
              Incubating the decentralized future of Artificial Intelligence.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-green-600 font-bold">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>

        <div className="p-12 border-b md:border-b-0 md:border-r border-lab-border">
          <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">
            Explore
          </h5>
          <ul className="space-y-4 font-mono text-xs font-medium">
            <li>
              <Link to="/" className="hover:text-lab-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-lab-accent transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/ecosystem"
                className="hover:text-lab-accent transition-colors"
              >
                Our Ecosystem
              </Link>
            </li>
            <li>
              <Link
                to="/research"
                className="hover:text-lab-accent transition-colors"
              >
                Research Papers
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-12 border-b md:border-b-0 md:border-r border-lab-border">
          <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">
            Services
          </h5>
          <ul className="space-y-4 font-mono text-xs font-medium">
            <li>
              <Link
                to="/incubation"
                className="hover:text-lab-accent transition-colors"
              >
                Incubation
              </Link>
            </li>
            <li>
              <Link
                to="/acceleration"
                className="hover:text-lab-accent transition-colors"
              >
                Acceleration
              </Link>
            </li>
            <li>
              <Link
                to="/advisory"
                className="hover:text-lab-accent transition-colors"
              >
                Advisory
              </Link>
            </li>
            <li>
              <Link
                to="/grant-program"
                className="hover:text-lab-accent transition-colors"
              >
                Grant Program
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-12 flex flex-col justify-between bg-gray-50/50">
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-6">
              Connect
            </h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-lab-border bg-white flex items-center justify-center hover:border-lab-dark transition-colors"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-lab-border bg-white flex items-center justify-center hover:border-lab-dark transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
          <div className="text-[10px] text-gray-400 font-mono mt-8 md:mt-0">
            San Francisco, CA <br />
            EST. 2023
          </div>
        </div>
      </div>

      <div className="px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-wider bg-white">
        <div>© 2024 ChainGPT Labs. All Rights Reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-lab-dark transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-lab-dark transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export const NetworkStats = () => {
  const stats = [
    {
      label: "Total Value Locked",
      value: "$420.5M",
      icon: <TrendingUp size={14} />,
    },
    { label: "Active Users", value: "850K+", icon: <Users size={14} /> },
    { label: "Global Partners", value: "120+", icon: <Globe size={14} /> },
    { label: "Audits Passed", value: "100%", icon: <ShieldCheck size={14} /> },
  ];

  return (
    <div className="bg-lab-dark text-white grid grid-cols-2 md:grid-cols-4 border-t border-lab-border">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-8 md:p-12 border-r border-gray-800 last:border-r-0 flex flex-col justify-between min-h-[240px] hover:bg-gray-900 transition-colors cursor-default"
        >
          <div className="text-gray-500 mb-2">{stat.icon}</div>
          <div>
            <div className="font-mono text-3xl font-bold tracking-tighter">
              {stat.value}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-2">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PartnersGrid = () => {
  const partners = [
    "BINANCE LABS",
    "POLYGON STUDIOS",
    "SEEDIFY",
    "DAO MAKER",
    "CHAINLINK",
    "COINMARKETCAP",
  ];

  return (
    <div className="bg-lab-bg border-t border-lab-border flex flex-col md:flex-row">
      <div className="p-8 md:p-12 w-full md:w-1/4 border-b md:border-b-0 md:border-r border-lab-border flex items-center">
        <div>
          <div className="w-1.5 h-1.5 bg-lab-accent mb-4"></div>
          <h3 className="font-display font-bold text-xl uppercase leading-none text-lab-dark">
            Strategic
            <br />
            Partners
          </h3>
          <p className="font-mono text-xs text-gray-500 mt-2 max-w-[150px]">
            BACKED BY THE INDUSTRY GIANTS
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-3/4">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="border-r border-b border-lab-border p-8 flex items-center justify-center hover:bg-white transition-colors group"
          >
            <span className="font-display font-bold text-sm text-gray-400 group-hover:text-lab-dark transition-colors tracking-tight">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ResearchSection = () => {
  const articles = [
    {
      cat: "INFRASTRUCTURE",
      title: "Scalability in Zero-Knowledge Rollups",
      date: "OCT 2024",
    },
    {
      cat: "DEFI",
      title: "Automated Market Makers: V3 Analysis",
      date: "SEP 2024",
    },
    {
      cat: "SECURITY",
      title: "Smart Contract Audit Standards 2.0",
      date: "AUG 2024",
    },
  ];

  return (
    <div className="border-t border-lab-border bg-white">
      <div className="p-6 border-b border-lab-border bg-gray-50 flex justify-between items-center">
        <h3 className="font-display font-bold text-lg text-lab-dark uppercase tracking-wide">
          Latest Research
        </h3>
        <Link
          to="/research"
          className="text-[10px] font-bold uppercase tracking-widest text-lab-accent hover:text-orange-700"
        >
          View Archive →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-lab-border">
        {articles.map((article, i) => (
          <div
            key={i}
            className="bg-white p-8 group cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-wider">
                {article.cat}
              </span>
              <FileText
                size={16}
                className="text-gray-300 group-hover:text-lab-accent transition-colors"
              />
            </div>
            <h4 className="font-display font-bold text-xl leading-tight mb-8 h-12">
              {article.title}
            </h4>
            <div className="flex justify-between items-end border-t border-gray-100 pt-4">
              <span className="font-mono text-[10px] text-gray-400 font-bold">
                {article.date}
              </span>
              <span className="text-xs font-bold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NewsletterSection = () => (
  <div className="bg-lab-dark text-white border-t border-lab-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="md:w-1/2">
      <div className="flex items-center gap-3 mb-2">
        <Mail size={20} className="text-lab-accent" />
        <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
          Lab Access
        </h3>
      </div>
      <p className="font-mono text-xs text-gray-400 max-w-lg">
        Get exclusive access to early-stage incubations, research papers, and
        ecosystem updates. No noise, just signal.
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
