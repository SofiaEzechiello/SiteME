export default function Previdenciario() {
  return (
    <>
      {/* HERO */}
      <section className="trabalhista-hero">
        <div className="trabalhista-hero__inner">

          <span className="trabalhista-label">
            ÁREAS DE ATUAÇÃO / DIREITO PREVIDENCIÁRIO
          </span>

          <div className="trabalhista-hero__grid">

            <h1 className="trabalhista-title">
              Direito
              <br />
              <em>Previdenciário.</em>
            </h1>

            <div className="trabalhista-hero__intro">
              <p>
                Atuação especializada em Direito Previdenciário, com
                orientação técnica, análise individualizada e acompanhamento
                próximo em demandas administrativas e judiciais perante o INSS.
              </p>

              <a href="#atuacao-previdenciaria">
                CONHEÇA NOSSA ATUAÇÃO →
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* APRESENTAÇÃO */}
      <section
        className="trabalhista-apresentacao"
        id="atuacao-previdenciaria"
      >
        <div className="trabalhista-apresentacao__inner">

          {/* COLUNA ESQUERDA */}
          <div className="trabalhista-apresentacao__heading">

            <span>
              ATUAÇÃO PREVIDENCIÁRIA
            </span>

            <h2>
              Orientação técnica.
              <br />
              Proteção dos seus <em>direitos.</em>
            </h2>

          </div>


          {/* COLUNA DIREITA */}
          <div className="trabalhista-apresentacao__texto">

            <p>
              Nossa atuação abrange aposentadorias, pensão por morte,
              benefícios por incapacidade temporária ou permanente,
              auxílio-acidente, salário-maternidade, BPC/LOAS, revisões
              de benefícios, restabelecimentos e demais demandas
              relacionadas à Previdência Social.
            </p>

            <p>
              Cada caso é analisado de forma cuidadosa, considerando
              a documentação disponível, o histórico contributivo e
              as particularidades da situação do segurado, buscando
              identificar a estratégia mais adequada para a concessão,
              revisão ou restabelecimento do benefício.
            </p>

            <p>
              Nosso objetivo é oferecer orientação clara, acompanhamento
              próximo e uma atuação comprometida com a efetiva proteção
              dos direitos previdenciários.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}