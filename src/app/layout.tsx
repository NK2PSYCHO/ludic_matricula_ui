import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ludic Matricula",
  description: "Game registry dashboard",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border bg-background px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">Ludic Matricula</span>
          <nav className="flex items-center gap-4">
            <Link href="/games" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Games
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
          </nav>
        </header>
        <main className="flex-1 bg-background p-6">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;