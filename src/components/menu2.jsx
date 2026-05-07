import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  // SCROLL SUAVE
  function scrollToSection(id) {
    // se NÃO estiver na home
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }

    // se já estiver na home
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
    <div id={styles.menuheader} ref={menuRef} className={styles.header2}>
      <div className={styles.interno}>
        <Link href="/" className={styles.logo}>
          <img src="/static/images/Logo-Horizontal.png" alt="Logo" />
        </Link>

        {/* MENU DESKTOP (LP) */}
        <ul className={`${styles.menu} ${styles.navbar}`}>
          <li onClick={() => scrollToSection("inicio")}>Início</li>
          <li onClick={() => scrollToSection("como")}>Como funciona</li>
          <li onClick={() => scrollToSection("projetos")}>Sites</li>
          <Link href="/projetos">
            <li>Nossos Projetos</li>
          </Link>
          <li onClick={() => scrollToSection("preco")}>Preço</li>
          <Link href="/contato">
            <li>Contato</li>
          </Link>
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
          <div className={styles.mobileNav}>
            <button onClick={() => scrollToSection("inicio")}>Início</button>
            <button onClick={() => scrollToSection("projetos")}>Sites</button>
            <button onClick={() => scrollToSection("como")}>
              Como funciona
            </button>
            <button onClick={() => scrollToSection("preco")}>Preço</button>
            <button onClick={() => scrollToSection("contato")}>Contato</button>
          </div>

          <div className={styles.verticalDivider}></div>

          {/* DIREITA (PÁGINAS REAIS) */}
          <div className={styles.right}>
            <Link href="/projetos" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Criação de Sites</h4>
                <p>Sites institucionais, lojas e Landing Pages</p>
              </div>
            </Link>

            <Link href="/agencia" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Sobre a Agência</h4>
                <p>Conheça a Newfly e nosso processo de trabalho</p>
              </div>
            </Link>

            <Link href="/servicos" className={styles.menuItem}>
              <div className={styles.card}>
                <h4>Demais Serviços</h4>
                <p>Não só de site se vive no digital</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
