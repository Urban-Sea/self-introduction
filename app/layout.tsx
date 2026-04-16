import type { Metadata } from "next";
import {
  Fraunces,
  M_PLUS_Rounded_1c,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const sans = Zen_Kaku_Gothic_New({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const display = M_PLUS_Rounded_1c({
  variable: "--font-display-jp",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const hero = Fraunces({
  variable: "--font-hero-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "武本 龍 — 自己紹介",
  description:
    "武本龍（Ryu Takemoto）の自己紹介ページ。千葉工業大学 情報変革科学部 情報工学科 3年。システムインフラエンジニア見習いで、セキュリティも勉強中。趣味は投資と競馬。",
  openGraph: {
    title: "武本 龍 — 自己紹介",
    description:
      "千葉工業大学 情報変革科学部 情報工学科 3年。システムインフラエンジニア見習い、セキュリティも勉強中。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${display.variable} ${hero.variable} antialiased`}
    >
      <body className="grain min-h-screen bg-cream text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
