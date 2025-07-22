import React, { lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const Games = lazy(() => import("./pages/Games"));
const MinecraftPage = lazy(() => import("./pages/Minecraft"));
const VPSHostingShowcase = lazy(() => import("./pages/VPS"));
const WebHosting = lazy(() => import("./pages/WebHosting"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const GDPR = lazy(() => import("./pages/GDPR"));
const AUP = lazy(() => import("./pages/Aup"));
const AboutPage = lazy(() => import("./pages/About"));
const PartnersPage = lazy(() => import("./pages/Partners"));

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 animate-spin">
          <img
            src="https://placehold.co/50"
            alt="Loading..."
            className="w-24 h-24 object-contain"
          />
        </div>
        <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
}

// Suspense fallback
function LoadingSkeleton() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageTransitionLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading ? <LoadingSpinner /> : null;
}

function AppContent() {
  return (
    <>
      <PageTransitionLoader />
      <ScrollToTop />
      <React.Suspense fallback={<LoadingSkeleton />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/minecraft" element={<MinecraftPage />} />
            <Route path="/vps" element={<VPSHostingShowcase />} />
            <Route path="/webhosting" element={<WebHosting />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/aup" element={<AUP />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </React.Suspense>
    </>
  );
}
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
