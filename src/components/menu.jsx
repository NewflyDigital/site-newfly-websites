import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);
  }, []);

  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);

  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={`${styles.interno}`}>
        <img
          src="/static/images/Logo-Horizontal-branco.png"
          alt="Logo horizontal"
          className={styles.logo}
        />

        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar} ${styles.a2} `}
        >
          <li>
            <Link legacyBehavior href="/">
              <a> Início</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/agencia">
              <a>Nossa Agência</a>
            </Link>
          </li>

          <li>
            <Link legacyBehavior href="/#servicos">
              <a>Serviços</a>
            </Link>
          </li>

          {/*
          <li>
            <Link legacyBehavior href="/cases">
              <a>Cases</a>
            </Link>
          </li>

          <li>
            <Link legacyBehavior href="/blog">
              <a>Blog</a>
            </Link>
          </li>
         */}
        </ul>
        <button className={styles.orcamento}>
          <Link legacyBehavior href="/contato">
            <a>Contato</a>
          </Link>
        </button>

        <ul className={`${styles.social_media}`}>
          <li>
            <Link legacyBehavior href="https://www.facebook.com">
              <a target="_blank">
                <img src="/facebook-branco.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://www.instagram.com/">
              <a target="_blank">
                <img src="/Instagram-branco.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://www.linkedin.com/company/">
              <a target="_blank">
                <img src="/LinkedIn-branco.png"></img>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
