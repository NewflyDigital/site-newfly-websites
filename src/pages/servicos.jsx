import Menu from "../components/menu2";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";
import Link from "next/link";

export default function Servicos() {
  return (
    <>
      <Menu />
      <section className={styles.hero}>
        {/* vídeo fundo */}
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          {/* VIDEO HERO PRINCIPAL
        usar takes cinematográficos:
        drone + close de câmera + gravação + cenas clientes
    */}
          <source src="/static/video/Video-fundo.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroMini}>
            Estratégia • Produção • Performance
          </span>

          <h1>
            Transformamos empresas em
            <br />
            <span>marcas digitais fortes.</span>
          </h1>

          <p>
            Sites, vídeos, campanhas e estratégias digitais pensadas para gerar
            posicionamento, autoridade e resultado real.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/contato" className={styles.primaryBtn}>
              Solicitar orçamento
            </Link>

            <Link href="#servicos" className={styles.secondaryBtn}>
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= */}

      <section id="servicos" className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.serviceBlock}>
            {/* TEXTO */}
            <div className={styles.serviceText}>
              <span className={styles.serviceBadge}>Criação de Sites</span>

              <h2>
                Sites criados para gerar
                <span> percepção e conversão.</span>
              </h2>

              <p>
                Desenvolvemos websites modernos, rápidos e estratégicos,
                pensados para transformar visitantes em oportunidades reais.
              </p>

              <ul>
                <li>Sites institucionais</li>
                <li>E-commerces</li>
                <li>Landing pages</li>
                <li>UX/UI moderno</li>
                <li>Alta performance</li>
              </ul>
            </div>

            {/* VISUAL */}
            <div className={styles.serviceMedia}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.mediaVideo}
              >
                {/* vídeo mostrando scroll de sites / layouts */}
                <source src="/static/video/Video-fundo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* ========================= */}

          <div className={`${styles.serviceBlock} ${styles.reverse}`}>
            <div className={styles.serviceText}>
              <span className={styles.serviceBadge}>Newfly Filmes</span>

              <h2>
                Produções com qualidade
                <span> cinematográfica.</span>
              </h2>

              <p>
                Criamos vídeos institucionais, campanhas, produtos e conteúdos
                audiovisuais com equipamentos profissionais e direção criativa.
              </p>

              <div className={styles.equipments}>
                <span>🎥 Cinema Camera</span>
                <span>🚁 Drone</span>
                <span>💡 Iluminação</span>
                <span>🎬 Direção</span>
              </div>
            </div>

            <div className={styles.serviceMedia}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.mediaVideo}
              >
                {/* VIDEO:
              bastidores + drone + gravações + takes cinematográficos
          */}
                <source src="/static/video/Video-fundo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* ========================= */}

          <div className={styles.compareSection}>
            <div className={styles.compareCard}>
              <span className={styles.compareTag}>Posicionamento</span>

              <h3>Feed Mensal</h3>

              <p>
                Conteúdo pensado para manter sua empresa ativa, profissional e
                presente nas redes sociais.
              </p>

              <small>
                Ideal para marcas que precisam fortalecer autoridade e presença.
              </small>
            </div>

            <div className={styles.compareCard}>
              <span className={styles.compareTag}>Performance</span>

              <h3>Social Media Estratégico</h3>

              <p>
                Estratégias focadas em gerar leads, alcance, tráfego e vendas.
              </p>

              <small>
                Para empresas que querem crescer e gerar demanda constante.
              </small>
            </div>
          </div>

          {/* ========================= */}

          <section className={styles.ecosystem}>
            <h2>Seu digital funcionando como um ecossistema</h2>

            <div className={styles.flow}>
              <div className={styles.flowCard}>Website</div>
              <div className={styles.flowLine}></div>

              <div className={styles.flowCard}>Vídeos</div>
              <div className={styles.flowLine}></div>

              <div className={styles.flowCard}>Social</div>
              <div className={styles.flowLine}></div>

              <div className={styles.flowCard}>Tráfego</div>
              <div className={styles.flowLine}></div>

              <div className={styles.flowCard}>Conversão</div>
            </div>
          </section>

          {/* ========================= */}

          <section className={styles.finalCta}>
            <video autoPlay muted loop playsInline className={styles.ctaVideo}>
              {/* VIDEO:
            drone cidade + empresa + gravações premium
        */}
              <source src="/static/video/Video-fundo.mp4" type="video/mp4" />
            </video>

            <div className={styles.ctaOverlay}></div>

            <div className={styles.finalContent}>
              <h2>
                Sua empresa já parece do tamanho
                <span> que ela quer ser?</span>
              </h2>

              <p>
                Estratégia visual, posicionamento e tecnologia trabalhando
                juntos.
              </p>

              <Link href="/contato" className={styles.primaryBtn}>
                Começar projeto
              </Link>
            </div>
          </section>
        </div>
      </section>
      <Rodape />
    </>
  );
}
