import styles from '../styles/Hero.module.css'

function Hero() {
    return (
        <div className={styles.heroContainer}>
            <section className={styles.heroContent}>

                <p className={styles.disponivel}>
                <span aria-hidden="true">●</span> Disponível para novos projetos
                </p>

                <h1 className={styles.titulo}>
                    Olá, eu me chamo  <span className={styles.nome}>Pedro</span> 
                </h1>

                <h2 className={styles.cargo}>Dev Fullstack.</h2>

                <p className={styles.descricao}>
                    Construo  <span className={styles.experiencia}>experiências digitais</span>
                    que unem design e código. Focado em criar sistemas escaláveis
                    e de alta performance, com uma abordagem centrada no usuário.
                </p>

                <div className="carouselTechList">
                    <ul className={styles.techList}>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

            </section>

        </div>

    );

}

export default Hero;