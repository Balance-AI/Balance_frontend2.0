import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Landing/Navbar";
import "@/styles/globals.css"; // globals.css global stylesheet

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
