import { useEffect, useState, useCallback } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.navLogo} aria-label="Ir para o início">
        P<span aria-hidden="true">.</span>
      </a>

      <div className={styles.navLinks} role="list">
        <a href="#about"    role="listitem">Sobre</a>
        <a href="#projects" role="listitem">Projetos</a>
        <a href="#skills"   role="listitem">Skills</a>
        <a href="#contact"  role="listitem" className={styles.navCta}>Contato</a>
      </div>
    </nav>
  );
}

export default Navbar;