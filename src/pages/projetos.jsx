import Menu from "../components/menu2";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Projetos.module.css";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";

export default function Projetos() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.container2}>
          <h2 className={styles.title}>Projetos que geram resultado</h2>
          <p className={styles.subtitle}>
            Alguns dos sites que desenvolvemos focados em conversão e
            performance.
          </p>
        </div>
      </section>

      <section className={styles.sectionProjetos}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/allora" className={styles.card}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: "url(/static/images/cases/Allora.png)",
                }}
              />
              <div className={styles.overlay}>
                <span className={styles.category}>E-commerce</span>
                <h3>Allora Jóias</h3>
                <p>Loja virtual com foco em conversão</p>
              </div>
            </Link>

            <Link href="/hanisch" className={styles.card}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: "url(/static/images/cases/Hanisch.png)",
                }}
              />
              <div className={styles.overlay}>
                <span className={styles.category}>Institucional</span>
                <h3>Hanisch Medical</h3>
                <p>Presença digital profissional</p>
              </div>
            </Link>

            <Link href="/mercatto" className={styles.card}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: "url(/static/images/cases/Mercatto.png)",
                }}
              />
              <div className={styles.overlay}>
                <span className={styles.category}>E-commerce</span>
                <h3>Mercatto</h3>
                <p>Venda online estruturada</p>
              </div>
            </Link>

            <Link href="/rpp" className={styles.card}>
              <div
                className={styles.image}
                style={{ backgroundImage: "url(/static/images/cases/RPP.png)" }}
              />
              <div className={styles.overlay}>
                <span className={styles.category}>Institucional</span>
                <h3>RPP Construtora</h3>
                <p>Site moderno e confiável</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  );
}
