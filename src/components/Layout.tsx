import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import logoImg from "@/imports/LOGO_JPEG.jpg";

const NAV_LINKS = [
  { label: "Início",             to: "/" },
  { label: "Quem Somos",        to: "/quem-somos" },
  { label: "Áreas de Atuação",  to: "/#areas" },
  { label: "Nosso Diferencial", to: "/#diferencial" },
  { label: "História",          to: "/#historia" },
  { label: "Equipe",            to: "/quem-somos#equipe" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* handle hash scrolling after navigation */
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, to: string) {
    e.preventDefault();
    setMenuOpen(false);
    const [path, hash] = to.split("#");
    navigate(path + (hash ? `#${hash}` : ""));
  }

  return (
    <div style={{ minHeight: "100%" }}>
      <header className="site-header">
        <div className="site-header__inner">
          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img
              src={logoImg}
              alt="Marques Ezechiello Advogados Associados"
              style={{ height: 38, width: "auto", display: "block" }}
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className="site-header__nav">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.to}
                onClick={(e) => handleNavClick(e, l.to)}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 12,
                  letterSpacing: ".04em",
                  color: "var(--navy)",
                  textDecoration: "none",
                  opacity: .65,
                  transition: "opacity .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = ".65")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="/#contato"
              onClick={(e) => handleNavClick(e, "/#contato")}
              className="site-header__cta desktop-only"
            >
              FALE CONOSCO ·
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <span style={{ width: 22 }} />
              <span style={{ width: 22 }} />
              <span style={{ width: 16 }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.to}
              onClick={(e) => handleNavClick(e, l.to)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contato"
            onClick={(e) => handleNavClick(e, "/#contato")}
            style={{
              display: "inline-block",
              marginTop: 16,
              fontFamily: "var(--sans)",
              fontSize: 11,
              letterSpacing: ".1em",
              color: "var(--offwhite)",
              background: "var(--navy)",
              borderRadius: 100,
              padding: "10px 20px",
              textDecoration: "none",
            }}
          >
            FALE CONOSCO ·
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer onNav={handleNavClick} />
    </div>
  );
}

const FOOTER_LINKS = [
  { label: "Início",               to: "/" },
  { label: "Quem Somos",          to: "/quem-somos" },
  { label: "Áreas de Atuação",    to: "/#areas" },
  { label: "Equipe",              to: "/quem-somos#equipe" },
  { label: "Contato",             to: "/#contato" },
  { label: "Política de Privacidade", to: "/" },
];

function Footer({ onNav }: { onNav: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__big">
          <h2 className="footer__wordmark">
            MARQUES<br />
            <span>EZECHIELLO</span>
          </h2>
          <p className="footer__sub">ADVOGADOS ASSOCIADOS</p>
        </div>
        <div className="footer__bottom">
          <nav className="footer__nav">
            {FOOTER_LINKS.map((l) => (
              <a key={l.label} href={l.to} onClick={(e) => onNav(e, l.to)}>{l.label}</a>
            ))}
          </nav>
          <p className="footer__copy">© 2026 Marques Ezechiello Advogados Associados</p>
        </div>
      </div>
    </footer>
  );
}
