import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProtectedImage } from "@/components/ProtectedImage";
import {
  alumni,
  people,
  type PersonExperience,
  type PersonEducation,
  type PersonPublication,
} from "@/lib/lab-data";
import iconInstagram from "@/assets/social/instagram.png";
import iconLinkedin from "@/assets/social/linkedin.png";
import iconOrcid from "@/assets/social/orcid.png";
import iconX from "@/assets/social/x.png";
import iconGithub from "@/assets/social/github.png";
import iconScholar from "@/assets/social/scholar.png";

export const Route = createFileRoute("/people/$personId")({
  loader: ({ params }) => {
    const person = [...people, ...alumni].find(
      (p) => p.slug === params.personId,
    );
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} — DDOmics Lab, NCCS Pune`
          : "Profile — DDOmics Lab",
      },
      {
        name: "description",
        content:
          loaderData?.bio ??
          `${loaderData?.name ?? "Lab member"} at DDOmics Lab, NCCS Pune.`,
      },
    ],
  }),
  component: PersonProfilePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow mb-4 text-muted-foreground">Not found</p>
      <h1 className="display-title text-3xl">This person isn't listed</h1>
      <Link
        to="/people"
        className="eyebrow sheen mt-8 inline-block border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Back to People
      </Link>
    </div>
  ),
});

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const socialLabels: Record<string, string> = {
  twitter: "Twitter / X",
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  orcid: "ORCID",
  github: "GitHub",
  website: "Website",
  instagram: "Instagram",
};

const socialIcons: Record<string, string> = {
  twitter: iconX,
  linkedin: iconLinkedin,
  orcid: iconOrcid,
  github: iconGithub,
  instagram: iconInstagram,
  scholar: iconScholar,
};

function PersonProfilePage() {
  const person = Route.useLoaderData();
  const socialEntries = person.socials
    ? (Object.entries(person.socials).filter(([, v]) => !!v) as [
        string,
        string,
      ][])
    : [];
  const hasTimeline =
    (person.experience && person.experience.length > 0) ||
    (person.education && person.education.length > 0);

  return (
    <>
      <section className="hero-veil relative -mt-24 flex min-h-[32vh] items-end overflow-hidden text-deep-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-44 pb-16 lg:grid-cols-12 lg:px-10 lg:pt-52 lg:pb-24">
          <Reveal className="lg:col-span-4">
            <div className="silver-frame sheen relative mx-auto flex aspect-[4/5] w-full max-w-xs items-center justify-center overflow-hidden bg-card/40 backdrop-blur">
              {person.photo ? (
                <ProtectedImage
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="display-title text-5xl text-muted-foreground">
                  {initials(person.name)}
                </span>
              )}
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-5 opacity-60">
                {person.group === "pi"
                  ? "Principal Investigator"
                  : person.role}
              </p>
              <h1 className="display-title silver-text text-4xl font-bold sm:text-5xl lg:text-[60.2048px]">
                {person.name}
              </h1>
              <p className="mt-5 font-display text-[28.376px] font-bold leading-snug text-primary">
                {person.role}
              </p>
              <p className="mt-2 text-[21.6752px] opacity-70">
                DDOmics Lab, National Centre for Cell Science, Pune
                {person.joinedYear ? ` · Joined ${person.joinedYear}` : ""}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="measure mt-8 text-[21.6752px] leading-relaxed opacity-85">
                {person.bio ??
                  "This lab member hasn't shared a bio yet — check back soon."}
              </p>
            </Reveal>

            {person.quote && (
              <Reveal delay={160}>
                <blockquote className="measure mt-6 border-l-2 border-primary pl-5 font-display text-lg italic opacity-80">
                  “{person.quote}”
                </blockquote>
              </Reveal>
            )}

            <Reveal
              delay={200}
              className="mt-10 flex flex-wrap gap-3"
            >
              {socialEntries.map(([key, url]) =>
                socialIcons[key] ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    title={socialLabels[key] ?? key}
                    aria-label={socialLabels[key] ?? key}
                    className="sheen h-10 w-10 shrink-0 overflow-hidden rounded-full border border-silver/50 transition-transform hover:scale-105 hover:border-silver"
                  >
                    <img
                      src={socialIcons[key]}
                      alt={socialLabels[key] ?? key}
                      className="h-full w-full object-cover"
                    />
                  </a>
                ) : (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow sheen border border-silver/50 px-5 py-2.5 tracking-[0.1em] uppercase transition-colors hover:border-silver"
                  >
                    {socialLabels[key] ?? key}
                  </a>
                ),
              )}
              {person.cvUrl && (
                <a
                  href={person.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow sheen border border-silver/50 px-5 py-2.5 tracking-[0.1em] uppercase transition-colors hover:border-silver"
                >
                  Download CV
                </a>
              )}
            </Reveal>

            <Reveal delay={260} className="mt-10">
              <Link
                to="/people"
                className="eyebrow sheen inline-block border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                ← Back to People
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {person.researchFocus && (
        <section className="bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
            <Reveal>
              <h2 className="display-title text-2xl lg:text-3xl">
                Research Focus
              </h2>
              <hr className="silver-rule mt-5 mb-6" />
              <p className="measure leading-relaxed text-muted-foreground">
                {person.researchFocus}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {hasTimeline && (
        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            {person.experience && person.experience.length > 0 && (
              <div>
                <Reveal>
                  <h2 className="display-title text-2xl lg:text-3xl">
                    Experience
                  </h2>
                  <hr className="silver-rule mt-5 mb-8" />
                </Reveal>
                <ol className="relative border-l border-border pl-6">
                  {person.experience.map((e: PersonExperience, i: number) => (
                    <Reveal
                      as="li"
                      key={e.role + e.place}
                      delay={i * 70}
                      className="group relative pb-8 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -left-[27px] top-2 h-2.5 w-2.5 rounded-full bg-silver transition-colors duration-300 group-hover:bg-primary"
                      />
                      <p className="font-display text-lg font-semibold">
                        {e.role}
                      </p>
                      {e.period && (
                        <p className="eyebrow text-primary">{e.period}</p>
                      )}
                      <p className="mt-1 text-sm text-muted-foreground">
                        {e.place}
                      </p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            )}

            {(person.education?.length || person.awards?.length) && (
              <div>
                {person.education && person.education.length > 0 && (
                  <>
                    <Reveal>
                      <h2 className="display-title text-2xl lg:text-3xl">
                        Education
                      </h2>
                      <hr className="silver-rule mt-5 mb-8" />
                    </Reveal>
                    <ol className="relative border-l border-border pl-6">
                      {person.education.map((e: PersonEducation, i: number) => (
                        <Reveal
                          as="li"
                          key={e.degree}
                          delay={i * 70}
                          className="group relative pb-8 last:pb-0"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -left-[27px] top-2 h-2.5 w-2.5 rounded-full bg-silver transition-colors duration-300 group-hover:bg-primary"
                          />
                          <p className="font-display text-lg font-semibold">
                            {e.degree}
                          </p>
                          {e.period && (
                            <p className="eyebrow text-primary">
                              {e.period}
                            </p>
                          )}
                          {e.place && (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {e.place}
                            </p>
                          )}
                        </Reveal>
                      ))}
                    </ol>
                  </>
                )}

                {person.awards && person.awards.length > 0 && (
                  <Reveal delay={120} className="mt-12">
                    <h2 className="display-title text-2xl lg:text-3xl">
                      Awards &amp; Fellowships
                    </h2>
                    <hr className="silver-rule mt-5 mb-6" />
                    <ul className="space-y-4">
                      {person.awards.map((a: string) => (
                        <li
                          key={a}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-5 shrink-0 bg-silver"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {person.publications && person.publications.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="mb-10">
              <h2 className="display-title text-2xl lg:text-3xl">
                Selected Publications
              </h2>
            </Reveal>
            <ul className="divide-y divide-border border-t border-b border-border">
              {person.publications.map((p: PersonPublication, i: number) => (
                <Reveal as="li" key={p.title} delay={i * 60} className="py-6">
                  <a
                    href={p.doi ? `https://doi.org/${p.doi}` : undefined}
                    target={p.doi ? "_blank" : undefined}
                    rel={p.doi ? "noreferrer" : undefined}
                    className="group block"
                  >
                    <p className="font-display text-lg font-semibold leading-snug transition-opacity group-hover:opacity-60">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {[p.venue, p.year].filter(Boolean).join(", ")}
                    </p>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {person.outsideLab && (
        <section className="bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-20">
            <Reveal>
              <h2 className="display-title text-2xl lg:text-3xl">
                Outside the Lab
              </h2>
              <hr className="silver-rule mt-5 mb-6" />
              <p className="measure leading-relaxed text-muted-foreground">
                {person.outsideLab}
              </p>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
