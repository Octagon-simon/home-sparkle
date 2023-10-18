import styles from './BookModal.module.css'
import Image from 'next/image'

export default function BookModal({isActive, setIsActive}) {

    return (
        <>
            <div className={`modal ${(isActive) ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className={styles.modalDeleteWrapper}>
                    <button onClick={() => setIsActive(false)} className="delete" aria-label="close">
                        <Image src="./modal-close.png" width={20} height={20} />
                    </button>
                </div>
                <div className="modal-card">
                    <section className={`modal-card-body ${styles.modalCardBody}`}>
                        <div className={styles.formWrapper}>
                            <div className={styles.modalDeleteWrapperMobile}>
                                <div className={`section-content ${styles.modalDeleteWrapperMobileItem}`}>
                                    <h4 className={`title is-5 ${styles.bookModalTitle}`}>Book a Service</h4>
                                    <p className={styles.bookModalContent}>Please enter your correct details.</p>
                                </div>
                                <div className={styles.modalDeleteWrapperMobileItem}>
                                    <button onClick={() => setIsActive(false)} className="delete" aria-label="close"></button>
                                </div>
                            </div>
                            <form method='post' onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <div className='field'>
                                    <label className='label'>Full Name</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Phone Number</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Location</label>
                                    <input className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Select service</label>
                                    <div className={`select is-fullwidth`}>
                                        <select className={styles.select}>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                    </div>
                                    <small className={styles.small}>You can select more than one service</small>
                                </div>
                                <div className={styles.formDivider}></div>
                                <div className='field'>
                                    <div className='pb-4'>
                                        <h4 className={`title is-5 ${styles.bookModalTitle}`}>Availability</h4>
                                        <p className={styles.bookModalContent}>Please enter your availability</p>
                                    </div>
                                    <div className={styles.availabilityWrapper}>
                                        <div className={styles.availabilityItem}>
                                            <div className="field">
                                                <label>Date</label>
                                                <div className="control has-icons-left">
                                                    <input className={`input ${styles.input}`} type="text" />
                                                    <span className="icon is-small is-left">
                                                        <Image src="./calendar.svg" width={20} height={20} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.availabilityItem}>
                                            <div className="field">
                                                <label>Time</label>
                                                <div className="control has-icons-left">
                                                    <input className={`input ${styles.input}`} type="text" />
                                                    <span className="icon is-small is-left">
                                                        <Image src="./clock.svg" width={20} height={20} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='field mt-5 has-text-centered'>
                                    <button className='button is-black'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}