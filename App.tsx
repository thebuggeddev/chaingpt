import React, { useEffect } from "react";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import { NAV_LINKS } from "./constants";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Ecosystem from "./pages/Ecosystem";
import Research from "./pages/Research";
import Incubation from "./pages/Incubation";
import Acceleration from "./pages/Acceleration";
import Advisory from "./pages/Advisory";
import GrantProgram from "./pages/GrantProgram";

const navItems = [
  { label: NAV_LINKS[0], to: "/portfolio" },
  { label: NAV_LINKS[1], to: "/ecosystem" },
];

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen p-0 md:p-12 flex justify-center bg-[#e5e7eb] font-sans selection:bg-lab-accent selection:text-white">
      <div className="w-full max-w-[1440px] bg-lab-border border border-lab-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative flex flex-col gap-[1px]">
        <header className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-6 bg-lab-bg sticky top-0 z-50 border-b border-lab-border">
          <div className="flex items-center w-full md:w-auto">
            <div
              className="flex items-center gap-2.5 mr-16 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-8 h-8 bg-[#ff5500] rounded-md flex items-center justify-center text-white shadow-sm">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                  <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                  <div className="w-1.5 h-1.5 border border-white rounded-[1px]"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center -space-y-0.5">
                <div className="font-bold text-sm tracking-tight text-lab-dark">
                  ChainGPT
                </div>
                <div className="font-display font-bold text-[10px] tracking-[0.25em] text-lab-dark uppercase">
                  Labs
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative ${
                    isActive
                      ? "text-lab-dark"
                      : "text-gray-400 hover:text-lab-dark"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute -left-3 -top-1 text-gray-400 font-light text-xs">
                        ┌
                      </span>
                    )}
                    {item.label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/incubation")}
              className="bg-[#ff5500] hover:bg-orange-600 text-white text-[10px] font-extrabold px-6 py-2.5 rounded-sm uppercase tracking-widest transition-colors shadow-sm"
            >
              Apply Now
            </button>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="ecosystem" element={<Ecosystem />} />
        <Route path="research" element={<Research />} />
        <Route path="incubation" element={<Incubation />} />
        <Route path="acceleration" element={<Acceleration />} />
        <Route path="advisory" element={<Advisory />} />
        <Route path="grant-program" element={<GrantProgram />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
