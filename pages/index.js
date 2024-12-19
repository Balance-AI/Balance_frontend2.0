import Analytics from "@/components/Landing/Analytics";
import Hero from "@/components/Landing/Hero";
import Supported from "@/components/Landing/Supported";
import Filler from "@/components/Landing/Filler";
import TryAi from "@/components/Landing/TryAi";
import BalanceHeader from "@/components/Landing/BalanceHeader";
import Prodinfo from "@/components/Landing/ProdInfo";

export default function Home() {
  return (
    <>
      <BalanceHeader />
      <Prodinfo />
      <Hero />
      <Supported />
      <Analytics />
      <Filler />
      <TryAi />
    </>
  );
}
