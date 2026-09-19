import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import groupImage from "@/assets/lab-group.jpg";
import { alumni, people, pi } from "@/lib/lab-data";
import type { Person } from "@/lib/lab-data";

export const Route = createFileRoute("/people")({ component: PeoplePage });

function PersonRow({ person, index }: { person: Person; index: number }) {
  const content = (
    <>
      <span>{String(index + 1).padStart(2, "0")}</span>
      {person.photo ? (
        <img src={person.photo} alt={person.name} />
      ) : (
        <div className="person-row__initial">
          {person.name
            .split(" ")
            .map((name) => name[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}
      <div>
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
      <small>{person.researchFocus?.slice(0, 95) ?? "DDOmics Lab"}</small>
    </>
  );
  return person.noProfilePage ? (
    <div className="person-row">{content}</div>
  ) : (
    <Link
      to="/people/$personId"
      params={{ personId: person.slug }}
      className="person-row"
    >
      {content}
    </Link>
  );
}

function PeoplePage() {
  const groups = ["scientist", "student", "staff"] as const;
  return (
    <>
      <section className="page-statement">
        <img src={groupImage} alt="DDOmics Lab team" />
        <div>
          <p className="eyebrow">PEOPLE</p>
          <h1>
            Curiosity is a <em>team sport.</em>
          </h1>
          <p>
            DDOmics brings together microbiologists, bioinformaticians,
            technical experts and students around shared questions of microbial
            health.
          </p>
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">PRINCIPAL INVESTIGATOR</p>
          <Reveal className="pi-profile">
            <img src={pi.photo} alt={pi.name} />
            <div>
              <h2>{pi.name}</h2>
              <p className="feature-number">{pi.title}</p>
              <p>{pi.about}</p>
              <Link to="/dhiraj-dhotre" className="editorial-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="editorial-section editorial-section--tint">
        <div className="editorial-container">
          <p className="eyebrow">THE LAB</p>
          {groups.map((group) => {
            const members = people.filter((person) => person.group === group);
            return members.length ? (
              <div className="people-group" key={group}>
                <h2>
                  {group === "scientist"
                    ? "Scientists"
                    : group === "student"
                      ? "Students & postdoctoral researchers"
                      : "Technical & project staff"}
                </h2>
                {members.map((person, index) => (
                  <Reveal key={person.slug}>
                    <PersonRow person={person} index={index} />
                  </Reveal>
                ))}
              </div>
            ) : null;
          })}
        </div>
      </section>
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="eyebrow">ALUMNI</p>
          <div className="alumni-list">
            {alumni.map((person) => (
              <span key={person.slug}>{person.name}</span>
            ))}
          </div>
          <div className="digital-credit">
            <p className="eyebrow">DIGITAL INFRASTRUCTURE</p>
            <h3>Lead Systems Architect &amp; Developer</h3>
            <p>
              The role responsible for the lab’s web and digital-systems
              architecture is formally acknowledged alongside the research team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
