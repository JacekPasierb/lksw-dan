import type {Metadata} from "next";
import { Inter, Manrope} from "next/font/google";
import "./globals.css";
import Header from "../components/user/layout/Header";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});




export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lksw-dan.pl"
  ),

  title: {
    default:
      "LKSW DAN – Lubelski Klub Sportów Walki | MMA, Boks, Kickboxing Lublin",
    template: "%s | LKSW DAN Lublin",
  },

  description:
    "LKSW DAN – Lubelski Klub Sportów Walki. Treningi MMA, boksu, kickboxingu i sportów walki dla dzieci, młodzieży i dorosłych w Lublinie. Dołącz do najlepszych.",

  keywords: [
    "LKSW DAN",
    "Lubelski Klub Sportów Walki",
    "sporty walki Lublin",
    "MMA Lublin",
    "boks Lublin",
    "kickboxing Lublin",
    "treningi MMA Lubelskie",
    "klub MMA Lublin",
    "sztuki walki Lublin",
    "treningi dla dzieci Lublin",
    "treningi dla młodzieży Lublin",
    "klub sportowy Lublin",
    "samoobrona Lublin",
    "fitness fight Lublin",
  ],

  authors: [{name: "LKSW DAN"}],
  creator: "LKSW DAN – Lubelski Klub Sportów Walki",
  publisher: "LKSW DAN",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "LKSW DAN – Lubelski Klub Sportów Walki",

    title: "LKSW DAN – MMA, Boks, Kickboxing | Klub Sportów Walki Lublin",

    description:
      "Profesjonalne treningi MMA, boksu i kickboxingu w LKSW DAN w Lublinie. Treningi dla dzieci, młodzieży i dorosłych. Dołącz do naszego klubu.",

    images: [
      {
        url: "/images/og-lksw-dan-1600.webp",
        width: 1600,
        height: 900,
        alt: "LKSW DAN – Lubelski Klub Sportów Walki",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LKSW DAN – Klub Sportów Walki Lublin",

    description:
      "LKSW DAN – treningi MMA, boksu i kickboxingu w Lublinie. Profesjonalny klub sportów walki.",

    images: ["/images/og-lksw-dan-1600.webp"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Header/>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
