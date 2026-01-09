import React from 'react';

interface LogoPlaceholderProps {
  name: string;
  className?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ name, className = "" }) => {
  const styles = `flex items-center justify-center text-lab-dark ${className}`;

  if (name.includes('GT')) {
    return (
      <div className={`${styles} gap-2`}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h3v2h-3v4h-2v-4H8v-2h3V7z" />
        </svg>
      </div>
    );
  }
  
  if (name.includes('SOLIDUS')) {
     return (
       <div className={`${styles} flex-col`}>
         <div className="mb-2">
            {/* Cyborg Head Silhouette */}
            <svg viewBox="0 0 24 24" fill="#0f172a" className="w-10 h-10">
               <path d="M12 2a5 5 0 0 1 5 5v2h-2V7a3 3 0 0 0-6 0v2H7V7a5 5 0 0 1 5-5z" />
               <path d="M6 10h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z" />
               <path d="M9 14h2v1H9zM13 14h2v1h-2z" fill="white"/>
            </svg>
         </div>
         <div className="text-center leading-none mt-1">
             <div className="font-display font-bold text-xl tracking-widest text-lab-dark">SOLIDUS</div>
             <div className="font-sans text-[7px] tracking-[0.3em] text-gray-500 font-bold mt-1 uppercase">AI TECH</div>
         </div>
       </div>
     );
  }

  if (name.includes('Cookie')) {
    return (
      <div className={`${styles} gap-2`}>
        {/* Cookie Icon */}
        <div className="relative w-8 h-8">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5zm0 17a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5z" />
                <circle cx="8.5" cy="9.5" r="1.2" />
                <circle cx="12.5" cy="14.5" r="1.2" />
                <circle cx="15.5" cy="10.5" r="1.2" />
                <path d="M16.5 6.5a2 2 0 0 0-2-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>
        <span className="font-display font-bold text-2xl tracking-tight">Cookie3</span>
      </div>
    );
  }

  if (name.includes('FURY')) {
     return (
      <div className={`${styles} flex-col items-center`}>
        <div className="font-display font-black text-3xl tracking-tighter leading-none text-center text-lab-dark">
            ENGINES
        </div>
        <div className="font-display font-bold text-sm tracking-widest leading-none text-center mt-0.5 text-gray-700">
            OF <span className="font-black text-lab-dark">FURY</span>
        </div>
      </div>
    );
  }
  
   if (name.includes('OMNIA')) {
     return (
       <div className={styles}>
         <div className="font-sans font-bold text-3xl tracking-[0.05em] text-lab-dark">OMNIA</div>
       </div>
     );
  }

  if (name.includes('DEXCHECK')) {
      return (
      <div className={`${styles} gap-2`}>
        <div className="w-6 h-6 flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-5 h-5 text-lab-dark">
                <path d="M20 6L9 17l-5-5" strokeLinecap="square" />
            </svg>
        </div>
        <span className="font-display font-bold text-xl tracking-tight italic">DEXCHECK</span>
      </div>
    );
  }

  // Shieldeum
  if (name.includes('Shieldeum')) {
    return (
        <div className={`${styles} gap-3`}>
        <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-600">
                <path d="M12 2l-9 4v11l9 5 9-5V6l-9-4z" opacity="0.9"/>
                <path d="M12 2l9 4v11l-9 5V2z" fill="black" opacity="0.2"/>
            </svg>
        </div>
        <span className="font-sans font-medium text-xl text-gray-800 tracking-tight">Shieldeum</span>
        </div>
    );
  }

  // Generic fallback
  return (
    <div className={styles}>
      <span className="font-bold">{name}</span>
    </div>
  );
};
