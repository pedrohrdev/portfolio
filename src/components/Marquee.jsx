import styles from '../styles/Marquee.module.css';

const items = ['TypeScript', 'PostgreSQL', 'React', 'Next.js', 'Node.js'];

function MarqueeGroup() {
  return (
    <div className={styles.marqueeGroup}>
      {items.map((item, i) => (
        <span key={i} className={styles.marqueeItem}>
          <span className={styles.marqueeDot} />
          {item}
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}

export default Marquee;