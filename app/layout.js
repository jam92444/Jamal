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
    // Full name variations
    "Mohamed Yusuf Jamal",
    "Md Yusuf Jamal",
    "Mohamed Yousuf Jamal",
    "Mohammad Yusuf Jamal",
    "Yusuf Jamal",
    "Md Y Jamal",
    "Yusuf M Jamal",
    "M Y Jamal",
    "M Jamal developer",
    "Md Yousuf",
    "Mohamed Y Jamal",

    // Lowercase and mixed case variations
    "mohamed yusuf",
    "md yusuf",
    "md jamal",
    "yusuf developer",
    "jamal frontend developer",
    "yusuf full stack",
    "jamal react developer",
    "jamal next js developer",

    // Profession-specific
    "frontend developer",
    "backend developer",
    "full stack developer",
    "web developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "UI developer",
    "responsive web developer",

    // Portfolio-specific
    "developer portfolio",
    "frontend portfolio",
    "react developer portfolio",
    "personal portfolio site",
    "jamal developer portfolio",
    "portfolio of md yusuf jamal",
    "portfolio of mohamed yusuf jamal",
    "jamal full stack portfolio",
    "modern developer portfolio",
    "web portfolio site",

    // Technologies & tools
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Redux Toolkit",
    "REST API",
    "Firebase",
    "Git",
    "Figma",
    "Vercel",
    "HTML5",
    "CSS3",

    // Search-style phrases
    "who is mohamed yusuf jamal",
    "about md yusuf jamal",
    "portfolio for jamal frontend",
    "jamal nextjs site",
    "jamal full stack projects",
    "react developer india",
    "hire frontend developer india",
    "open source developer yusuf",
    "mohamed yusuf site link",
    "linkedin yusuf jamal",

    // Social and branding keywords
    "mohamed yusuf github",
    "jamal linkedin profile",
    "jamal web resume",
    "md yusuf online cv",
    "mohamed yusuf coding portfolio",

    // Recruiter-style queries
    "frontend developer for hire",
    "react js freelancer",
    "web developer in india",
    "junior full stack dev portfolio",
    "next.js resume site",

    // Personal brand + project mix
    "projects by mohamed yusuf jamal",
    "jamal react projects",
    "mohamed portfolio projects",
    "md jamal website",
    "jamal developer case study",

    // General SEO mix-ins
    "software developer",
    "programmer portfolio",
    "developer resume",
    "cv portfolio website",
    "jamal web dev work",
    "yusuf jamal ui designer",
    "frontend coding samples",
    "portfolio site example",
    "modern react portfolio",
    "responsive dev portfolio",
    "best next js portfolio",
    "personal website jamal",
    "web developer Coimbatore",
    "frontend developer Coimbatore",
    "full stack developer Coimbatore",
    "React developer Coimbatore",
    "Next.js developer Coimbatore",
    "JavaScript developer Coimbatore",
    "software developer Tamil Nadu",
    "developer Tamilnadu",
    "web developer Tamilnadu",
    "freelance developer Tamilnadu",
    "developer India",
    "frontend developer India",
    "full stack developer India",
    "React developer India",
    "hire developer in Coimbatore",
    "portfolio developer India",
    "portfolio developer Tamil Nadu",
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
