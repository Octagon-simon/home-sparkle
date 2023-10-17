"use client"

import '@/styles/root.css'
import styles from './page.module.css';
import Image from 'next/image';

export default function Contact() {

    return (
        <main className={styles.main}>
            <section>
                <div className='columns'>
                    <div className={`column is-6 ${styles.columnWithImage}`}>
                        <Image src={'./book-now-hero.svg'} width={500} height={500} />
                    </div>
                    <div className='column is-6 is-align-self-center'>
                        <div className={styles.formWrapper}>
                            <div className={`section-content`}>
                                <h4 className={`title is-4 ${styles.contactText}`}>Book a Service</h4>
                                <p>Please enter your correct details.</p>
                            </div>
                            <form className='mt-4' method='post' onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <div className='field'>
                                    <label className='label'>Full name</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Phone number</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Location</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Select service</label>
                                    <div className='dropdown'>
                                        <option>sese</option>
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button className='button is-fullwidth btn-brand'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}