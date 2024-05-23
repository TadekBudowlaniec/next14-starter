import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>FizykaStatkiem</div>
            <div className={styles.text}>
                Fizyka statkiem - twoje kompedium wiedzy.
            </div>
        </div>
    );
};

export default Footer;