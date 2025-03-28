
import React from 'react';
import { Star, Moon, Sparkles, SunMoon, CloudMoon } from 'lucide-react';

interface EidPatternBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const EidPatternBackground = ({ children, className = "" }: EidPatternBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-eid-cream bg-eid-pattern relative overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating stars */}
        {[...Array(25)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5 + Math.random() * 0.5,
              transform: `scale(${0.5 + Math.random() * 0.8})`,
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite, float ${5 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Star 
              size={10 + Math.random() * 15} 
              className="text-eid-gold" 
            />
          </div>
        ))}

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full bg-eid-lightgold/30"
            style={{
              height: `${Math.random() * 8 + 2}px`,
              width: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 10}s ease-in-out infinite, pulse ${3 + Math.random() * 5}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Moon icons */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`moon-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.8})`
            }}
          >
            <Moon 
              size={20 + Math.random() * 15} 
              className="text-eid-green" 
            />
          </div>
        ))}

        {/* Sparkle effects */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + Math.random() * 0.6,
              animation: `ping ${2 + Math.random() * 3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <Sparkles 
              size={12 + Math.random() * 10} 
              className="text-eid-gold" 
            />
          </div>
        ))}

        {/* Alternating element */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`alt-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `spin-slow ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 2 === 0 ? (
              <SunMoon 
                size={25 + Math.random() * 15} 
                className="text-eid-green/40" 
              />
            ) : (
              <CloudMoon 
                size={25 + Math.random() * 15} 
                className="text-eid-gold/40" 
              />
            )}
          </div>
        ))}

        {/* Light beam effects */}
        <div className="absolute h-96 w-96 rounded-full bg-gradient-radial from-eid-lightgold/20 to-transparent animate-pulse"
             style={{ top: '10%', left: '20%', animationDuration: '15s' }}></div>
        <div className="absolute h-80 w-80 rounded-full bg-gradient-radial from-eid-green/10 to-transparent animate-pulse"
             style={{ bottom: '15%', right: '15%', animationDuration: '18s' }}></div>
        <div className="absolute h-64 w-64 rounded-full bg-gradient-radial from-eid-gold/10 to-transparent animate-pulse"
             style={{ top: '40%', right: '25%', animationDuration: '20s' }}></div>
        <div className="absolute h-72 w-72 rounded-full bg-gradient-radial from-eid-cream/30 to-transparent animate-pulse"
             style={{ bottom: '30%', left: '10%', animationDuration: '17s' }}></div>
      </div>
      
      {children}
    </div>
  );
};

export default EidPatternBackground;
