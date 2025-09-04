import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Dashboard from "@/pages/producer_dashboard";
import CustomerCentralDashboard from "@/pages/customer_central_dashboard";
import LiveWasteSorting from "@/pages/live_waste_sorting";
import LiveProduceSorting from "@/pages/live-produce-sorting";
import HarvestMarketplace from "@/pages/harvest-marketplace";
import HarvestOptimizations from "@/pages/harvest-optimizations";
import RecyclersMarketplace from "@/pages/recyclers-marketplace";
import WasteReduction from "@/pages/waste-reduction";
import ProductDemos from "@/pages/product-demos";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Products from "@/pages/products";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/producer" component={Dashboard} />
      <Route path="/producer-dashboard" component={Dashboard} />
      <Route path="/customer-central" component={CustomerCentralDashboard} />
      <Route path="/customer-central-dashboard" component={CustomerCentralDashboard} />
      <Route path="/live-waste-sorting" component={LiveWasteSorting} />
      <Route path="/live-produce-sorting" component={LiveProduceSorting} />
      <Route path="/harvest-marketplace" component={HarvestMarketplace} />
      <Route path="/harvest-optimizations" component={HarvestOptimizations} />
      <Route path="/recyclers-marketplace" component={RecyclersMarketplace} />
      <Route path="/waste-reduction" component={WasteReduction} />
      <Route path="/product-demos" component={ProductDemos} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
