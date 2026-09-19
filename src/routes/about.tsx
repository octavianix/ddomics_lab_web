import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import labPhoto from "@/assets/lab-group.jpg";
import piPhoto from "@/assets/bg-pi.jpg";

export const Route = createFileRoute("/about" as never)({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="page-statement">
        <img src={labPhoto} alt="DDOmics Lab" />
        <div>
          <p className="eyebrow">ABOUT DDOMICS</p>
          <h1>
            Evidence, context and <em>living systems.</em>
          </h1>
          <p>
            We approach the human microbiome as a dynamic ecosystem—shaped by
            people, places, life stages and the molecular conversations within
            us.
          </p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-reading">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>
            Microbiome science rooted in India, connected to global questions.
          </h2>
          <p>
            Based at the National Centre for Cell Science in Pune, the DDOmics
            Lab combines microbiology, high-throughput sequencing and
            computational analysis to understand microbial communities in human
            health and disease.
          </p>
        </div>
      </section>
      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container feature-split">
          <Reveal className="feature-split__image">
            <img src={piPhoto} alt="Dr. Dhiraj Dhotre" />
          </Reveal>
          <Reveal className="feature-split__copy">
            <p className="eyebrow">LAB LEADERSHIP</p>
            <h2>Dr. Dhiraj S. Dhotre</h2>
            <p>
              Principal Investigator and Scientist ‘E’ at NCCS Pune. The lab
              investigates the taxonomic, functional and metabolic structure of
              the microbiome to advance diagnostics and therapeutics.
            </p>
            <Link to="/dhiraj-dhotre" className="editorial-link">
              Meet the principal investigator <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">OUR VALUES</p>
          <div className="values-list">
            <div>
              <strong>01</strong>
              <h3>Rigour</h3>
              <p>
                We connect high-quality experimental work with transparent
                computational analysis.
              </p>
            </div>
            <div>
              <strong>02</strong>
              <h3>Context</h3>
              <p>
                We study microbial biology in the social, dietary and population
                contexts where it takes shape.
              </p>
            </div>
            <div>
              <strong>03</strong>
              <h3>Collaboration</h3>
              <p>
                Our questions move across disciplines, institutions and methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
