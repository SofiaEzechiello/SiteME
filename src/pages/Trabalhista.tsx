import seloTrabalhista from "@/imports/SELO TRABALHISTA.png";

export default function Trabalhista() {
  return (
    <>
      {/* HERO */}
      <section className="trabalhista-hero">
        <div className="trabalhista-hero__inner">

          <span className="trabalhista-label">
            ÁREAS DE ATUAÇÃO / DIREITO TRABALHISTA
          </span>

          <div className="trabalhista-hero__grid">

            <h1 className="trabalhista-title">
              Direito
              <br />
              <em>Trabalhista.</em>
            </h1>

            <div className="trabalhista-hero__intro">
              <p>
                Atuação especializada em Direito do Trabalho, com forte
                experiência no setor hospitalar e da saúde.
              </p>

              <a href="#atuacao-trabalhista">
                CONHEÇA NOSSA ATUAÇÃO →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section
  className="trabalhista-apresentacao"
  id="atuacao-trabalhista"
>
  <div className="trabalhista-apresentacao__inner">

    {/* COLUNA ESQUERDA */}
    <div className="trabalhista-apresentacao__heading">
      <span>ATUAÇÃO TRABALHISTA</span>

      <h2>
        Técnica jurídica.
        <br />
        Atendimento <em>próximo.</em>
      </h2>

      <img
        src={seloTrabalhista}
        alt="Experiência e dedicação na defesa de quem trabalha"
        className="trabalhista-apresentacao__selo"
      />
    </div>


    {/* COLUNA DIREITA */}
    <div className="trabalhista-apresentacao__texto">

      <p>
        Somos especializados na área trabalhista, atuando de forma
        estratégica e humanizada na defesa dos direitos dos trabalhadores.
        Possuímos especial experiência em demandas envolvendo profissionais
        da área hospitalar e da saúde.
      </p>

      <p>
        Nossa atuação abrange ações relacionadas ao reconhecimento de vínculo
        de emprego, cobrança de verbas rescisórias, FGTS, horas extras,
        adicional noturno, adicional de insalubridade, jornada de trabalho,
        rescisão indireta, assédio moral, danos morais e demais direitos
        decorrentes da relação de trabalho.
      </p>

      <p>
        Nosso trabalho é pautado na análise cuidadosa da realidade de cada
        trabalhador, considerando documentos, escalas, pagamentos, condições
        de trabalho e demais elementos necessários para a construção de uma
        atuação jurídica sólida.
      </p>

      <p>
        Buscamos oferecer orientação clara, atendimento próximo e uma defesa
        comprometida com o reconhecimento e a efetiva proteção dos direitos
        trabalhistas.
      </p>

    </div>

  </div>
</section>
    </>
  );
}