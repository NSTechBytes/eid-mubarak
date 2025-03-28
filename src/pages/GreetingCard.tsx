
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import EidPatternBackground from "@/components/EidPatternBackground";
import EidHeading from "@/components/EidHeading";
import CrescentMoon from "@/components/CrescentMoon";
import GreetingCard from "@/components/GreetingCard";
import { useEidGreeting } from "@/context/EidGreetingContext";
import { useToast } from "@/components/ui/use-toast";

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
      toast({
        title: "Sharing not supported",
        description: "Your browser does not support the Web Share API",
      });
    }
  };

  return (
    <EidPatternBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute top-10 left-10 md:left-20">
          <CrescentMoon className="animate-float" />
        </div>
        
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-8">
            <EidHeading className="animate-scale-in">Eid Mubarak</EidHeading>
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
              Share Greeting
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              className="border-eid-gold text-eid-darkgreen"
              onClick={() => navigate('/')}
            >
              Create New
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 md:right-20">
          <CrescentMoon className="animate-float" />
        </div>
      </div>
    </EidPatternBackground>
  );
};

export default GreetingCardPage;
