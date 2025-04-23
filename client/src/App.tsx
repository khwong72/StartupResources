import { Route, Switch } from "wouter";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <RootLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </RootLayout>
    </>
  );
}

export default App;
