import Analytics from "@/components/Landing/Analytics";
import Hero from "@/components/Landing/Hero";
import Supported from "@/components/Landing/Supported";
import Filler from "@/components/Landing/Filler";
import TryAi from "@/components/Landing/TryAi";
import BalanceHeader from "@/components/Landing/BalanceHeader";
import Prodinfo from "@/components/Landing/ProdInfo";
import Platform from "@/components/Landing/Platform";
import ClientSlider from "@/components/Landing/ClientSlider";
import NavigationTwo from "@/components/Landing/NavigationTwo";

export default function Home() {
  return (
    <>
      <BalanceHeader />
      <NavigationTwo />
      <Platform />
      <ClientSlider />
      <Prodinfo />
      {/* <Hero /> */}
      {/* <Supported /> */}
      {/* <Analytics /> */}
      {/* <Filler /> */}
      {/* <TryAi /> */}
    </>
  );
}
