
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import EidPatternBackground from "@/components/EidPatternBackground";
import EidHeading from "@/components/EidHeading";
import CrescentMoon from "@/components/CrescentMoon";
import { useEidGreeting } from "@/context/EidGreetingContext";

const GreetingTypeForm = () => {
  const { name, greetingType, setGreetingType, setIsCardReady } = useEidGreeting();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCardReady(true);
    navigate('/card');
  };
  
  return (
    <EidPatternBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 right-10">
          <CrescentMoon />
        </div>
        
        <div className="max-w-md w-full bg-white/90 rounded-lg shadow-xl p-8 animate-fade-in">
          <div className="text-center mb-6">
            <EidHeading>Choose Your Greeting</EidHeading>
            <p className="text-eid-green">Hello {name}, select your preferred greeting style</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <RadioGroup 
              value={greetingType} 
              onValueChange={(value) => setGreetingType(value as any)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-eid-cream/50 cursor-pointer">
                <RadioGroupItem value="eid-mubarak" id="eid-mubarak" className="text-eid-gold" />
                <Label htmlFor="eid-mubarak" className="font-medium cursor-pointer w-full">Eid Mubarak</Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-eid-cream/50 cursor-pointer">
                <RadioGroupItem value="eid-saeed" id="eid-saeed" className="text-eid-gold" />
                <Label htmlFor="eid-saeed" className="font-medium cursor-pointer w-full">Eid Saeed</Label>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-eid-cream/50 cursor-pointer">
                <RadioGroupItem value="happy-eid" id="happy-eid" className="text-eid-gold" />
                <Label htmlFor="happy-eid" className="font-medium cursor-pointer w-full">Happy Eid</Label>
              </div>
            </RadioGroup>
            
            <div className="flex justify-between gap-4">
              <Button 
                type="button" 
                variant="outline"
                className="border-eid-gold text-eid-darkgreen"
                onClick={() => navigate('/')}
              >
                Back
              </Button>
              
              <Button 
                type="submit" 
                className="flex-1 bg-eid-green hover:bg-eid-darkgreen text-white"
              >
                Create Greeting
              </Button>
            </div>
          </form>
        </div>
        
        <div className="absolute bottom-10 left-10">
          <CrescentMoon />
        </div>
      </div>
    </EidPatternBackground>
  );
};

export default GreetingTypeForm;
