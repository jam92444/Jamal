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
    "TypeScript developer",
    "Cloudinary image uploads",
    "MongoDB Atlas backend",
    "REST API developer",
    "Clerk authentication integration",
    "Express.js backend expert",
    "Redux global state management",
    "Firebase authentication expert",
    "CSS animation developer",
    "Tailwind responsive layout expert",
    "GitHub Actions developer",
    "JWT authentication developer",
    "CI/CD pipelines developer",
    "Prisma ORM developer",
    "Vite + React developer",
    "Postman API tester",
    "Zustand vs Redux comparison",
    "Custom hooks in React",
    "React Query for API fetching",
    "Socket.IO real-time developer",

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
    "Tamil Nadu React.js developer",
    "developer near Coimbatore",
    "best freelance developer India",
    "Tamil developer portfolio",
    "Indian MERN dev full stack",
    "hire React developer from India",
    "India-based full stack engineer",
    "Coimbatore JavaScript specialist",
    "Chennai software developer portfolio",
    "remote developer Tamil Nadu",

    // 🔹 Social tags
    "mohamed yusuf jamal github",
    "mohamed yusuf jamal linkedin",
    "jamal portfolio github",
    "yusuf jamal profile site",
    "jamal online cv",
    "jamal personal website",
    "jamal developer projects",
    "yusuf jamal dev.to blog",
    "jamal personal website on GitHub",
    "LinkedIn Mohamed Yusuf Jamal",
    "jamal developer profile GitHub",
    "Instagram full stack dev India",
    "YouTube portfolio walkthrough yusuf jamal",
    "personal brand Mohamed Yusuf Jamal",
    "x (Twitter) dev profile yusuf jamal",
    "public code projects jamal",
    "open source contributions yusuf jamal",

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
    "yusuf portfolio",
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
    "full stack engineer for hire",
    "freelance MERN developer India",
    "junior React developer portfolio",
    "software engineer Tamil Nadu",
    "self-taught developer portfolio",
    "freelance web developer India",
    "open to work frontend developer",
    "remote JavaScript developer portfolio",
    "backend developer with MongoDB",
    "React developer with 2 years experience",

    // 🔹 Career & Professional Tags
    "entry level web developer resume",
    "best junior frontend portfolio 2025",
    "clean portfolio for hiring",
    "developer resume inspiration",
    "full stack developer LinkedIn profile",
    "GitHub profile of Md Yusuf Jamal",
    "Dribbble or Behance for developers",
    "remote jobs full stack India",
    "top coding portfolios in India",
    "upwork developer from Tamil Nadu",

    // 🔹 Educational & Learning Related
    "React certification projects",
    "Next.js beginner to advanced projects",
    "learn full stack with md jamal",
    "portfolio projects for college students",
    "developer roadmap MERN",
    "best side projects for resume",
    "JavaScript practice projects 2025",
    "React interview project portfolio",
    "Next.js course projects showcase",
    "web dev journey by yusuf jamal",

    // 🔹 Real-Life Search Behavior Phrases
    "how to build developer portfolio",
    "inspiration for full stack websites",
    "portfolio with Next.js and MongoDB",
    "React site hosted on Vercel",
    "image upload to Cloudinary React",
    "create resume in Next js",
    "freelance dev Tamil Nadu reviews",
    "build blog with next.js portfolio",
    "examples of modern dev portfolio",
    "latest web dev portfolio trends",

    // 🔹 Miscellaneous Useful Keywords
    "dev portfolio inspiration",
    "Vercel deployed developer site",
    "creative coding projects India",
    "open source React projects 2025",
    "full stack developer resume tips",
    "dark mode portfolio next.js",
    "responsive developer website",
    "build portfolio with Clerk Auth",
    "portfolio with drag drop image upload",
    "clean UI for dev portfolio",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "w1OtGfNoOboAaLyWwZnhQdJYNwGp_rCVPyoTqh9fyWo",
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
      "Explore the portfolio of Mohamed Yusuf Jamal, a full stack developer specializing in React, Next.js, and modern web technologies.",
    url: "https://mohamedyusufjamalportfolio.vercel.app/",
    siteName: "Mohamed Yusuf Jamal Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // ✅ This points to /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Mohamed Yusuf Jamal Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio",
    description:
      "Explore the portfolio of Mohamed Yusuf Jamal, a full stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohamed Yusuf Jamal",
            url: "https://mohamedyusufjamalportfolio.vercel.app",
            sameAs: [
              "https://github.com/jam92444",
              "https://www.linkedin.com/in/mohamed-yusuf-jamal-106772293/",
            ],
            jobTitle: "Full Stack Developer",
          }),
        }}
      />

      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden leading-8 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
