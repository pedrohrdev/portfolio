import styles from '../styles/About.module.css';

function About() {

    return (

        <section className={styles.aboutContainer}>

            <div className={styles.aboutContent}>

                <h2>SOBRE MIM</h2>

                <p className={styles.aboutDescription}>
                    Opa! Eu sou o Pedro, tenho 16 anos, sou um dev full-stack
                    focado por criar soluções web solucionadoras e eficientes. 
                    Com experiência em tecnologias como Node.js, Typescript, React e Next.js,
                    estou sempre buscando novos desafios para expandir meu conhecimento
                    e contribuir para projetos significativos.
                </p>


                <div className={styles.aboutInfo}>

                    <div className={styles.infoXp}>
                        <span>1+</span> <p>ANOS DE EXP.</p>
                    </div>

                    <div className={styles.infoProjects}>
                        <span>+</span> <p>PROJETOS</p>
                    </div>

                    <div className={styles.infoClients}>
                        <span>1</span> <p>CLIENTE FELIZ</p>
                    </div>

                    <div className={styles.infoTerere}>
                        <span>∞</span> <span className={styles.prankCoffe}>cafés</span>
                        <p>téres tomados</p>
                    </div>

                </div>


                <div className={styles.aboutMePhoto}></div>

            </div>

        </section>

    )

}

export default About;