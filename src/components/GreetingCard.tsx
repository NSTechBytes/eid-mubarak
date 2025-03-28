
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CrescentMoon from "@/components/CrescentMoon";
import { cn } from "@/lib/utils";
import { Sparkles, Stars, Music, VolumeX } from "lucide-react";

interface GreetingCardProps {
  name: string;
  className?: string;
}

const GreetingCard = ({ name, className }: GreetingCardProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const rgbColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-amber-500',
    'from-red-500 to-rose-500'
  ];
  
  // Change colors every 3 seconds
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % rgbColors.length);
    }, 3000);
    
    return () => clearInterval(colorInterval);
  }, []);

  // Initialize audio element and start playing automatically
  useEffect(() => {
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.loop = true;
    
    // Try to autoplay when component mounts
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Audio autoplay failed:", error);
        setIsPlaying(false);
        // User interaction may be required due to browser autoplay policy
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Play/pause background music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback failed:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <Card className={cn(
      "w-full max-w-xl mx-auto overflow-hidden transition-all duration-700",
      "border-4 border-eid-gold shadow-xl shadow-yellow-300/30",
      `bg-gradient-to-br ${rgbColors[colorIndex]}`,
      className
    )}>
      <CardContent className="p-8 relative text-center">
        <div className="absolute top-2 right-2 flex gap-2">
          <button 
            onClick={toggleMusic}
            className="h-8 w-8 rounded-full bg-eid-gold/30 hover:bg-eid-gold flex items-center justify-center text-white"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Music size={16} className="animate-pulse" /> : <VolumeX size={16} />}
          </button>
          <CrescentMoon size="sm" className="animate-float" />
        </div>
        
        <div className="absolute -left-2 top-10">
          <Sparkles size={20} className="text-yellow-300 animate-pulse" />
        </div>
        
        <div className="absolute -right-2 bottom-10">
          <Stars size={20} className="text-yellow-300 animate-pulse" />
        </div>
        
        <div className="mb-6 pt-4 animate-fade-in z-10 relative">
          <h2 className="text-5xl font-serif font-bold text-white drop-shadow-lg animate-scale-in">
            Eid Mubarak
          </h2>
          {name && (
            <p className="mt-6 text-3xl font-medium text-white/90 drop-shadow-md animate-float">
              {name}
            </p>
          )}
        </div>
        
        <div className="mt-8 text-base text-white/90 animate-fade-in">
          <p className="mb-2">May this special day bring peace, happiness, and prosperity to you and your family.</p>
          <p className="mb-2">Wishing you joy, health, and blessings on this auspicious occasion.</p>
          <p>May the divine blessings of Allah bring you hope, faith, and joy on Eid and forever.</p>
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 h-3 w-3 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 h-2 w-2 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 h-2 w-2 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 h-3 w-3 rounded-full bg-yellow-300 animate-pulse"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreetingCard;
