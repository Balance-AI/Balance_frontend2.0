import "@/app/globals.css"; // globals.css global stylesheet
import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Landing/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
