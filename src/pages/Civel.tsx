export default function Civel() {
  return (
    <>
      {/* HERO */}
      <section className="trabalhista-hero">
        <div className="trabalhista-hero__inner">

          <span className="trabalhista-label">
            ÁREAS DE ATUAÇÃO / DIREITO CÍVEL
          </span>

          <div className="trabalhista-hero__grid">

            <h1 className="trabalhista-title">
              Direito
              <br />
              <em>Cível.</em>
            </h1>

            <div className="trabalhista-hero__intro">
              <p>
                Atuação em demandas cíveis, judiciais e extrajudiciais,
                com análise estratégica e soluções adequadas às
                particularidades de cada cliente.
              </p>

              <a href="#atuacao-civel">
                CONHEÇA NOSSA ATUAÇÃO →
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* APRESENTAÇÃO */}
      <section
        className="trabalhista-apresentacao"
        id="atuacao-civel"
      >
        <div className="trabalhista-apresentacao__inner">

          {/* COLUNA ESQUERDA */}
          <div className="trabalhista-apresentacao__heading">

            <span>
              ATUAÇÃO CÍVEL
            </span>

            <h2>
              Análise cuidadosa.
              <br />
              Soluções <em>estratégicas.</em>
            </h2>

          </div>


          {/* COLUNA DIREITA */}
          <div className="trabalhista-apresentacao__texto">

            <p>
              Atuamos na área cível de forma técnica e estratégica,
              buscando soluções adequadas para cada situação, tanto
              na esfera judicial quanto extrajudicial.
            </p>

            <p>
              Nossa atuação compreende demandas envolvendo relações
              de consumo, responsabilidade civil, cobranças,
              indenizações por danos morais e materiais, conflitos
              contratuais, questões patrimoniais e demais controvérsias
              decorrentes das relações civis.
            </p>

            <p>
              Também prestamos assessoria e defesa em procedimentos
              ético-disciplinares e processos administrativos
              profissionais, com atenção à análise dos fatos,
              documentos e normas aplicáveis a cada caso.
            </p>

            <p>
              Buscamos oferecer atendimento próximo, claro e responsável,
              orientando o cliente desde a análise inicial da situação
              até a definição da estratégia mais adequada para a
              proteção de seus direitos e interesses.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}