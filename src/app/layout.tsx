 /* eslint-disable */
import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./providers/theme-provider";
import ModalProvider from "./providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner" ; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 
const font = DM_Sans({subsets:["latin"]}) ; 

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one Agency Solution .  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning> 
    <body
        className={font.className}
      >
    <ThemeProvider attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
      <ModalProvider>
        {children}
        <Toaster />
        <SonnerToaster position="bottom-left"/>
    </ModalProvider>
      </ThemeProvider>
      </body>
    </html>
  
  );
}
