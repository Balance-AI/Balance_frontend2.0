// import Analytics from "@/app/components/Analytics";
// import Hero from "@/app/components/Hero";
// import Supported from "@/app/components/Supported";
// import Filler from "@/app/components/Filler";
// import TryAi from "@/app/components/TryAi";
import BalanceHeader from "@/app/components/BalanceHeader";
import Prodinfo from "@/app/components/ProdInfo";
import Platform from "@/app/components/Platform";
import ClientSlider from "@/app/components/ClientSlider";
import NavigationTwo from "@/app/components/NavigationTwo";

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
