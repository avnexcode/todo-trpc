import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/client";
import { AppProvider } from "@/components/layouts/AppProvider";

export const metadata: Metadata = {
  title: "Disorganized - L7",
  description: "Generated by disorganized",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AppProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </AppProvider>
      </body>
    </html>
  );
}
