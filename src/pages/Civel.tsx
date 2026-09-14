export default function Trabalhista() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "150px 7vw",
        background: "var(--offwhite)",
        color: "var(--navy)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: ".14em",
          fontFamily: "var(--sans)",
        }}
      >
        ÁREAS DE ATUAÇÃO / DIREITO TRABALHISTA
      </p>

      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(70px, 9vw, 140px)",
          fontWeight: 400,
          lineHeight: ".9",
          marginTop: 30,
        }}
      >
        Direito
        <br />
        Trabalhista.
      </h1>

      <p
        style={{
          maxWidth: 650,
          fontSize: 18,
          lineHeight: 1.7,
          marginTop: 50,
        }}
      >
        Atuação especializada em Direito do Trabalho, com forte experiência
        no setor hospitalar e da saúde.
      </p>
    </section>
  );
}