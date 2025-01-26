import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanguy Morvan",
  description: "Portfolio de Tanguy Morvan, designer et photographe",
};

const ktfrublenatrial = localFont({
  src: [
    {
      path: "../../public/fonts/KTFRUBLENATRIAL-SOLID.otf",
    },
  ],
  variable: "--font-ktfrublenatrial",
});


const antiquelegacy = localFont({
  src: [
    {
      path: "../../public/fonts/ANTIQUELEGACY-REGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-MEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-BOLD.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-SEMIBOLD.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-LIGHT.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-THIN.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-BOOK.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-ITALIC.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-BOLDITALIC.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-SEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-THINITALIC.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/ANTIQUELEGACY-BOOKITALIC.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-antiquelegacy",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ktfrublenatrial.variable} ${antiquelegacy.variable} `}>{children}</body>
    </html>
  );
}