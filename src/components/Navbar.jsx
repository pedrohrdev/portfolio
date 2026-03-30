import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.navLogo}>
        P<span>.</span>
      </a>
      <div className={styles.navLinks}>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className={styles.navCta}>Contato</a>
      </div>
    </nav>
  )
}

export default Navbar;