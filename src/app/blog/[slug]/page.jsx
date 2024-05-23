import styles from "./singlePoost.module.css"
import Image from "next/image";

const SinglePostPage = () => {
    return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="https://i.pinimg.com/564x/5b/af/ea/5bafea3e69da8065637009b809ca7a82.jpg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
                <Image className={styles.avatar} alt="" src = "https://i.pinimg.com/75x75_RS/5c/70/7c/5c707c5d4908a140407bc5d87b13e605.jpg" width={50} height={50}/>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Autor</span>
                    <span className={styles.detailValue}>Morgan Johns</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>01.01.2025</span>
                </div>
            </div>
            <div className={styles.content}>
                Mowa o mnie kiedy ide w miasto moja mama robi bardzo dobre ciasto. Hihi.
            </div>
        </div>
    </div>
    );
};

export default SinglePostPage;
