import { Link } from "@tanstack/react-router";
import { lab, navLinks } from "@/lib/lab-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="eyebrow">DDOMICS LAB</p>
          <p className="site-footer__statement">
            Studying microbial ecosystems for a clearer understanding of human
            health.
          </p>
        </div>
        <div>
          <p className="site-footer__heading">Contact</p>
          <address>
            Dr. Dhiraj S. Dhotre, Scientist ‘E’
            <br />
            Lab 3, Old Building, NCCS
            <br />
            SPPU Campus, Pune 411007
            <br />
            <a href={`mailto:${lab.email}`}>{lab.email}</a>
          </address>
        </div>
        <div>
          <p className="site-footer__heading">Explore</p>
          <nav>
            {navLinks.slice(0, 5).map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
            <Link to="/join">Join the lab</Link>
          </nav>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {lab.name}, NCCS Pune.
        </span>
        <span>Digital systems · Lead Systems Architect &amp; Developer</span>
      </div>
    </footer>
  );
}
