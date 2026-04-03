import styles from '../styles/Marquee.module.css';

const items = [
  'Node.js', 'TypeScript', 'PostgreSQL', 'React', 'Next.js'
];

function MarqueeGroup() {
  return (
    <div className={styles.marqueeGroup}>
      {items.map((item, i) => (
        <>
          <span key={item} className={styles.marqueeItem}>{item}</span>
          <span key={`dot-${i}`} className={styles.marqueeDot} />
        </>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* Duplicado para o loop infinito */}
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}

export default Marquee;

