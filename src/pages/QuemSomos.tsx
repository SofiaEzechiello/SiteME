import { useNavigate } from "react-router";
import rafaelaImg from "@/imports/rafaela.png__1_.png";
import alexandreImg from "@/imports/image__10_.png";
import soniaImg from "@/imports/image__9_.png";

export default function QuemSomos() {
  return (
    <>
      <ApresentacaoSection />
      <TimeOverviewSection />
      <ProfileSection
        id="alexandre"
        img={alexandreImg}
        name="Alexandre Ezechiello"
        role="Sócio & Co-founder"
        oab="[OAB REAL A INSERIR]"
        bio="[CONTEÚDO REAL A INSERIR]"
        formation="[CONTEÚDO REAL A INSERIR]"
        areas={["[CONTEÚDO REAL A INSERIR]"]}
        flipped={false}
      />
      <ProfileSection
        id="sonia"
        img={soniaImg}
        name="Sonia M. M. E. Ezechiello"
        role="Sócia & Founder"
        oab="[OAB REAL A INSERIR]"
        bio="[CONTEÚDO REAL A INSERIR]"
        formation="[CONTEÚDO REAL A INSERIR]"
        areas={["[CONTEÚDO REAL A INSERIR]"]}
        flipped={true}
      />
      <ProfileSection
        id="rafaela"
        img={rafaelaImg}
        name="Rafaela M. Ezechiello"
        role="Advogada"
        oab="[OAB REAL A INSERIR]"
        bio="[CONTEÚDO REAL A INSERIR]"
        formation="[CONTEÚDO REAL A INSERIR]"
        areas={["[CONTEÚDO REAL A INSERIR]"]}
        flipped={false}
      />
      <ContatoCTA />
    </>
  );
}

/* ─── APRESENTAÇÃO INSTITUCIONAL ─── */
function ApresentacaoSection() {
  return (
    <section className="qs-apresentacao">
      <div className="qs-apresentacao__inner">
        {/* Page label */}
        <div className="qs-crumb">
          <div className="hero__label-line" />
          <span className="hero__label-text">QUEM SOMOS</span>
        </div>

        {/* Main headline */}
        <div className="qs-apresentacao__grid">
          <h1 className="qs-apresentacao__title">
            Um escritório
            <br />
            construído sobre
            <br />
            <em>confiança.</em>
          </h1>
          <div className="qs-apresentacao__body">
            <p className="qs-apresentacao__text area-placeholder">[CONTEÚDO REAL A INSERIR]</p>
            <p className="qs-apresentacao__text area-placeholder" style={{ marginTop: 20 }}>[CONTEÚDO REAL A INSERIR]</p>

            {/* Stats / highlights */}
            <div className="qs-stats">
              {[
                { val: "[ANO]", label: "DE FUNDAÇÃO" },
                { val: "[Nº]",  label: "ANOS DE EXPERIÊNCIA" },
                { val: "[Nº]",  label: "ÁREAS DE ATUAÇÃO" },
              ].map((s) => (
                <div key={s.label} className="qs-stat">
                  <span className="qs-stat__val area-placeholder">{s.val}</span>
                  <span className="qs-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TIME OVERVIEW ─── */
const TEAM = [
  { img: alexandreImg, name: "Alexandre Ezechiello",      role: "Sócio & Co-founder", anchor: "alexandre" },
  { img: soniaImg,     name: "Sonia M. M. E. Ezechiello", role: "Sócia & Founder",    anchor: "sonia" },
  { img: rafaelaImg,   name: "Rafaela M. Ezechiello",     role: "Advogada",            anchor: "rafaela" },
];

function TimeOverviewSection() {
  function scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="equipe" className="qs-team-overview">
      <div className="qs-team-overview__inner">
        <div className="qs-team-overview__header">
          <span className="areas__label">NOSSO TIME</span>
          <h2 className="qs-team-overview__title">
            Conhecimento técnico.<br />
            <em>Relações de confiança.</em>
          </h2>
        </div>

        <div className="qs-team-overview__grid">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="qs-team-overview__card"
              onClick={() => scrollTo(m.anchor)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && scrollTo(m.anchor)}
            >
              <div className="qs-team-overview__photo">
                <img src={m.img} alt={m.name} />
              </div>
              <p className="team-intro__name">{m.name}</p>
              <p className="team-intro__role">{m.role.toUpperCase()}</p>
              <span className="qs-team-overview__hint">Ver perfil ↓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROFILE SECTION (full biography) ─── */
interface ProfileProps {
  id: string;
  img: string;
  name: string;
  role: string;
  oab: string;
  bio: string;
  formation: string;
  areas: string[];
  flipped: boolean;
}

function ProfileSection({ id, img, name, role, oab, bio, formation, areas, flipped }: ProfileProps) {
  return (
    <section id={id} className={`qs-profile ${flipped ? "qs-profile--flipped" : ""}`}>
      <div className="qs-profile__inner">
        {/* Photo */}
        <div className="qs-profile__photo-wrap">
          <div className="qs-profile__photo">
            <img src={img} alt={name} />
          </div>
          <div className="qs-profile__photo-caption">
            <span className="qs-profile__oab area-placeholder">{oab}</span>
          </div>
        </div>

        {/* Content */}
        <div className="qs-profile__content">
          <span className="diferencial__label" style={{ marginBottom: 20, display: "block" }}>PERFIL</span>
          <h2 className="qs-profile__name">{name}</h2>
          <span className="qs-profile__role">{role.toUpperCase()}</span>

          <div className="qs-profile__rule" />

          <p className="qs-profile__bio area-placeholder">{bio}</p>

          <div className="qs-profile__block">
            <h3 className="qs-profile__block-title">FORMAÇÃO</h3>
            <p className="qs-profile__block-text area-placeholder">{formation}</p>
          </div>

          <div className="qs-profile__block">
            <h3 className="qs-profile__block-title">ÁREAS DE ATUAÇÃO</h3>
            {areas.map((a, i) => (
              <p key={i} className="qs-profile__block-text area-placeholder">{a}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTATO CTA ─── */
function ContatoCTA() {
  const navigate = useNavigate();
  return (
    <section className="qs-cta">
      <div className="qs-cta__inner">
        <div className="qs-cta__left">
          <h2 className="qs-cta__title">
            Pronto para
            <br />
            começar?
          </h2>
          <p className="qs-cta__text">
            Entre em contato com nossa equipe e agende uma consulta.
          </p>
          <button
            className="contato__btn"
            onClick={() => navigate("/#contato")}
            style={{ cursor: "pointer", border: "1px solid rgba(245,243,237,.22)" }}
          >
            FALE CONOSCO ↗
          </button>
        </div>
        <div className="qs-cta__right">
          <span className="qs-cta__watermark" aria-hidden="true">ME</span>
        </div>
      </div>
    </section>
  );
}
