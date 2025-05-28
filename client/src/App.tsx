import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import Layout from "./components/layout/Layout";
import { Toaster } from "./components/ui/toaster";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
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
