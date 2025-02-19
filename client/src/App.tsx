import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import BirthdayPage from "@/pages/BirthdayPage";
import SurprisePage from "@/pages/SurprisePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={BirthdayPage} />
      <Route path="/surprise" component={SurprisePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
