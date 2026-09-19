import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import newsImage from "@/assets/art-network.jpg";
import { newsItems } from "@/lib/lab-data";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  return (
    <>
      <section className="page-statement page-statement--short">
        <img src={newsImage} alt="Microbial network" />
        <div>
          <p className="eyebrow">NEWS &amp; UPDATES</p>
          <h1>
            What the lab is <em>thinking about.</em>
          </h1>
          <p>
            Publications, presentations, collaboration and progress from
            DDOmics.
          </p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">LATEST</p>
          <div className="publication-feature-list">
            {newsItems.map((item, index) => (
              <Reveal key={item.title} className="publication-feature">
                <div className="publication-feature__number">0{index + 1}</div>
                <div>
                  <p>
                    {item.category} · {item.date}
                  </p>
                  <h2>{item.title}</h2>
                  <span>{item.excerpt}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="news-routes">
            <Link to="/news/publications">Publications</Link>
            <Link to="/news/announcements">Announcements</Link>
            <Link to="/news/career-notifications">Careers</Link>
            <Link to="/news/media">Media</Link>
          </div>
        </div>
      </section>
    </>
  );
}
