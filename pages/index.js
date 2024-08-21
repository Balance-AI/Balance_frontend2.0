'use client'
import Analytics from "@/components/Analytics";
import Hero from "@/components/Hero";
import Supported from "@/components/Supported";
import Filler from "@/components/Filler";
import TryAi from "@/components/TryAi";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="text-center">
            <img
              src="/logo.svg" // Replace with your image path
              alt="Balance"
              className="mb-4"
            />
            <h1 className="text-white text-4xl font-bold">BALANCE</h1>
            <p className="text-gray-400 mt-4">Cash flow made easy for creators</p>
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <Supported />
          <Analytics />
          <Filler />
          <TryAi />
        </>
      )}
    </>
  );
}