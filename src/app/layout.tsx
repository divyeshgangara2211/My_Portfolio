import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import "../index.css";

export const metadata: Metadata = {
  title: "Divyesh-Gangera-Portfolio",
  description: "Divyesh Gangera - Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <Providers>
          <BackgroundAnimation />
          <div className="relative z-10 overflow-x-hidden">
            <Navigation />
            <main className="min-h-screen pt-16 overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
