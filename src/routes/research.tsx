import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import bgResearch from "@/assets/bg-research.jpg";
import { facilities, researchTracks } from "@/lib/lab-data";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  return (
    <>
      <section className="page-statement">
        <img src={bgResearch} alt="Research laboratory" />
        <div>
          <p className="eyebrow">OUR RESEARCH</p>
          <h1>
            Understanding microbial ecosystems through <em>multi-omics.</em>
          </h1>
          <p>
            We combine culture, sequencing and computation to study microbiomes
            across populations, life stages and disease.
          </p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">RESEARCH THEMES</p>
          <div className="theme-list">
            {researchTracks.map((track, index) => (
              <Reveal
                key={track.slug}
                className={`theme-row ${index % 2 ? "theme-row--reverse" : ""}`}
              >
                <img src={track.image} alt="" />
                <div>
                  <p className="feature-number">
                    {String(index + 1).padStart(2, "0")} / {track.code}
                  </p>
                  <h2>{track.title}</h2>
                  <p>{track.summary}</p>
                  <Link
                    to="/research/$trackSlug"
                    params={{ trackSlug: track.slug }}
                    className="editorial-link"
                  >
                    Explore this work <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container">
          <p className="eyebrow">HOW WE WORK</p>
          <h2 className="section-title">A connected experimental pipeline.</h2>
          <div className="pipeline">
            <div>
              Sample
              <br />
              <span>cohorts &amp; cultures</span>
            </div>
            <b>↓</b>
            <div>
              Sequence
              <br />
              <span>DNA / RNA / metabolites</span>
            </div>
            <b>↓</b>
            <div>
              Integrate
              <br />
              <span>microbiology &amp; computation</span>
            </div>
            <b>↓</b>
            <div>
              Insight
              <br />
              <span>health &amp; therapeutic potential</span>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">FACILITIES</p>
          <div className="facility-strip">
            {facilities.map((facility) => (
              <div key={facility.title}>
                <h3>{facility.title}</h3>
                <p>{facility.body}</p>
              </div>
            ))}
          </div>
          <Link to="/research/facilities" className="editorial-link">
            View instruments &amp; facilities <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
