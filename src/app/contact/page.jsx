import styles from "./contact.module.css"
import Image from "next/image";
import dynamic from "next/dynamic";

const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr:false})

const ContactPage = () => {
    return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill/>
        </div>
        <div className={styles.formContainer}>
            <HydrationTestNoSSR/>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Imie i nazwisko"/>
                <input type="text" placeholder="mailo"/>
                <input type="text" placeholder="numer telefonu(opcjonalnie)"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
    )
};

export default ContactPage;
