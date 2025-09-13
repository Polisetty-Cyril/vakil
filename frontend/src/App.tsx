import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import CaseAnalysis from "./pages/CaseAnalysis";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Signup from "./pages/SignUp";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Index />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/analysis" element={<CaseAnalysis />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
