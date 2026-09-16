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
        oab={"OAB/RJ 143.732\nOAB/RS 95.616 A"}
        bio="Especialista em Direito do Trabalho e formado em Administração pela UFRJ, possui mais de 20 anos de experiência na advocacia, tendo atuado como Procurador Jurídico de uma das maiores emprsas de energia no Brasil. Desenvolveu sólida trajetória na representação de clientes em demandas trabalhistas e cíveis, com destaque para profissionais da área hospitalar e da saúde, além de atuação consultiva em Direito Previdenciário. É associado ao IARGS e ao IBDP."
        formation="Direito | Administração (UFRJ) | Especialização em Direito Previdenciário (PUCRS) | Mestrando em Direito da Empresa e dos Negócios (Unisinos)"
        areas={["Trabalhista, Previdenciário, Cível e Empresarial"]}
        flipped={false}
      />
      <ProfileSection
        id="sonia"
        img={soniaImg}
        name="Sonia M. M. E. Ezechiello"
        role="Sócia & Founder"
        oab={"OAB/RJ 158.933\nOAB/RS 119.119 A"}
        bio="Fundadora do escritório e sócia-administradora, é formada em Direito, com atuação nas áreas Trabalhista e Cível. Possui experiência na condução de demandas judiciais, atendimento estratégico a clientes e organização administrativa de escritórios de advocacia. Atua na coordenação das atividades jurídicas e administrativas, aliando técnica jurídica, gestão financeira e eficiência na condução do negócio."
        formation="Direito | Pós-graduação Tax Law (PUCRS)"
        areas={["Trabalhista, Cível e Tributária"]}
        flipped={true}
      />
      <ProfileSection
        id="rafaela"
        img={rafaelaImg}
        name="Rafaela M. Ezechiello"
        role="Advogada"
        oab="OAB/RS 138.525"
        bio="Formada em Direito pela PUC-RS e pós-graduanda em Processo e Direito do Trabalho, possui experiência em responsabilidade civil e Direito Internacional Privado do Trabalho. Atua na representação de clientes e na consultoria em Direito Trabalhista, além de integrar a gestão estratégica do escritório, contribuindo para a organização administrativa, o planejamento e o desenvolvimento institucional."
        formation="Direito (PUCRS) | Pós-graduação em Processo e Direito do Trabalho (PUCRS)"
        areas={["Trabalhista, Cível e Internacional Privado"]}
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
            <p className="qs-apresentacao__text area-placeholder">O Marques Ezechiello Advogados Associados atua com uma advocacia técnica, estratégica e próxima, oferecendo soluções jurídicas construídas a partir da realidade de cada cliente.</p>
            <p className="qs-apresentacao__text area-placeholder" style={{ marginTop: 20 }}>Com atuação nas áreas Trabalhista, Previdenciária, Cível e Empresarial, o escritório reúne experiência, atendimento personalizado e compromisso com a defesa responsável de pessoas e empresas.</p>

            {/* Stats / highlights */}
            <div className="qs-stats">
              {[
                { val: "2011", label: "DE FUNDAÇÃO" },
                { val: "15",  label: "ANOS DE ATUAÇÃO" },
                { val: "4",  label: "ÁREAS DE EXPERIÊNCIA" },
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
