import Analytics from "@/components/Landing/Analytics";
import Hero from "@/components/Landing/Hero";
import Supported from "@/components/Landing/Supported";
import Filler from "@/components/Landing/Filler";
import TryAi from "@/components/Landing/TryAi";
import BalanceHeader from "@/components/Landing/BalanceHeader";
import Platform from "@/components/Landing/Platform";

export default function Home() {
  return (
    <>
      <BalanceHeader />
      <Platform />
      <Hero />
      <Supported />
      <Analytics />
      <Filler />
      <TryAi />
    </>
  );
}
