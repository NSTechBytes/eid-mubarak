
import React from 'react';

interface EidPatternBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const EidPatternBackground = ({ children, className = "" }: EidPatternBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-eid-cream bg-eid-pattern ${className}`}>
      {children}
    </div>
  );
};

export default EidPatternBackground;
