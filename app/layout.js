import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Md. Yusuf Jamal",
  description:
    "A full-fledged full stack developer showcasing frontend and backend projects.",
  keywords: [
    "full stack developer",
    "frontend developer",
    "backend developer",
    "portfolio",
    "Md Yusuf Jamal",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "w1OtGfNoOboAaLyWwZnhQdJYNwGp_rCVPyoTqh9fyWo",
  },
  openGraph: {
    title: "Portfolio - Md. Yusuf Jamal",
    description:
      "A full-fledged full stack developer showcasing frontend and backend projects.",
    url: "https://mohamedyusufjamalportfolio.vercel.app/",
    siteName: "Md. Yusuf Jamal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mohamedyusufjamalportfolio.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Md. Yusuf Jamal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Md. Yusuf Jamal",
    description:
      "A full-fledged full stack developer showcasing frontend and backend projects.",
    images: ["https://mohamedyusufjamalportfolio.vercel.app/"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden leading-8 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
