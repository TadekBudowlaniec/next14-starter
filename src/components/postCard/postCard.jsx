import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://i.pinimg.com/564x/c3/92/d1/c392d1d7b9e135708d256cf90e26d839.jpg" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem srorem duperele i te sprawy.</p>
                <Link className={styles.link} href="blog/post">czytaj wiecej bq</Link>
            </div>
        </div>
    )
}

export default PostCard