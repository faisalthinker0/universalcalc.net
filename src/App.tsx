import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Financial from "./pages/financial";
import Health from "./pages/health";
import Math from "./pages/math";
import Other from "./pages/other";
import CalculatorPage from "./pages/calculator/[type]";
import NotFound from "./pages/not-found";
import PerformanceMonitor from "@/components/PerformanceMonitor";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/financial" component={Financial} />
        <Route path="/health" component={Health} />
        <Route path="/math" component={Math} />
        <Route path="/other" component={Other} />
        <Route path="/calculator/:type" component={CalculatorPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="universalcalc-theme">
        <TooltipProvider>
          <Toaster />
          <PerformanceMonitor />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
