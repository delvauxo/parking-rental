import "./globals.css"; // Assurez-vous que globals.css est bien importé
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
