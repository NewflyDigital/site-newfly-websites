import Menu from "../components/menu2";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Agencia.module.css";
import Link from "next/link";

export default function anewfly() {
  return (
    <>
      <Menu />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Não criamos só sites.
            <br />
            <span>Criamos máquinas de gerar clientes.</span>
          </h1>

          <p>
            Estratégia, design e tecnologia trabalhando juntos para transformar
            presença digital em resultado real.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerGrid}>
          <div className={styles.text}>
            <span className={styles.badge}>Quem somos</span>

            <h2>
              A <strong>Newfly</strong> nasceu com um objetivo claro:
              <br />
              <span>fazer o digital dar resultado.</span>
            </h2>

            <p>
              Não somos apenas designers ou desenvolvedores. Somos
              estrategistas. Estudamos o seu negócio, entendemos seu mercado e
              criamos soluções digitais que realmente geram clientes.
            </p>

            <p>
              Já ajudamos dezenas de empresas a se posicionarem melhor, venderem
              mais e crescerem no digital com consistência.
            </p>
          </div>

          <div className={styles.imageBox}>
            <img src="/static/images/site-projeto1.png" />
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2>Como transformamos sua ideia em resultado</h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span>01</span>
              <h4>Diagnóstico</h4>
              <p>
                Entendemos seu negócio, objetivos, público e o que você já tem
                hoje.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <h4>Estratégia</h4>
              <p>
                Definimos estrutura, páginas e o melhor caminho para gerar
                resultado.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <h4>Design</h4>
              <p>
                Criamos o layout e enviamos para sua aprovação antes de
                desenvolver.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>
              <h4>Desenvolvimento</h4>
              <p>
                Transformamos o design em um site rápido, moderno e responsivo.
              </p>
            </div>

            <div className={styles.step}>
              <span>05</span>
              <h4>Aprovação final</h4>
              <p>Ajustamos textos, detalhes e validamos tudo com você.</p>
            </div>

            <div className={styles.step}>
              <span>06</span>
              <h4>Publicação</h4>
              <p>
                Colocamos o site no ar e deixamos tudo funcionando
                perfeitamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <span className={styles.servicesBadge}>Digital além do site</span>

            <h2>
              Sua marca precisa de mais do que presença.
              <br />
              <span>Precisa gerar impacto.</span>
            </h2>

            <p>
              Criamos estratégias visuais e digitais que posicionam sua empresa,
              aumentam autoridade e transformam atenção em resultado.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* FILMES */}
            <div className={`${styles.serviceCard} ${styles.featuredCard}`}>
              <div
                className={styles.cardBackground}
                style={{
                  backgroundImage: "url('/static/images/site-projeto2.png')",
                }}
              />

              <div className={styles.cardOverlay}></div>

              <div className={styles.cardContent}>
                <span className={styles.cardTag}>NEWFLY FILMES</span>

                <h3>Produções cinematográficas para marcas</h3>

                <p>
                  Produzimos vídeos institucionais, campanhas, produtos e
                  conteúdos com qualidade de cinema, equipamentos profissionais,
                  drone, luz, direção e roteiro estratégico.
                </p>

                <small>
                  Vídeos pensados para posicionar sua empresa com autoridade e
                  gerar percepção de alto valor.
                </small>
              </div>
            </div>

            {/* FEED MENSAL */}
            <div className={styles.serviceCard}>
              <span className={styles.cardMini}>Posicionamento</span>

              <h4>Feed Mensal</h4>

              <p>
                Conteúdo recorrente para manter sua empresa ativa, atualizada e
                com presença profissional nas redes sociais.
              </p>

              <div className={styles.cardLine}></div>

              <small>
                Ideal para empresas que precisam fortalecer marca, autoridade e
                relacionamento com o público.
              </small>
            </div>

            {/* SOCIAL MEDIA PERFORMANCE */}
            <div className={styles.serviceCard}>
              <span className={styles.cardMini}>Performance</span>

              <h4>Social Media Estratégico</h4>

              <p>
                Estratégias focadas em gerar leads, alcance, tráfego e vendas
                através do Instagram e campanhas digitais.
              </p>

              <div className={styles.cardLine}></div>

              <small>
                Conteúdo pensado para conversão, crescimento e geração de
                resultados reais.
              </small>
            </div>
          </div>

          <Link href="/servicos" className={styles.cta}>
            Conhecer todos os serviços <span>→</span>
          </Link>
        </div>
      </section>

      <Rodape />
    </>
  );
}
