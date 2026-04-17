import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // SCROLL SUAVE
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  const menuRef = React.useRef(null);
  // HEADER TRANSPARENTE -> SCROLL
  React.useEffect(() => {
    if (!menuRef.current) return;

    const menuElement = menuRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        menuElement.classList.add(styles["menu-alternative"]);
      } else {
        menuElement.classList.remove(styles["menu-alternative"]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={styles.menuheader} ref={menuRef} className={styles.header}>
      <div className={styles.interno}>
        <Link href="/" className={styles.logo}>
          <img src="/static/images/Logo-Horizontal.png" alt="Logo" />
        </Link>

        {/* MENU DESKTOP (LP) */}
        <ul className={`${styles.menu} ${styles.navbar}`}>
          <li onClick={() => scrollToSection("inicio")}>Início</li>
          <li onClick={() => scrollToSection("sites")}>Sites</li>
          <li onClick={() => scrollToSection("como")}>Como funciona</li>
          <li onClick={() => scrollToSection("projetos")}>Projetos</li>
          <li onClick={() => scrollToSection("preco")}>Preço</li>
          <li onClick={() => scrollToSection("contato")}>Contato</li>
        </ul>

        {/* BOTÃO HAMBURGER */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* OVERLAY MENU */}
      <div className={`${styles.overlayMenu} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.overlayContent}>
          {/* ESQUERDA */}
          <div className={styles.left}>
            <h2>
              Criamos sites que <i>geram clientes</i>
            </h2>

            <div className={styles.divider}></div>

            <div className={styles.buttons}>
              <button
                className={styles.orcamento}
                onClick={() => scrollToSection("contato")}
              >
                Solicitar orçamento
              </button>

              <button
                className={styles.contato}
                onClick={() => scrollToSection("projetos")}
              >
                Ver projetos
              </button>
            </div>
          </div>

          <div className={styles.verticalDivider}></div>

          {/* DIREITA (PÁGINAS REAIS) */}
          <div className={styles.right}>
            <Link href="/sites" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Criação de Sites</h4>
                <p>Sites institucionais profissionais</p>
              </div>
            </Link>

            <Link href="/landing-pages" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Landing Pages</h4>
                <p>Páginas focadas em conversão</p>
              </div>
            </Link>

            <Link href="/ecommerce" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Lojas Virtuais</h4>
                <p>Venda online com estrutura completa</p>
              </div>
            </Link>

            <Link href="/sobre" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Sobre a Agência</h4>
                <p>Conheça a Newfly</p>
              </div>
            </Link>

            <Link href="/blog" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Blog</h4>
                <p>Conteúdo sobre marketing e sites</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
