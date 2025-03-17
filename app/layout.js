import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Box.brussels",
  description: "Location de parkings, garages et boxes à Bruxelles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Balise meta et autres inclusions nécessaires */}
      </head>
      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* Header avec le logo et le menu */}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
