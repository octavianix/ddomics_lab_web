import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import publicationImage from "@/assets/bg-publications.jpg";
import { featuredPublications, publications } from "@/lib/lab-data";

export const Route = createFileRoute("/publications")({
  component: PublicationsPage,
});

function PublicationsPage() {
  const years = [
    ...new Set(publications.map((publication) => publication.year)),
  ].sort((a, b) => b - a);
  return (
    <>
      <section className="page-statement page-statement--short">
        <img src={publicationImage} alt="Scientific data visualisation" />
        <div>
          <p className="eyebrow">PUBLICATIONS</p>
          <h1>
            Knowledge made <em>shareable.</em>
          </h1>
          <p>Selected studies and the full record of the DDOmics Lab’s work.</p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">FEATURED STUDIES</p>
          <div className="publication-feature-list">
            {featuredPublications.slice(0, 3).map((publication, index) => (
              <Reveal key={publication.title} className="publication-feature">
                <div className="publication-feature__number">0{index + 1}</div>
                <div>
                  <p>{publication.year} · FEATURED RESEARCH</p>
                  <h2>{publication.title}</h2>
                  <span>{publication.authors}</span>
                  <em>{publication.venue}</em>
                  {publication.doi && (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link"
                    >
                      Read paper <span>↗</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/publications/featured" className="editorial-link">
            All featured publications <span>→</span>
          </Link>
        </div>
      </section>
      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container">
          <p className="eyebrow">THE FULL RECORD</p>
          <h2 className="section-title">Publication archive</h2>
          <div className="year-list">
            {years.slice(0, 5).map((year) => (
              <Reveal key={year} className="year-list__row">
                <strong>{year}</strong>
                <span>
                  {
                    publications.filter(
                      (publication) => publication.year === year,
                    ).length
                  }{" "}
                  publications
                </span>
              </Reveal>
            ))}
          </div>
          <Link to="/publications/all" className="editorial-link">
            Browse and filter all publications <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
