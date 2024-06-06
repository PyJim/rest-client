import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DataProvider} from "@/contexts/DataProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restify",
  description: "It's a simple rest client PWA made with NEXTJS 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "Jimmy",
      url: "https://next-portfolio-with-framer.vercel.app/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>{children}</DataProvider>
        
      </body>
    </html>
  );
}
