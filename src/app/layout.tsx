import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Poppins({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KIDOO HUB — Technology & Growth Hub",
  description:
    "A KIDOO HUB conecta Inteligência Artificial, desenvolvimento e tráfego pago para construir operações digitais mais inteligentes, eficientes e preparadas para crescer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#353f34",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
