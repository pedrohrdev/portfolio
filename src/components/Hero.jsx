import Navbar from './Navbar';
import styles from '../styles/Hero.module.css';

function Hero() {

  return (

    <section className={styles.hero}>

      <Navbar />

      <div className={styles.heroTag} aria-label="Disponível para novos projetos">

        <span className={styles.heroTagDot} aria-hidden="true" />
        Disponível para novos projetos

      </div>

      <h1 className={styles.titulo}>

        Olá, eu me chamo{' '}
        <em className={styles.nome}>Pedro</em>

      </h1>

      <p className={styles.cargo} aria-label="Dev Fullstack">

        Dev Fullstack.

      </p>

    <div className={styles.heroBottom}>

        <p className={styles.heroDesc}>
          Construo{' '}
          <strong className={styles.experiencia}>sistemas rápidos escaláveis e bem projetados. </strong>
           Focando em performance e arquitetura limpa.{' '}
        </p>


        <div className={styles.heroScroll} aria-hidden="true">

          <div className={styles.heroScrollLine} />

          <span>Scroll</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;