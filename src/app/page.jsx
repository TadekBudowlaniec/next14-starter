import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Fizyka statkiem - Twoje kompedium wiedzy.</h1>
        <p className={styles.desc}>
          Elo mordy i wariaty z teej strony spejsonik.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Dowiedz sie więcej</button>
          <button className={styles.button}>Skontaktuj się z nami</button>
        </div>
        <div className={styles.brands}>
          <Image src="/media.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/czarne.png" alt="" fill className={styles.tadekImg}/>
      </div>
    </div>
  );
};

export default Home;
