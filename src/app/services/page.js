import '@/styles/root.css'
import styles from './page.module.css';
import Image from 'next/image';

export default function Services() {

    return (
        <main className={styles.main}>
            <section className='section'>
                <div className='container'>
                    <div className={`section-content m-auto has-text-centered ${styles.mx500}`}>
                        <h4 className={`title is-3 ${styles.serviceText}`}>Some of our services</h4>
                        <p>A selection of the services we provide</p>
                    </div>
                </div>
            </section>
            {/* <section className={`hero is-medium ${styles.heroBg}`}>
            </section> */}
            <section className={styles.servicesHeroWrapper}>
                <div className={styles.servicesHeroItem}>
                    <div className={styles.servicesHeroItemTextBox}>
                        <p>House and office Cleaning</p>
                    </div>
                    <div className={`${styles.servicesHeroItemImageBox}`}>
                        <Image src="./services-img-1.jpg" width={200} height={200} alt='' />
                    </div>
                </div>
                <div className={styles.servicesHeroItem}>
                    <div className={styles.servicesHeroItemTextBox}>
                        <p>Move-In/Move-Out Cleaning</p>
                    </div>
                    <div className={`${styles.servicesHeroItemImageBox}`}>
                        <Image src="./services-img-2.jpg" width={200} height={200} alt='' />
                    </div>
                </div>
                <div className={styles.servicesHeroItem}>
                    <div className={`${styles.servicesHeroItemImageBox}`}>
                        <Image src="./services-img-3.jpg" width={200} height={200} alt='' />
                    </div>
                    <div className={styles.servicesHeroItemTextBox}>
                        <p>House and office Cleaning</p>
                    </div>
                </div>
                <div className={styles.servicesHeroItem}>
                    <div className={`${styles.servicesHeroItemImageBox}`}>
                        <Image src="./services-img-4.jpg" width={200} height={200} alt='' />
                    </div>
                    <div className={styles.servicesHeroItemTextBox}>
                        <p>Window Cleaning and others</p>
                    </div>
                </div>
            </section>
            <section className={`section ${styles.sectionWithPadding}`}>
                <div className='container'>
                    <div className={`section-content ${styles.mx500} m-auto has-text-centered`}>
                        <h4 className={`title is-3 ${styles.fw500} ${styles.missionLargeText}`}>We turn mess into marvelous.
                            <br /> Discover the power of a spotless space</h4>
                    </div>
                    <div className={`${styles.projectsCompleted} mt-5`}>
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
        </main>
    )
}