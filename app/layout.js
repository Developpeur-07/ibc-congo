import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Impact Business Congo — Cabinet Digital CEMAC",
  description: "Cabinet de structuration et sous-traitance digitale pour les PME. Brazzaville, République du Congo. Identité de marque, contenu, site web, Meta Ads.",
  keywords: ["cabinet digital", "PME Congo", "CEMAC", "Brazzaville", "Meta Ads", "identité de marque", "sous-traitance digitale"],
  authors: [{ name: "Impact Business Congo" }],
  creator: "Impact Business Congo",
  metadataBase: new URL("https://impactbusinesscongo.com"),
  openGraph: {
    title: "Impact Business Congo — Cabinet Digital CEMAC",
    description: "Structuration et sous-traitance digitale pour les PME congolaises et CEMAC.",
    url: "https://impactbusinesscongo.com",
    siteName: "Impact Business Congo",
    locale: "fr_CG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Business Congo — Cabinet Digital CEMAC",
    description: "Structuration et sous-traitance digitale pour les PME congolaises et CEMAC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}