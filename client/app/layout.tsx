import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { ProgressProvider } from "@/context/ProgressContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognitive Biases Learning App",
  description: "Master your mind, make smarter decisions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProgressProvider>
            <Navbar />
            <main className="min-h-screen bg-white">{children}</main>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}