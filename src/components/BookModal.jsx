import styles from './BookModal.module.css'
import Image from 'next/image'

export default function BookModal({ isActive, setIsActive }) {


    const handleSubmit = (e) => {
        //prevent default action (reload)
        e.preventDefault();

        if (typeof window !== "undefined") {
            
            if (typeof octaValidate !== "function") return false;

            //check if octavalidate is defined
            if (typeof octaValidate === "function") {
                const ov = new octaValidate('form_book');
                //validate
                if(ov.validate()){
                    alert('ses')
                }
            }
        } else {
            return false
        }
    }

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
                            <form id="form_book" method='post' onSubmit={handleSubmit}>
                                <div className='field'>
                                    <label className='label'>Full Name</label>
                                    <input octavalidate="R,NAME" id="inp_fullname" className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Phone Number</label>
                                    <input octavalidate="R,DIGITS" id="inp_phone" className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Location</label>
                                    <input octavalidate="R,TEXT" id="inp_location" className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Select service</label>
                                    <div className={`select is-fullwidth`}>
                                        <select octavalidate="R,TEXT" id="inp_service" className={styles.select}>
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
                                                    <input octavalidate="R" id="inp_date" className={`input ${styles.input}`} type="date" />
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
                                                    <input octavalidate="R" id="inp_time" className={`input ${styles.input}`} type="time" />
                                                    <span className="icon is-small is-left">
                                                        <Image src="./clock.svg" width={20} height={20} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='field mt-5 has-text-centered'>
                                    <button form="form_book" className='button is-black'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}