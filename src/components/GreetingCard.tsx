
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CrescentMoon from "@/components/CrescentMoon";
import { cn } from "@/lib/utils";

interface GreetingCardProps {
  name: string;
  className?: string;
}

const GreetingCard = ({ name, className }: GreetingCardProps) => {
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
        
        <div className="mb-6 pt-4 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-eid-green animate-scale-in">Eid Mubarak</h2>
          {name && (
            <p className="mt-6 text-3xl font-medium text-eid-darkgreen animate-float">{name}</p>
          )}
        </div>
        
        <div className="mt-4 text-sm text-eid-gold animate-fade-in">
          <p>May this Eid bring joy and love to your heart.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreetingCard;
