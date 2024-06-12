import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Golden Years Adventure",
  description: "Golden Years Adventure",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <div className="flex flex-col min-h-screen justify-between">
          <div>
            <Header />
            <article className="max-w-none h-auto container grid justify-items-center">
              {children}
            </article>
          </div>
          <div className="place-self-end">
          </div>
        </div>
      </body>
    </html>
  );
}
