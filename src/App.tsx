
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collaborations from "./pages/Collaborations";
import HaveMaterial from "./pages/HaveMaterial";
import NeedMaterial from "./pages/NeedMaterial";
import HaveMaterialBrandMatch from "./pages/HaveMaterialBrandMatch";
import NeedMaterialBrandMatch from "./pages/NeedMaterialBrandMatch";
import ProductResults from "./pages/ProductResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/have-material" element={<HaveMaterial />} />
          <Route path="/need-material" element={<NeedMaterial />} />
          <Route path="/hm_brandmatch" element={<HaveMaterialBrandMatch />} />
          <Route path="/nm_brandmatch" element={<NeedMaterialBrandMatch />} />
          <Route path="/have-material/:brand-collaboration" element={<ProductResults />} />
          <Route path="/need-material/:brand-collaboration" element={<ProductResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
