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
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  openGraph: {
    title: "Portfolio - Md. Yusuf Jamal",
    description:
      "A full-fledged full stack developer showcasing frontend and backend projects.",
    url: "https://mohamedyusufjamalportfolio.vercel.app/",
    siteName: "Md. Yusuf Jamal Portfolio",
    images: [
      {
        url: "https://mohamedyusufjamalportfolio.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Md. Yusuf Jamal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  linkedIn: {
    card: "summary_large_image",
    title: "Portfolio - Md. Yusuf Jamal",
    description:
      "A full-fledged full stack developer showcasing frontend and backend projects.",
    site: "@mohamed-yusuf-jamal-106772293",
    creator: "@mohamed-yusuf-jamal-106772293",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D03AQFmnmoFI3UKUw/profile-displayphoto-shrink_400_400/B4DZStfpING8Ak-/0/1738077541637?e=1755129600&v=beta&t=3FSrru9YPWVm_IJERA82WFoQtltNSXDHmiApttexs1o",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
