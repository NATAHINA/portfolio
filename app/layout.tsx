

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { theme } from "../theme";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "NATAHINA Rochaya - Développeur Web",
  description: "Portfolio professionnel de NATAHINA Rochaya. Développeur web spécialisé en Codeigniter 3, WordPress, Nextjs, React et applications modernes.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="description" content="Mon portfolio : projets en Next.js, React, UI/UX et développement web moderne.">
        <meta name="keywords" content="Développeur web, Codeigniter 3, WordPress, Next.js, React, Madagascar, Portfolio">
        <meta name="author" content="NATAHINA Rochaya">
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
