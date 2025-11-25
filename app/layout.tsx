

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { theme } from "../theme";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon portfolio créé avec Next.js et Mantine UI",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto"/>
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
