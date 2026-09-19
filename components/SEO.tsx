/**
 * SEO.tsx — drop-in, zero-config canonical + structured data (JSON-LD) injector.
 *
 * Why this file exists:
 * TanStack Router's `head()` on each route already defines a good
 * <title>/<meta>/OG tag per page — but nothing in the app was actually
 * rendering <HeadContent /> to apply that data to the document. This file
 * doesn't replace that (see the __root.tsx patch note), it ADDS the two
 * things no route currently sets at all:
 *   1. <link rel="canonical"> — tells Google the one true URL per page.
 *   2. JSON-LD structured data — tells Google (and any AI answer engine)
 *      exactly what entity this site is: a lab, its PI, its parent
 *      institute — which is what makes a brand/name search resolve
 *      confidently to this site instead of a directory listing or a
 *      LinkedIn page.
 *
 * Mount once, in the root route — see the 2-line patch below.
 * Everything else here needs no other file touched.
 */
import { useRouterState } from "@tanstack/react-router";
import { lab, pi, people, publications } from "@/lib/lab-data";

// Matches this repo's current vite.config.ts (base: "/ddomicslab_website/"),
// deployed at the GitHub Pages project URL. If you later move to the
// custom domain (www.ddomicslab.in), change this one line, and update
// sitemap.xml + robots.txt to match.
const SITE_URL = "https://suyash007-1.github.io/ddomics_lab_website";

function stripBasePath(pathname: string) {
  // Works whether the app is served from "/" (custom domain) or from a
  // GitHub Pages project subpath (e.g. "/ddomicslab_website/").
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") ?? "";
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || "/";
  }
  return pathname;
}

export function SEO() {
  const rawPathname = useRouterState({ select: (s) => s.location.pathname });
  const pathname = stripBasePath(rawPathname);
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname.replace(/\/$/, "")}`;

  const orgId = `${SITE_URL}/#organization`;

  const schemas: Record<string, unknown>[] = [
    // Present on every page — this is the entity Google should attach to
    // every result it shows for "DDOmics Lab" / "Dhiraj Dhotre lab" etc.
    {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      "@id": orgId,
      name: lab.name,
      alternateName: ["DDOmics Laboratory", "Dhotre Lab"],
      url: SITE_URL,
      email: lab.email,
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "National Centre for Cell Science",
        sameAs: "https://www.nccs.res.in",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: lab.city,
        addressCountry: "IN",
      },
      founder: { "@type": "Person", name: pi.name },
      sameAs: [lab.twitter].filter(Boolean),
    },
  ];

  if (pathname === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: SITE_URL,
      name: `${lab.name} — NCCS Pune`,
      publisher: { "@id": orgId },
    });
  }

  if (pathname.startsWith("/dhiraj-dhotre")) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/dhiraj-dhotre#person`,
      name: pi.name,
      jobTitle: pi.title,
      description: pi.about,
      worksFor: { "@id": orgId },
      url: `${SITE_URL}/dhiraj-dhotre`,
      // Add sameAs entries once you have them — this is one of the
      // single highest-value additions for name-search ranking:
      // sameAs: [
      //   "https://scholar.google.com/citations?user=XXXXXXX",
      //   "https://orcid.org/0000-0000-0000-0000",
      //   "https://www.linkedin.com/in/...",
      // ],
    });
  }

  if (pathname === "/people") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: people.map((person, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: person.name,
          jobTitle: person.role,
          url: `${SITE_URL}${person.link ?? `/people/${person.slug}`}`,
        },
      })),
    });
  }

  if (pathname === "/publications") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Publications — DDOmics Lab",
      about: { "@id": orgId },
      hasPart: publications.slice(0, 20).map((p) => ({
        "@type": "ScholarlyArticle",
        headline: p.title,
        datePublished: String(p.year),
      })),
    });
  }

  return (
    <>
      <link rel="canonical" href={canonical} />
      {schemas.map((schema, i) => (
        <script
          key={`${pathname}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
