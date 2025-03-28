
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CrescentMoon from "@/components/CrescentMoon";
import { cn } from "@/lib/utils";

interface GreetingCardProps {
  name: string;
  greetingType: string;
  className?: string;
}

const GreetingCard = ({ name, greetingType, className }: GreetingCardProps) => {
  const getGreetingText = () => {
    switch(greetingType) {
      case "eid-mubarak":
        return "Eid Mubarak";
      case "eid-saeed":
        return "Eid Saeed";
      case "happy-eid":
        return "Happy Eid";
      default:
        return "Eid Mubarak";
    }
  };
  
  const getMessage = () => {
    return `Wishing you and your family peace, happiness, and prosperity on this blessed occasion. May Allah accept our good deeds, forgive our sins, and guide us to the straight path.`;
  };

  return (
    <Card className={cn(
      "w-full max-w-xl mx-auto overflow-hidden",
      "border-4 border-eid-gold bg-gradient-to-br from-eid-cream to-eid-lightgold shadow-xl",
      className
    )}>
      <CardContent className="p-8 relative text-center">
        <div className="absolute -top-2 -right-2">
          <CrescentMoon size="sm" />
        </div>
        
        <div className="mb-6 pt-4">
          <h2 className="text-4xl font-serif font-bold text-eid-green">{getGreetingText()}</h2>
          {name && (
            <p className="mt-2 text-xl font-medium text-eid-darkgreen">{name}</p>
          )}
        </div>
        
        <div className="border-t border-b border-eid-gold py-4 px-2 my-4">
          <p className="text-eid-darkgreen">{getMessage()}</p>
        </div>
        
        <div className="mt-4 text-sm text-eid-gold">
          <p>May this Eid bring joy and love to your heart and create all the opportunities for success for you.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreetingCard;
