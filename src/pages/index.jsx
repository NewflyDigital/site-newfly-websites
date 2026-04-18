import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Index.module.css";
import "../styles/Index.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Home() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButton = () => {
    setVideoPlaying(true);
  };

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicar os filhos automaticamente
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }, []);

  React.useEffect(() => {
    const elements = document.querySelectorAll(
      `.${styles.reveal}, .${styles.revealLeft}`,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /*projetos*/
  const projects = [
    "/static/images/site-projeto1.png",
    "/static/images/site-projeto2.png",
    "/static/images/site-projeto1.png",
    "/static/images/site-projeto2.png",
    "/static/images/site-projeto1.png",
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <section className={styles.backgroundbanner}>
        <div className={styles.internobanner}>
          <div className={styles.boxbanner}>
            <h2>
              A sua <spam style={{ color: "#bff747" }}>agência</spam>
            </h2>
            <h4>
              Somos{" "}
              <spam style={{ color: "#bff747", fontWeight: "300" }}>
                a agência digital que vai acelerar
              </spam>{" "}
              sua transformação digital.
            </h4>

            <Link legacyBehavior href="/">
              <a className={styles.botao} target="_blank">
                Crie seu site agora!
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="quemSomos" className={styles.section}>
        <div className={styles.interno}>
          <div className={`${styles.box1} ${styles.reveal} ${styles.delay2} `}>
            <span className={styles.badge}>Agência 360º</span>

            <h2>
              Criamos experiências digitais que <span>geram clientes</span>
            </h2>

            <p>
              Não fazemos apenas sites. Desenvolvemos estratégias completas para
              transformar visitantes em clientes reais, aumentando sua presença
              e resultados no digital.
            </p>

            <div className={styles.cta}>
              <button className={styles.primary}>Quero meu site agora</button>

              <button className={styles.secondary}>Ver projetos</button>
            </div>
          </div>

          <div className={`${styles.box2} ${styles.imageBox} ${styles.reveal}`}>
            <div className={`${styles.screen}  ${styles.reveal}`}>
              <img
                src="/static/images/site2.png"
                className={styles.scrollImage}
                alt="Preview do site"
              />
            </div>
            <div className={`${styles.screen}  ${styles.reveal}`}>
              <img
                src="/static/images/site1.png"
                className={styles.scrollImage2}
                alt="Preview do site"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className={styles.sectionProblema}>
        <div className={styles.interno}>
          {/* ESQUERDA */}
          <div className={styles.box1}>
            <span className={styles.badge}>Problema</span>

            <h2>
              Seu site pode estar <span>te fazendo perder clientes</span>
            </h2>

            <div className={styles.listaProblemas}>
              <div className={`${styles.item} ${styles.revealLeft}`}>
                ❌ Não aparece no Google
              </div>

              <div
                className={`${styles.item} ${styles.revealLeft} ${styles.delay1}`}
              >
                ❌ Visual ultrapassado e sem credibilidade
              </div>

              <div
                className={`${styles.item} ${styles.revealLeft} ${styles.delay2}`}
              >
                ❌ Não gera contatos ou vendas
              </div>

              <div
                className={`${styles.item} ${styles.revealLeft} ${styles.delay3}`}
              >
                ❌ Lento e ruim no celular
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className={`${styles.box2} ${styles.imageBox} ${styles.reveal}`}>
            <div className={styles.imageWrapper}>
              <img src="/static/images/site-ruim.png" alt="Site ruim" />
            </div>
          </div>
        </div>
      </section>

      <section id="solucao" className={styles.sectionSolucao}>
        <div className={styles.internoSolucao}>
          <div className={`${styles.box1} ${styles.center}`}>
            <span className={`${styles.badge} ${styles.reveal}`}>Solução</span>

            <h2 className={`${styles.reveal} ${styles.delay1}`}>
              Criamos sites pensados para <span>gerar resultados reais</span>
            </h2>

            <p className={`${styles.reveal} ${styles.delay2}`}>
              Não é só estética. Cada detalhe é projetado para atrair, prender
              atenção e converter visitantes em clientes.
            </p>
          </div>

          {/* CARDS */}
          <div className={styles.box2}>
            <div className={`${styles.card} ${styles.reveal} ${styles.delay1}`}>
              ⚡<h4>Sites rápidos</h4>
              <p>Carregamento otimizado para não perder visitantes</p>
            </div>

            <div className={`${styles.card} ${styles.reveal} ${styles.delay2}`}>
              🎨
              <h4>Design profissional</h4>
              <p>Visual moderno que gera confiança instantânea</p>
            </div>

            <div className={`${styles.card} ${styles.reveal} ${styles.delay3}`}>
              📈
              <h4>Conversão</h4>
              <p>Estrutura pensada para gerar contatos e vendas</p>
            </div>

            <div className={`${styles.card} ${styles.reveal} ${styles.delay3}`}>
              🔍
              <h4>SEO básico</h4>
              <p>Seu site preparado para aparecer no Google</p>
            </div>
          </div>

          {/* CTA */}
          <div className={`${styles.ctaBox} ${styles.reveal} ${styles.delay3}`}>
            <button className={styles.primaryBig}>
              Quero um site que gera clientes
            </button>
          </div>
        </div>
      </section>

      <section id="projetos" className={styles.sectionProjetos}>
        <div className={styles.internoProjetos}>
          <span className={styles.badge}>Projetos</span>

          <h2>
            Alguns sites que <span>já criamos</span>
          </h2>

          <div className={styles.carousel}>
            <div
              className={styles.track2}
              style={{
                transform: `translateY(-${activeIndex * 300}px)`,
                transition: "transform 0.6s ease",
              }}
            >
              {projects.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.item2} ${
                    i === activeIndex ? styles.active : ""
                  }`}
                >
                  <img src={img} />
                </div>
              ))}
            </div>
          </div>

          <p className={styles.sub}>
            Sites modernos, rápidos e focados em resultado.
          </p>

          <button className={styles.primaryBig}>Quero um site assim</button>
        </div>
      </section>

      <Rodape />
      <Whats />
    </>
  );
}
