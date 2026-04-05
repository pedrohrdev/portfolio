import styles from '../styles/About.module.css';

function About() {

    return (

        <section className={styles.aboutContainer}>
            <div className={styles.aboutContent}>

                <h2>SOBRE MIM</h2>

                <h3 className={styles.aboutHeadline}>
                    Código que <span className={styles.highlight}>funciona.</span><br />
                    Design que impressiona.
                </h3>

                <p className={styles.aboutDescription}>
                    Desenvolvedor fullstack apaixonado por criar produtos
                    digitais que <strong>resolvem problemas reais</strong>. Trabalho desde o banco de
                    dados até a interface final.
                </p>

                <p className={styles.aboutDescription}>
                    Me preocupo com cada detalhe:
                    animações suaves, código limpo e experiências que as pessoas <strong>querem usar</strong>.
                </p>

                <div className={styles.aboutInfo}>
                    <div className={styles.infoXp}>
                        <span>1.5+</span>
                        <p>ANOS DE EXP.</p>
                    </div>
                    <div className={styles.infoProjects}>
                        <span>5</span>
                        <p>PROJETOS ENTREGUES</p>
                    </div>
                    <div className={styles.infoClients}>
                        <span>1</span>
                        <p>CLIENTE FELIZ</p>
                    </div>
                    <div className={styles.infoTerere}>
                        <span>∞</span>
                        <p>TÉRES TOMADOS</p>
                    </div>
                </div>

            </div>
        </section>

    )

}

export default About;