import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProtectedImage } from "@/components/ProtectedImage";
import bgWave from "@/assets/bg-pi.jpg";
import { lab, pi, publications } from "@/lib/lab-data";
import iconGmail from "@/assets/social/gmail.png";
import iconLinkedin from "@/assets/social/linkedin.png";
import iconGithub from "@/assets/social/github.png";
import iconOrcid from "@/assets/social/orcid.png";
import iconScholar from "@/assets/social/scholar.png";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  github: "GitHub",
  orcid: "ORCID",
};

const socialIcons: Record<string, string> = {
  linkedin: iconLinkedin,
  github: iconGithub,
  orcid: iconOrcid,
  scholar: iconScholar,
};

export const Route = createFileRoute("/dhiraj-dhotre")({
  head: () => ({
    meta: [
      { title: "Dr. Dhiraj Dhotre — Principal Investigator, DDOmics Lab" },
      {
        name: "description",
        content:
          "Dr. Dhiraj Dhotre, Scientist 'E' at NCCS Pune, is a bioinformatician studying the human microbiome in health and disease through genomics, metabolomics and culturomics.",
      },
      {
        property: "og:title",
        content: "Dr. Dhiraj Dhotre — Principal Investigator, DDOmics Lab",
      },
      {
        property: "og:description",
        content:
          "Bioinformatician and microbiome scientist at the National Centre for Cell Science, Pune.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: PIPage,
});

function PIPage() {
  const selected = publications.filter((p) => p.selected);

  return (
    <>
      <section className="hero-veil relative -mt-24 flex min-h-[32vh] items-end overflow-hidden text-deep-foreground">
        <img
          src={bgWave}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}

          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--deep)_35%,transparent),var(--deep)_62%)]"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-44 pb-16 lg:grid-cols-12 lg:px-10 lg:pt-52 lg:pb-24">
          <Reveal className="lg:col-span-4">
            <div className="silver-frame sheen relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden bg-card/40 backdrop-blur">
              <ProtectedImage
                src={pi.photo}
                alt={pi.name}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-5 opacity-60">Principal Investigator</p>
              <h1 className="display-title silver-text text-4xl font-bold sm:text-5xl lg:text-[60.2048px]">
                {pi.name}
              </h1>
              <p className="mt-5 font-display text-[28.376px] font-bold leading-snug text-primary">
                {pi.title}
              </p>
              <p className="mt-2 text-[21.6752px] opacity-70">{pi.institute}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="measure mt-8 text-[21.6752px] leading-relaxed opacity-85">
                {pi.about}
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${lab.email}`}
                className="eyebrow sheen inline-flex items-center gap-2 border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <img src={iconGmail} alt="" className="h-4 w-4 rounded-sm" />
                Email the PI
              </a>
              <Link
                to="/publications"
                className="eyebrow sheen border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
              >
                Publications
              </Link>
            </Reveal>
            {pi.socials && (
              <Reveal delay={240} className="mt-6 flex flex-wrap items-center gap-3">
                {Object.entries(pi.socials).map(([key, url]) =>
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
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Experience + Education */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <Reveal>
              <h2 className="display-title text-2xl lg:text-3xl">Experience</h2>
              <hr className="silver-rule mt-5 mb-8" />
            </Reveal>
            <ol className="relative border-l border-border pl-6">
              {pi.experience.map((e, i) => (
                <Reveal
                  as="li"
                  key={e.role + e.period}
                  delay={i * 70}
                  className="group relative pb-8 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[27px] top-2 h-2.5 w-2.5 rounded-full bg-silver transition-colors duration-300 group-hover:bg-primary"
                  />
                  <p className="font-display text-lg font-semibold">{e.role}</p>
                  <p className="eyebrow text-primary">{e.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.place}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <h2 className="display-title text-2xl lg:text-3xl">Education</h2>
              <hr className="silver-rule mt-5 mb-8" />
            </Reveal>
            <ol className="relative border-l border-border pl-6">
              {pi.education.map((e, i) => (
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
                  <p className="eyebrow text-primary">{e.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.place}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120} className="mt-12">
              <h2 className="display-title text-2xl lg:text-3xl">Awards</h2>
              <hr className="silver-rule mt-5 mb-6" />
              <ul className="space-y-4">
                {pi.awards.map((a) => (
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
          </div>
        </div>
      </section>

      {/* Books & Chapters */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-10">
            <h2 className="display-title text-2xl lg:text-3xl">
              Books, Chapters &amp; Reports
            </h2>
            <hr className="silver-rule mt-5 mb-8" />
          </Reveal>
          <ul className="divide-y divide-border border-t border-b border-border">
            {pi.bookChapters.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 60} className="py-6">
                <p className="font-display text-lg font-semibold leading-snug">
                  {b.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {b.authors}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {b.publisher}, {b.year}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected papers */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-10">
            <h2 className="display-title text-2xl lg:text-3xl">
              Selected publications
            </h2>
          </Reveal>
          <ul className="divide-y divide-border border-t border-b border-border">
            {selected.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="py-6">
                <a
                  href={p.doi ? `https://doi.org/${p.doi}` : undefined}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="font-display text-lg font-semibold transition-opacity group-hover:opacity-60">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.venue}, {p.year}
                  </p>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
