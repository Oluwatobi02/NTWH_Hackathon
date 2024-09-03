import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/navbar";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer/footer";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SACS",
  description: "Society for Advancement of Computer Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <MantineProvider>
            <main className="text-foreground bg-slate-200 flex flex-col">
              <NavBar />
              {children}
              <Footer />
            </main>
          </MantineProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
