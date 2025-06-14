export default function Head() {
  return (
    <>
      <title>
        Mohamed Yusuf Jamal | Full Stack & React Developer Portfolio
      </title>
      <meta
        name="description"
        content="Portfolio of Mohamed Yusuf Jamal — a full stack developer based in Coimbatore, Tamil Nadu, India. Specialized in React, Next.js, and modern web development."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohamed Yusuf Jamal",
            alternateName: "Md Yusuf Jamal",
            jobTitle: "Full Stack Developer",
            url: "https://mohamedyusufjamalportfolio.vercel.app/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              addressCountry: "India",
            },
            sameAs: [
              "https://github.com/jam92444",
              "https://www.linkedin.com/in/mohamed-yusuf-jamal-106772293/",
            ],
          }),
        }}
      />
    </>
  );
}
