export default function Empresarial() {
  return (
    <>
      {/* HERO */}
      <section className="trabalhista-hero">
        <div className="trabalhista-hero__inner">

          <span className="trabalhista-label">
            ÁREAS DE ATUAÇÃO / DIREITO EMPRESARIAL
          </span>

          <div className="trabalhista-hero__grid">

            <h1 className="trabalhista-title">
              Direito
              <br />
              <em>Empresarial.</em>
            </h1>

            <div className="trabalhista-hero__intro">
              <p>
                Atuação estratégica na defesa de empresas e credores,
                com especial experiência em habilitação de créditos
                e acompanhamento de processos de recuperação judicial
                e falência.
              </p>

              <a href="#atuacao-empresarial">
                CONHEÇA NOSSA ATUAÇÃO →
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* APRESENTAÇÃO */}
      <section
        className="trabalhista-apresentacao"
        id="atuacao-empresarial"
      >
        <div className="trabalhista-apresentacao__inner">

          {/* COLUNA ESQUERDA */}
          <div className="trabalhista-apresentacao__heading">

            <span>
              ATUAÇÃO EMPRESARIAL
            </span>

            <h2>
              Estratégia jurídica.
              <br />
              Proteção de <em>interesses.</em>
            </h2>

          </div>


          {/* COLUNA DIREITA */}
          <div className="trabalhista-apresentacao__texto">

            <p>
              Atuamos na área empresarial prestando assessoria e defesa
              dos interesses de empresas, credores e pessoas envolvidas
              em relações comerciais e patrimoniais.
            </p>

            <p>
              Possuímos especial atuação em habilitações e divergências
              de crédito, bem como no acompanhamento de credores em
              processos de recuperação judicial e falência, buscando
              o correto reconhecimento dos valores devidos, a adequada
              classificação do crédito e a proteção dos interesses do
              credor ao longo do procedimento.
            </p>

            <p>
              Nossa atuação também compreende recuperação de créditos,
              cobranças, contratos empresariais, responsabilidade
              patrimonial e outras questões relacionadas à atividade
              empresarial.
            </p>

            <p>
              Cada demanda é conduzida a partir da análise cuidadosa
              da documentação, dos contratos, dos valores envolvidos
              e dos riscos jurídicos, buscando oferecer uma atuação
              técnica, segura e estratégica.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}