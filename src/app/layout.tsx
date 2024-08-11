import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Layout.Header />
            <Layout.Main>{children}</Layout.Main>
            <Layout.Footer></Layout.Footer>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
