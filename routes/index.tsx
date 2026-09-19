import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/microbiome-heads.png";
import researchImage from "@/assets/bg-research.jpg";
import labImage from "@/assets/lab-group.jpg";
import artGut from "@/assets/art-gut.jpg";
import artNetwork from "@/assets/art-network.jpg";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DDOmics Lab — Microbiome Research at NCCS Pune" },
      {
        name: "description",
        content:
          "DDOmics Lab at NCCS Pune investigates human microbial ecosystems through microbiology, sequencing and multi-omics.",
      },
    ],
  }),
  component: Home,
});

const questions = [
  [
    "01",
    "How do microbial ecosystems shape health across India’s diverse populations?",
  ],
  [
    "02",
    "What can multi-omics reveal about disease, diet and microbial function?",
  ],
  [
    "03",
    "How can cultured microbes become useful diagnostics and therapeutics?",
  ],
];

function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to as never} className="editorial-link">
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <img
          src={heroImage}
          alt="Abstract visualisation of the human microbiome"
          className="home-hero__image"
        />
        <div className="home-hero__wash" />
        <div className="editorial-container home-hero__content">
          <Reveal>
            <p className="eyebrow">DDOMICS LAB · NCCS PUNE</p>
          </Reveal>
          <Reveal delay={90}>
            <h1>
              Reading the microbial worlds <em>within us.</em>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="home-hero__lede">
              We investigate the human microbiome across health, disease and
              early life—joining classical microbiology with sequencing,
              computation and multi-omics.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ArrowLink to="/research">Explore our research</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section editorial-intro">
        <div className="editorial-reading">
          <Reveal>
            <p className="eyebrow">OUR PERSPECTIVE</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>
              Microbes are not passengers. They are an integral part of human
              biology.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p>
              At DDOmics, we study the structure and function of microbial
              communities in people and populations. Our work connects community
              ecology, molecular biology and computational analysis to make the
              microbiome more legible—and more useful for human health.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container">
          <Reveal>
            <p className="eyebrow">RESEARCH</p>
            <h2 className="section-title">
              From samples to biological insight.
            </h2>
          </Reveal>
          <div className="feature-split">
            <Reveal className="feature-split__image">
              <img src={researchImage} alt="Laboratory research equipment" />
            </Reveal>
            <Reveal delay={100} className="feature-split__copy">
              <p className="feature-number">01 / OUR APPROACH</p>
              <h3>We move between the bench and the cluster.</h3>
              <p>
                Culture-based microbiology grounds our data in living organisms.
                Next-generation sequencing maps communities at scale. Integrated
                multi-omics turns those measurements into biological questions
                and practical possibilities.
              </p>
              <ArrowLink to="/research/domains">
                View research domains
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-container">
          <Reveal>
            <p className="eyebrow">QUESTIONS THAT GUIDE US</p>
          </Reveal>
          <div className="question-list">
            {questions.map(([number, question], index) => (
              <Reveal
                key={number}
                delay={index * 80}
                className="question-list__item"
              >
                <span>{number}</span>
                <h3>{question}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--ink">
        <div className="editorial-container feature-split feature-split--reverse">
          <Reveal className="feature-split__image">
            <img
              src={artGut}
              alt="A conceptual illustration of the gut microbiome"
            />
          </Reveal>
          <Reveal delay={100} className="feature-split__copy">
            <p className="eyebrow">INDIAN HUMAN MICROBIOME</p>
            <h2>Local populations deserve a reference map of their own.</h2>
            <p>
              Our population-scale work charts the diversity, ecology and
              functional potential of microbial communities across Indian
              cohorts.
            </p>
            <ArrowLink to="/research/ihmi">Discover the IHMI</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container latest-layout">
          <Reveal>
            <p className="eyebrow">LATEST FROM THE LAB</p>
            <h2 className="section-title">News &amp; updates</h2>
          </Reveal>
          <div className="news-list">
            {newsItems.slice(0, 3).map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="news-list__item"
              >
                <p>
                  {item.category} · {item.date}
                </p>
                <h3>{item.title}</h3>
                <span>{item.excerpt}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <ArrowLink to="/news">All news</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-container feature-split">
          <Reveal className="feature-split__image">
            <img src={labImage} alt="DDOmics Lab group" />
          </Reveal>
          <Reveal delay={100} className="feature-split__copy">
            <p className="eyebrow">THE PEOPLE</p>
            <h2>Science is a shared practice.</h2>
            <p>
              Our team brings together microbiologists, bioinformaticians,
              clinicians and students working across questions, disciplines and
              scales.
            </p>
            <ArrowLink to="/people">Meet the lab</ArrowLink>
          </Reveal>
        </div>
      </section>

      <section className="closing-panel">
        <img src={artNetwork} alt="Microbial network visualisation" />
        <div>
          <p className="eyebrow">WORK WITH US</p>
          <h2>Build a clearer picture of microbial health.</h2>
          <ArrowLink to="/join">Join or collaborate</ArrowLink>
        </div>
      </section>
    </>
  );
}
