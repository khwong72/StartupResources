import { Route, Switch } from "wouter";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import HRSupport from "@/pages/HRSupport";
import Recruitment from "@/pages/Recruitment";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <RootLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/hr-support" component={HRSupport} />
          <Route path="/recruitment" component={Recruitment} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </RootLayout>
    </>
  );
}

export default App;
