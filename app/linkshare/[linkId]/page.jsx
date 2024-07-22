import getData from "@/lib/getData";
import Head from "next/head";
import styles from "../../page.module.css"
import { FaCopy } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default async function Page({ params }) {

    const shareLink = await getData();
    const searchedId = params.linkId;
    const searchedIdData = shareLink.find(item => item.id === parseInt(searchedId));

    if (!searchedIdData) {
        return <div>Data not found for ID {searchedId}</div>;
    }
    return (
        <>
            {/* <h1>{searchedId}</h1>
            <h2>{searchedIdData.title}</h2> */}
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.shrlnks_1}>
                <div className={styles.shrlnks_2}>
                    <div className={styles.shrlnks_3}>
                        <h2>LinkShare</h2>
                        <p>by Mihir Desai</p>
                    </div>
                    <div className={styles.shrlnks_4}>
                        <div className={styles.shrlnks_5}>
                            <a href={searchedIdData.link} target="_blank" rel="noopener noreferrer">{searchedIdData.title}</a>
                            <span className={styles.copyIcon}>
                                <FaCopy />
                            </span>
                        </div>
                        <div className={styles.shrlnks_6}>
                            <span className={styles.mediaIcons}><IoLogoStackoverflow /></span>
                            <span className={styles.mediaIcons}><FaCodepen /></span>
                            <span className={styles.mediaIcons}><FaGithub /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}