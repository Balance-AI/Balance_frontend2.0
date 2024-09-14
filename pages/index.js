import Analytics from "@/components/Landing/Analytics";
import Hero from "@/components/Landing/Hero";
import Supported from "@/components/Landing/Supported";
import Filler from "@/components/Landing/Filler";
import TryAi from "@/components/Landing/TryAi";
import BalanceHeader from "@/components/Landing/BalanceHeader";

export default function Home() {
  return (
    <>
      <BalanceHeader />
      <Hero />
      <Supported />
      <Analytics />
      <Filler />
      <TryAi />
    </>
  );
}
