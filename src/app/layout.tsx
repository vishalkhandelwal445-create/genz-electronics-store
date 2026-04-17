import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartSlider from "@/components/CartSlider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoltX — Next-Gen Electronics",
  description: "Gen Z electronics brand. Future-proof gear at unreal prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen bg-dark-950 text-white">
        <Navbar />
        <CartSlider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
