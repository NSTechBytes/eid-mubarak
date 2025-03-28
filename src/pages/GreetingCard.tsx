
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import EidPatternBackground from "@/components/EidPatternBackground";
import EidHeading from "@/components/EidHeading";
import CrescentMoon from "@/components/CrescentMoon";
import GreetingCard from "@/components/GreetingCard";
import { useEidGreeting } from "@/context/EidGreetingContext";
import { useToast } from "@/components/ui/use-toast";
import { Copy, Share } from "lucide-react";

const GreetingCardPage = () => {
  const { name, isCardReady } = useEidGreeting();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isCardReady) {
      navigate('/');
    }
  }, [isCardReady, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Eid Greeting',
        text: `${name} has sent you an Eid greeting!`,
        url: window.location.href,
      })
      .catch(() => {
        toast({
          title: "Sharing failed",
          description: "Could not share this greeting",
        });
      });
    } else {
      // Fallback to clipboard
      handleCopyLink();
    }
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "Share this link with your friends and family",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Could not copy the link to clipboard",
        });
      });
  };

  return (
    <EidPatternBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 md:left-20">
          <CrescentMoon className="animate-float" />
        </div>
        
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-8">
            <EidHeading className="animate-scale-in text-5xl">Eid Mubarak</EidHeading>
          </div>
          
          <GreetingCard 
            name={name}
            className="mb-8 animate-scale-in"
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              type="button" 
              className="bg-eid-green hover:bg-eid-darkgreen text-white"
              onClick={handleShare}
            >
              <Share size={18} />
              Share Greeting
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              className="border-eid-gold text-eid-darkgreen hover:bg-eid-gold/20"
              onClick={handleCopyLink}
            >
              <Copy size={18} />
              Copy Link
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              className="border-eid-gold text-eid-darkgreen hover:bg-eid-gold/20"
              onClick={() => navigate('/')}
            >
              Create New
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 md:right-20">
          <CrescentMoon className="animate-float" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-2 w-2 rounded-full bg-eid-gold/60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </EidPatternBackground>
  );
};

export default GreetingCardPage;
