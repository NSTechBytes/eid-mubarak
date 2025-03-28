
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EidGreetingProvider } from "@/context/EidGreetingContext";
import Index from "./pages/Index";
import NameForm from "./pages/NameForm";
import GreetingTypeForm from "./pages/GreetingTypeForm";
import GreetingCardPage from "./pages/GreetingCard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EidGreetingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NameForm />} />
            <Route path="/greeting-type" element={<GreetingTypeForm />} />
            <Route path="/card" element={<GreetingCardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EidGreetingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
