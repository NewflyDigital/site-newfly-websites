import * as React from "react";
import styles from "../styles/Rodape.module.css";
import Link from "next/link";

function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COLUNA 1 */}
        <div className={styles.col}>
          <img src="/static/images/logo-Preta.png" className={styles.logo} />

          <p className={styles.description}>
            Criamos sites modernos que transformam visitantes em clientes.
          </p>
        </div>

        {/* COLUNA 2 (MENU) */}
        <div className={styles.col}>
          <h4>Navegação</h4>

          <ul className={styles.links}>
            <li onClick={() => scrollToId("quemSomos")}>Sobre</li>
            <li onClick={() => scrollToId("problema")}>Problema</li>
            <li onClick={() => scrollToId("solucao")}>Solução</li>
            <li onClick={() => scrollToId("projetos")}>Projetos</li>
            <li onClick={() => scrollToId("precos")}>Preços</li>
            <li onClick={() => scrollToId("faq")}>FAQ</li>
          </ul>
        </div>

        {/* COLUNA 3 (CONTATO) */}
        <div className={styles.col}>
          <h4>Contato</h4>

          <p>contato@newfly.com.br</p>
          <p>+55 54 99999-9999</p>

          <div className={styles.social}>
            <a href="#" target="_blank">
              <img src="/instagram-preto.png" />
            </a>
            <a href="#" target="_blank">
              <img src="/facebook-preto.png" />
            </a>
            <a href="#" target="_blank">
              <img src="/linkedin-preto.png" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className={styles.bottom}>
        <p>© 2026 Newfly — Todos os direitos reservados</p>

        <button className={styles.cta} onClick={() => scrollToId("contato")}>
          Criar meu site 🚀
        </button>
      </div>
    </footer>
  );
}

/* SCROLL SUAVE */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default Rodape;
