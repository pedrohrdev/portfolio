import styles from '../styles/Contact.module.css';

function Contato() {

    return (

        <section className={styles.contatoContainer}>

            <div className={styles.contatoContent}>
                
                <div className={styles.contatoInner}>

                    <h3>CONTATO</h3>

                    <h2>Vamos <span className={styles.highlight}>trabalhar juntos.</span></h2>

                    <p className={styles.contatoDescription}>Aberto para projetos freelance e oportunidades de trabalho.</p>

                    <div className={styles.contatoLinks}>

                        <a href="https://github.com/pedrohrdev" target="_blank" rel="noopener noreferrer">
                            GitHub
                            <span>↗</span>
                        </a>

                        <a href="https://www.linkedin.com/in/pedro-rossi-a2b068347/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                            <span>↗</span>
                        </a>

                        <a href="https://wa.me/5544991262009" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                            <span>↗</span>
                        </a>

                        <a href="mailto:pedrohrdev@gmail.com" target="_blank" rel="noopener noreferrer">
                            E-mail
                            <span>↗</span>
                        </a>

                    </div>

                    <div className={styles.contatoForm}>

                        <div className={styles.formGroup}>
                            <label htmlFor="nome">NOME</label>
                            <input type="text" id="nome" placeholder="Seu nome" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" placeholder="seu@email.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="mensagem">MENSAGEM</label>
                            <textarea id="mensagem" placeholder="Conta sobre seu projeto..." rows={5} />
                        </div>

                        <button className={styles.submitBtn} type="button">
                            Enviar mensagem →
                        </button>

                    </div>

                </div>

            </div>            

        </section>
        
    );

}

export default Contato;