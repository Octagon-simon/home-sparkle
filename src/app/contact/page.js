import '@/styles/root.css'
import styles from './page.module.css';
import Image from 'next/image';

export default function About() {

    return (
        <main className={styles.main}>
            <section className={`section ${styles.aboutTopContainer}`}>
                <div className="container">
                    <div className={`section-content ${styles.mx500}`}>
                        <h4 className={`title is-4 ${styles.aboutTopText}`}>We are a company that prioritize customer&apos;s satisfaction</h4>
                    </div>
                </div>
            </section>
            <section className={`hero is-medium ${styles.heroBg}`}>
            </section>
            <section className={styles.missionWrapper}>
                <div className={styles.mission}>
                    <div className={styles.missionIcon}>
                        <Image src="/mission-goal.jpg" width={25} height={25} /> <span>Mission</span>
                    </div>
                    <div className={styles.missionText}>
                        <p>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. </p>
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className={`section-content ${styles.mx500} m-auto has-text-centered`}>
                        <h4 className={`title is-3 ${styles.fw500} ${styles.missionLargeText}`}>We turn mess into marvelous.
                            <br /> Discover the power of a spotless space</h4>
                    </div>
                    <div className={`${styles.projectsCompleted}`}>
                        <div className={styles.projectsCompletedItem}>
                            <p>4000+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div className={styles.projectsCompletedItem}>
                            <p>25</p>
                            <p>Cities covered wiithin the UK</p>
                        </div>
                        <div className={styles.projectsCompletedItem}>
                            <p>12</p>
                            <p>Awards earned</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`section ${styles.offBg}`}>
                <div className='container'>
                    <div className={styles.sparkleContainer}>
                        <p className={styles.sparkleHeading}>HomeSparkle Solution</p>
                        <p className={styles.sparkleContent}>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. </p>
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className={`section-content has-text-centered m-auto ${styles.mx700}`}>
                        <h4 className='title is-3'>Our Team</h4>
                        <p className={`${styles.fw400}`}>Meet the faces that make our mission possible and learn more about the talent and commitment that sets us apart.</p>
                    </div>
                    <div className={styles.teamWrapper}>
                        <div className={styles.teamItem}>
                            <div className={styles.teamImage}>
                                <Image src={'./team-1.jpg'} width={150} height={150} />
                            </div>
                            <div className={styles.teamMeta}>
                                <p>Macdonald A.</p>
                                <p>CEO, HomeSparkle Solution</p>
                            </div>
                        </div>
                        <div className={styles.teamItem}>
                            <div className={styles.teamImage}>
                                <Image src={'./team-2.jpg'} width={150} height={150} />
                            </div>
                            <div className={styles.teamMeta}>
                                <p>Macdonald A.</p>
                                <p>CEO, HomeSparkle Solution</p>
                            </div>
                        </div>
                        <div className={styles.teamItem}>
                            <div className={styles.teamImage}>
                                <Image src={'./team-3.jpg'} width={150} height={150} />
                            </div>
                            <div className={styles.teamMeta}>
                                <p>Macdonald A.</p>
                                <p>CEO, HomeSparkle Solution</p>
                            </div>
                        </div>
                        <div className={styles.teamItem}>
                            <div className={styles.teamImage}>
                                <Image src={'./team-4.jpg'} width={150} height={150} />
                            </div>
                            <div className={styles.teamMeta}>
                                <p>Macdonald A.</p>
                                <p>CEO, HomeSparkle Solution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}