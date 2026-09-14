import { useNavigate } from "react-router";
import justicaImg from "@/imports/Justica-cega.jpeg";
import rafaelaImg from "@/imports/rafaela.png__1_.png";
import alexandreImg from "@/imports/image__10_.png";
import soniaImg from "@/imports/image__9_.png";

export default function Home() {
  return (
    <>
      <Hero />
      <TeamIntro />
      <Areas />
      <Diferencial />
      <Justica />
      <QuemAtendemos />
      <Historia />
      <Testimonials />
      <Contato />
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero__label">
          <div className="hero__label-line" />
          <span className="hero__label-text">ASSESSORIA JURÍDICA PARA PESSOAS E EMPRESAS</span>
        </div>
        <div className="hero__grid">
          <h1 className="hero__headline">
            Defendemos direitos
            <br />
            com <em>estratégia,</em>
            <br />
            experiência e
            <br />
            dedicação.
          </h1>
          <div style={{ paddingBottom: 6 }}>
            <p className="hero__desc">
              Atuação estratégica e multidisciplinar para construir soluções jurídicas seguras, humanas e personalizadas.
            </p>
            <a href="#areas" className="hero__cta">
              CONHEÇA NOSSA ATUAÇÃO <span style={{ fontSize: 17 }}>→</span>
            </a>
          </div>
        </div>
        <div className="hero__rule" />
      </div>
    </section>
  );
}

/* ─── TEAM INTRO (near hero — no bios) ─── */
const TEAM = [
  { img: alexandreImg, name: "Alexandre Ezechiello",      role: "Sócio & Co-founder", anchor: "alexandre" },
  { img: soniaImg,     name: "Sonia M. M. E. Ezechiello", role: "Sócia & Founder",    anchor: "sonia" },
  { img: rafaelaImg,   name: "Rafaela M. Ezechiello",     role: "Advogada",            anchor: "rafaela" },
];

function TeamIntro() {
  const navigate = useNavigate();

  function goToProfile(anchor: string) {
    navigate(`/quem-somos#${anchor}`);
  }

  return (
    <section>
      <div className="team-intro">
         {/* BOTÃO NOVO */}
        <div className="team-intro__cta">
          <button
            onClick={() => navigate("/quem-somos#equipe")}
            className="team-intro__cta-button"
            
            >
              CONHEÇA NOSSO TIME
  <span></span>
</button>
        </div>
        <div className="team-intro__grid">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="team-intro__card"
              onClick={() => goToProfile(m.anchor)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && goToProfile(m.anchor)}
              aria-label={`Ver perfil de ${m.name}`}
            >
              <div className="team-intro__photo">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-intro__info">
                <p className="team-intro__name">{m.name}</p>
                <p className="team-intro__role">{m.role.toUpperCase()}</p>
                <span className="team-intro__cta-hint">Ver perfil →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ÁREAS ─── */
const AREAS = [
  {
    n: "01",
    title: "Direito Trabalhista",
    desc: "Atuação especializada em Direito do Trabalho, com forte experiência no setor hospitalar e da saúde, unindo estratégia, técnica e acompanhamento próximo em demandas consultivas e contenciosas.",
    path: "/areas-de-atuacao/trabalhista",
  },
  {
    n: "02",
    title: "Direito Previdenciário",
    desc: "Atuação em demandas previdenciárias, com orientação técnica e análise individualizada de cada situação.",
    path: "/areas-de-atuacao/previdenciario",
  },
  {
    n: "03",
    title: "Direito Cível",
    desc: "Atuação em demandas cíveis, com foco em soluções seguras, responsáveis e adequadas à realidade de cada cliente.",
    path: "/areas-de-atuacao/civil",
  },
  {
    n: "04",
    title: "Direito Empresarial",
    desc: "Atuação em Direito Empresarial, com destaque para habilitação e acompanhamento de créditos em processos de recuperação judicial, além de assessoria estratégica a empresas e credores.",
    path: "/areas-de-atuacao/empresarial",
  },
];

function Areas() {
  const navigate = useNavigate();

  return (
    <section id="areas" className="areas">
      <div className="areas__inner">
        <div className="areas__header">
          <span className="areas__label">ÁREAS DE ATUAÇÃO</span>
          <h2 className="areas__title">
            Soluções jurídicas.<br />
            <em>Estamos aqui</em> para ajudar.
          </h2>
        </div>
        {AREAS.map((a) => (
          <div
            key={a.n}
            className="area-row"
            onClick={() => navigate(a.path)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(a.path);
            }}
          >
            <span className="area-row__num">{a.n}</span>
            <h3 className="area-row__title">{a.title}</h3>
            <p className="area-row__desc">{a.desc}</p>
            <span className="area-row__arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DIFERENCIAL ─── */
const DIFERENCIAIS = [
  { n: "01", title: "ATUAÇÃO ESTRATÉGICA",    text: "Cada situação é analisada individualmente considerando fatos, documentos, riscos e caminhos jurídicos." },
  { n: "02", title: "ATENDIMENTO PRÓXIMO",    text: "Comunicação clara e acompanhamento próximo durante toda a demanda." },
  { n: "03", title: "VISÃO MULTIDISCIPLINAR", text: "Integração entre diferentes áreas do direito para uma compreensão mais ampla dos casos." },
];

function Diferencial() {
  return (
    <section id="diferencial" className="diferencial">
      <div className="diferencial__inner">
        <div>
          <span className="diferencial__label">NOSSO DIFERENCIAL</span>
          <h2 className="diferencial__title">
            Advocacia<br />
            <em>estratégica,</em><br />
            próxima de você.
          </h2>
        </div>
        <div className="diferencial__divider" />
        <div className="diferencial__items">
          <div className="diferencial__line" />
          {DIFERENCIAIS.map((d) => (
            <div key={d.n} className="diferencial__item">
              <div className="diferencial__dot" />
              <span className="diferencial__item-num">{d.n}</span>
              <h3 className="diferencial__item-title">{d.title}</h3>
              <p className="diferencial__item-text">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── JUSTIÇA ─── */
function Justica() {
  return (
    <section className="justica">
      <img src={justicaImg} alt="A Justiça — escultura de Alfredo Ceschiatti, Brasília" className="justica__img" />
      <div className="justica__overlay" />
      <div className="justica__content">
        <div>
          <span className="justica__quote-mark">"</span>
          <h2 className="justica__text">
            Experiência jurídica,
            <br />
            <em>estratégia</em> e dedicação
            <br />
            em cada caso.
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ─── QUEM ATENDEMOS ─── */
function QuemAtendemos() {
  return (
    <section className="quem">
      <div className="quem__inner">
        <h2 className="quem__watermark" aria-hidden="true">QUEM<br />ATENDEMOS</h2>
        <div className="quem__cols">
          <div>
            <span className="quem__num">01</span>
            <h3 className="quem__col-title">Pessoas</h3>
            <p className="quem__col-text">Atendimento próximo e personalizado. Orientação jurídica clara em todas as etapas, com compromisso de transparência ao longo de todo o processo.</p>
            <a href="#contato" className="quem__link">SAIBA MAIS <span>→</span></a>
          </div>
          <div className="quem__divider" />
          <div>
            <span className="quem__num">02</span>
            <h3 className="quem__col-title">Empresas</h3>
            <p className="quem__col-text">Assessoria preventiva, consultiva e contenciosa. Soluções jurídicas integradas para proteger e impulsionar o crescimento do seu negócio.</p>
            <a href="#contato" className="quem__link">SAIBA MAIS <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HISTÓRIA ─── */
const TIMELINE = [
  { year: "2008", label: "MARCO INSTITUCIONAL",                     text: "[CONTEÚDO REAL A INSERIR]" },
  { year: "2011", label: "FUNDAÇÃO DO ESCRITÓRIO",                   text: "[CONTEÚDO REAL A INSERIR]" },
  { year: "2014", label: "CONSOLIDAÇÃO NO CONTENCIOSO TRABALHISTA",  text: "[CONTEÚDO REAL A INSERIR]" },
  { year: "2018", label: "ESTRUTURAÇÃO SOCIETÁRIA E CRESCIMENTO",    text: "[CONTEÚDO REAL A INSERIR]" },
  { year: "2020", label: "EXPANSÃO TERRITORIAL",                     text: "[CONTEÚDO REAL A INSERIR]" },
  { year: "2026", label: "NOVO ESPAÇO EM SÃO PAULO",                 text: "[CONTEÚDO REAL A INSERIR]" },
];

function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="historia__inner">
        <div className="historia__header">
          <span className="historia__label">NOSSA HISTÓRIA</span>
          <h2 className="historia__title">
            Uma trajetória de<br />
            <em>compromisso</em> e evolução.
          </h2>
        </div>
        {TIMELINE.map((t) => (
          <div key={t.year} className="timeline-row">
            <div className="timeline-year">{t.year}</div>
            <div>
              <h3 className="timeline-label">{t.label}</h3>
              <p className="timeline-text area-placeholder">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DEPOIMENTOS ─── */
const TESTIMONIALS = [
  { text: "[DEPOIMENTO REAL DO GOOGLE]", author: "[NOME REAL]", ctx: "[ÁREA]" },
  { text: "[DEPOIMENTO REAL DO GOOGLE]", author: "[NOME REAL]", ctx: "[ÁREA]" },
  { text: "[DEPOIMENTO REAL DO GOOGLE]", author: "[NOME REAL]", ctx: "[ÁREA]" },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <div>
            <span className="testimonials__label">DEPOIMENTOS</span>
            <h2 className="testimonials__title">O que nossos clientes dizem.</h2>
          </div>
          <div className="stars-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <span className="stars-label">AVALIADOS PELO GOOGLE</span>
          </div>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial">
              <span className="testimonial__quote">"</span>
              <p className="testimonial__text area-placeholder">{t.text}</p>
              <span className="testimonial__author area-placeholder">{t.author}</span>
              <span className="testimonial__context area-placeholder">{t.ctx}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTATO ─── */
function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="contato__left">
        <span className="contato__label">CONTATO</span>
        <h2 className="contato__title">
          Navegue pelos desafios<br />
          jurídicos com <em>segurança.</em>
        </h2>
        <p className="contato__text">
          Nossa equipe está pronta para atendê-lo com atenção, clareza e comprometimento. Entre em contato e agende uma consulta.
        </p>
        <a href="mailto:[CONTEÚDO REAL A INSERIR]" className="contato__btn">
          ENTRE EM CONTATO ↗
        </a>
        <div className="contato__details">
          {[
            { key: "E-MAIL",   val: "[CONTEÚDO REAL A INSERIR]" },
            { key: "TELEFONE", val: "[CONTEÚDO REAL A INSERIR]" },
            { key: "ENDEREÇO", val: "[CONTEÚDO REAL A INSERIR]" },
          ].map((d) => (
            <div key={d.key}>
              <span className="contato__detail-key">{d.key}</span>
              <span className="contato__detail-val area-placeholder">{d.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="contato__right">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=1100&fit=crop&auto=format"
          alt="Escritório — Marques Ezechiello Advogados Associados"
        />
        <div className="contato__right-overlay" />
      </div>
    </section>
  );
}
