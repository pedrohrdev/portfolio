import { memo } from 'react';
import styles from '../styles/Marquee.module.css';

const items = ['TypeScript', 'PostgreSQL', 'React', 'Next.js', 'Node.js'];

const MarqueeGroup = memo(function MarqueeGroup() {

  return (

    <div className={styles.marqueeGroup} aria-hidden="true">

      {items.map((item) => (

        <span key={item} className={styles.marqueeItem}>

          <span className={styles.marqueeDot} />

          {item}

        </span>

      ))}

    </div>

  );

});

function Marquee() {

  return (

    <section
      className={styles.marqueeContainer}
      aria-label="Tecnologias: TypeScript, PostgreSQL, React, Next.js, Node.js"
    >

      <div className={styles.marqueeTrack}>

        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />        
        <MarqueeGroup />
        <MarqueeGroup />
      </div>

    </section>
  );
}

export default Marquee;