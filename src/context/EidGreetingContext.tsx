
import React, { createContext, useContext, useState, ReactNode } from "react";

type GreetingType = "eid-mubarak" | "eid-saeed" | "happy-eid";

interface EidGreetingContextType {
  name: string;
  setName: (name: string) => void;
  greetingType: GreetingType;
  setGreetingType: (type: GreetingType) => void;
  isCardReady: boolean;
  setIsCardReady: (ready: boolean) => void;
}

const EidGreetingContext = createContext<EidGreetingContextType | undefined>(undefined);

export const EidGreetingProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [greetingType, setGreetingType] = useState<GreetingType>("eid-mubarak");
  const [isCardReady, setIsCardReady] = useState(false);

  return (
    <EidGreetingContext.Provider
      value={{
        name,
        setName,
        greetingType,
        setGreetingType,
        isCardReady,
        setIsCardReady
      }}
    >
      {children}
    </EidGreetingContext.Provider>
  );
};

export const useEidGreeting = () => {
  const context = useContext(EidGreetingContext);
  if (context === undefined) {
    throw new Error("useEidGreeting must be used within an EidGreetingProvider");
  }
  return context;
};
