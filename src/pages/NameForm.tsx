
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 animate-fade-in">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-600">Enter your name to see your special greeting</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="border-gray-300 focus-visible:ring-blue-500"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NameForm;
