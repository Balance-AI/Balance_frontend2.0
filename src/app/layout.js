import "@/app/globals.css"; // globals.css global stylesheet
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";


export const metadata = {
  title: "Balance AI",
  description: "Your Financial Assistant",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f3f3f3] text-black">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
