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
  title: "Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio",

  description:
    "A full-fledged full stack developer showcasing frontend and backend projects.",
  keywords: [
    // 🔹 Core Name Variations
    "Mohamed Yusuf Jamal",
    "Mohamed Jamal",
    "Mohamed Yusuf",
    "Md Yusuf Jamal",
    "Md Jamal",
    "Md Yusuf",
    "Yusuf Jamal",
    "Jamal Yusuf",
    "Mohamed Y Jamal",
    "Yusuf M Jamal",
    "M Y Jamal",
    "Mohamed Yousuf Jamal",
    "Mohammed Yusuf Jamal",
    "Mohamed Yousuf",
    "Mohammad Yusuf Jamal",
    "Mohd Yusuf Jamal",
    "Mohd Jamal",
    "Yusuf M",
    "Jamal M",
    "mohamed jamal portfolio",
    "jamal developer",
    "yusuf developer",
    "yusuf full stack developer",
    "jamal full stack developer",

    // 🔹 With Roles
    "Mohamed Yusuf Jamal frontend developer",
    "Mohamed Yusuf Jamal full stack developer",
    "Mohamed Yusuf Jamal next.js developer",
    "Mohamed Yusuf Jamal react developer",
    "Md Yusuf Jamal portfolio",
    "Md Yusuf Jamal projects",
    "Mohamed Yusuf Jamal resume",
    "Md Yusuf Jamal CV",
    "yusuf jamal resume site",
    "jamal nextjs site",
    "jamal react developer portfolio",

    // 🔹 Job Titles
    "frontend developer",
    "backend developer",
    "full stack developer",
    "MERN stack developer",
    "react developer",
    "next.js developer",
    "JavaScript developer",
    "web developer",
    "UI developer",
    "remote developer",
    "junior developer",
    "freelance developer",
    "portfolio developer",

    // 🔹 Technologies
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Firebase",
    "Redux Toolkit",
    "Figma",
    "Vercel",

    // 🔹 Search-style phrases
    "portfolio of mohamed yusuf jamal",
    "who is mohamed yusuf jamal",
    "md yusuf jamal web developer",
    "hire md yusuf developer",
    "mohamed jamal projects",
    "open source by yusuf jamal",
    "frontend portfolio by jamal",
    "jamal full stack react site",
    "personal website jamal",
    "best portfolio next js",
    "md jamal nextjs resume site",

    // 🔹 Location-based
    "react developer in Coimbatore",
    "frontend developer Coimbatore",
    "full stack developer Tamil Nadu",
    "developer in Tamilnadu",
    "software engineer Coimbatore",
    "freelancer Coimbatore Tamil Nadu",
    "developer India",
    "portfolio website India",
    "Indian next js developer",

    // 🔹 Social tags
    "mohamed yusuf jamal github",
    "mohamed yusuf jamal linkedin",
    "jamal portfolio github",
    "yusuf jamal profile site",
    "jamal online cv",
    "jamal personal website",
    "jamal developer projects",

    // 🔹 Recruiter-style queries
    "frontend developer for hire",
    "react developer for hire india",
    "hire full stack developer in Coimbatore",
    "hire nextjs developer india",
    "jamal web developer available",
    "remote frontend developer jamal",
    "Professional developer",
    "developer portfolio",
    "Md Yusuf Jamal personal website",
    "personal portfolio",
    "best Web Development FullStack developer",
    "yusuf jamal",
    "yusuf",
    "jamal",
    "yusuf  portfolio",
    "jamal portfolio",
    "frontend developer",
    "Portfolio template",
    "jamal projects",
    "portfolio site example",
    "modern developer portfolio",
    "responsive developer portfolio",
    "next js resume portfolio",
    "full stack portfolio jamal",
    "yusuf jamal personal site",
    "professional web portfolio jamal",
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
    title: "Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio",

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
    title: "Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio",
    description:
      "A full-fledged full stack developer showcasing frontend and backend projects.",
    images: ["https://mohamedyusufjamalportfolio.vercel.app/"],
  },
  openGraph: {
    title: "Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio",
    description:
      "Explore the portfolio of Mohamed Yusuf Jamal, a full stack developer specializing in React, Next.js, and building modern web applications.",
    url: "https://mohamedyusufjamalportfolio.vercel.app/",
    siteName: "Mohamed Yusuf Jamal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mohamedyusufjamalportfolio.vercel.app/", // <-- Make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Mohamed Yusuf Jamal Portfolio Preview",
      },
    ],
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
