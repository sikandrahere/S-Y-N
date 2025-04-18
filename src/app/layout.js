import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S Y N - Your voice, your way, your privacy",
  description: "S Y N is a platform designed to empower individuals to share their thoughts freely and anonymously. With a seamless, privacy-first experience, 'S Y N' ensures your voice is heard while keeping your identity secure. Its sleek interface, supported by modern fonts like Geist and Geist Mono, offers a minimalist yet inviting space for unfiltered expression. Join 'S Y N' to embrace true freedom of speech—your voice, your way, your privacy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
