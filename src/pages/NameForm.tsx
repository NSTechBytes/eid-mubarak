
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EidPatternBackground from "@/components/EidPatternBackground";
import EidHeading from "@/components/EidHeading";
import CrescentMoon from "@/components/CrescentMoon";
import { useEidGreeting } from "@/context/EidGreetingContext";
import { useToast } from "@/components/ui/use-toast";

const NameForm = () => {
  const { name, setName, setIsCardReady } = useEidGreeting();
  const [inputName, setInputName] = useState(name);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputName.trim()) {
      toast({
        title: "Please enter your name",
        description: "Your name is required to create a personalized greeting",
        variant: "destructive"
      });
      return;
    }
    
    setName(inputName.trim());
    setIsCardReady(true);
    navigate('/card');
  };
  
  return (
    <EidPatternBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 left-10">
          <CrescentMoon />
        </div>
        
        <div className="max-w-md w-full bg-white/90 rounded-lg shadow-xl p-8 animate-fade-in">
          <div className="text-center mb-6">
            <EidHeading>Eid Greetings</EidHeading>
            <p className="text-eid-green">Enter your name for a personalized Eid animation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-eid-darkgreen font-medium">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="border-eid-gold/50 focus-visible:ring-eid-gold"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-eid-green hover:bg-eid-darkgreen text-white"
            >
              Show Greeting
            </Button>
          </form>
        </div>
        
        <div className="absolute bottom-10 right-10">
          <CrescentMoon />
        </div>
      </div>
    </EidPatternBackground>
  );
};

export default NameForm;
