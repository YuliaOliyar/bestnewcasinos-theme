import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CasinoReview from "./pages/CasinoReview";
import Bonuses from "./pages/Bonuses";
import Slots from "./pages/Slots";
import SlotDetail from "./pages/SlotDetail";
import Payments from "./pages/Payments";
import AboutUs from "./pages/AboutUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reviews/roostino-casino" component={CasinoReview} />
      <Route path="/bonuses/cashback" component={Bonuses} />
      <Route path="/slots" component={Slots} />
      <Route path="/slots/pirots" component={SlotDetail} />
      <Route path="/payment-methods/revolut" component={Payments} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
