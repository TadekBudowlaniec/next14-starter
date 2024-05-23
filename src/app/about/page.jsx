import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {

    // console.log("zobaczymy co sie stanie")

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>O agencji</h2>
                <h1 className={styles.title}>Tworzymy spółke wariaty wy moje</h1>
                <p className={styles.desc}>cos tu sie wrzuci o tym ze jestesmy kompetentnymi byczkami</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>80%+</h1>
                        <p>to co ci zapewnimy</p>
                    </div>
                    <div className={styles.box}>
                        <h1>80%+</h1>
                        <p>to co ci zapewnimy</p>
                    </div>
                    <div className={styles.box}>
                        <h1>80%+</h1>
                        <p>to co ci zapewnimy</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    src="/tadeusz.png"
                    alt="about image"
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default AboutPage;
