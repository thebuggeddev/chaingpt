import React from 'react';

// This is a wrapper that uses gap to create the grid lines effect
export const GridContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-lab-border gap-[1px] ${className}`}>
      {children}
    </div>
  );
};

export const GridItem: React.FC<{ children: React.ReactNode; className?: string; span?: number }> = ({ children, className = '', span = 1 }) => {
  return (
    <div className={`bg-lab-bg ${className}`}>
      {children}
    </div>
  );
};
