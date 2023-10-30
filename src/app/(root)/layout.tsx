import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legaliza",
  description: "O seu escritório virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{}}  localization={ptBR}>
      <html lang="pt-BR">
        <body className={inter.className}>
          <main>
            <section>
              <div>{children}</div>
            </section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
