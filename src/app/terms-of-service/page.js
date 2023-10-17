import '@/styles/root.css'
import styles from './page.module.css';

export default function Terms() {

    return (
        <main className={styles.main}>
            <section className={styles.termsHero}>
                <div className="hero-body is-justify-content-center">
                    <div className='container'>
                        <section className="section-content has-text-centered">
                            <h1 className={`title home-title is-1 has-text-white ${styles.termsHeroTitle}`}>Terms Of Service</h1>
                        </section>
                    </div>
                </div >
            </section>
            <section className={`${styles.termsSection}`}>
                <div className='container'>
                    <div className={`section-content`}>
                        <p className={styles.termsContent}>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar.
                            <br />
                            Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. </p>
                    </div>
                </div>
            </section>
        </main>
    )
}