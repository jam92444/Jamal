import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Structured Data for SEO */}
        <Script
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
