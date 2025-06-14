export default function Head() {
  return (
    <>
      <title>Mohamed Yusuf Jamal | Portfolio</title>
      <meta
        name="description"
        content="Welcome to my portfolio. I am a developer skilled in React, TypeScript, and more."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta property="og:title" content="Mohamed Yusuf Jamal | Portfolio" />
      <meta
        property="og:description"
        content="Welcome to my portfolio. I am a developer skilled in React, TypeScript, and more."
      />
      <meta property="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="w1OtGfNoOboAaLyWwZnhQdJYNwGp_rCVPyoTqh9fyWo"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohamed Yusuf Jamal",
            url: "https://mohamedyusufjamalportfolio.vercel.app/",
            sameAs: [
              "https://github.com/jam92444",
              "https://www.linkedin.com/in/mohamed-yusuf-jamal-106772293/",
            ],
            jobTitle: "Frontend Engineer",
            worksFor: {
              "@type": "Organization",
              name: "M-Guru Company",
            },
          }),
        }}
      />
    </>
  );
}
