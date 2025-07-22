import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Import the HeroSection directly (without lazy loading)
import HeroSection from "../components/HeroSection";

// Lazy load other components bruh
const InfrastructureSection = lazy(() => import("../components/Infrastructure"));
const GameSolutions = lazy(() => import("../components/GameSolutions"));
const GlobalLocations = lazy(() => import("../components/GlobalLocations"));
const EnterpriseSupport = lazy(() => import("../components/EnterpriseSupport"));

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | GameHub</title>
                <meta name="description" content="Deploy a Minecraft server in seconds with GameHub's enterprise-grade hosting." />
            </Helmet>
            {/* Renders the HeroSection now */}
            <HeroSection />
            {/* Wrap lazy components in Suspense :) */}
            <Suspense fallback={null}> {/* Use null to show nothing during loading */}
                <InfrastructureSection />
                <GameSolutions />
                <GlobalLocations />
                <EnterpriseSupport />
            </Suspense>
        </>
    );
};

export default HomePage;
