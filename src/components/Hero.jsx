import Navbar from './Navbar';
import styles from '../styles/Hero.module.css'

function Hero() {
    return (
        <div className={styles.heroContainer}>
            <section className={styles.heroContent}>

                <Navbar />

                <div className={styles.heroTag}>Disponível para novos projetos</div>

                <div className={styles.titleHeroContainer}>


                    <h1 className={styles.titulo}>
                        Olá, eu me <br /> chamo  <span className={styles.nome}>Pedro</span> 
                    </h1>

                    <h2 className={styles.cargo}>Dev Fullstack.</h2>

                </div>

                <div className={styles.heroBottom}>

                    <p className={styles.heroDesc}>
                        Construo  <span className={styles.experiencia}>experiências digitais </span>
                        que unem design e código. Focado em criar sistemas escaláveis
                        e de alta performance, com uma abordagem centrada no usuário.
                    </p>

                    <div className={styles.heroScroll}>
                        <div className={styles.heroScrollLine} />
                        <span>Scroll</span>
                    </div>

                </div>

            </section>

        </div>

    );

}

export default Hero;