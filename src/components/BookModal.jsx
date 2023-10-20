import { useState } from 'react'
import styles from './BookModal.module.css'
import Image from 'next/image'

const ModalSuccess = ({ showSuccess, setShowSuccess }) => {

    return (
        <>
            <div class={`modal ${(showSuccess) ? 'is-active' : ''}`}>
                <div class="modal-background"></div>
                <div class={`modal-content ${styles.successModalContent}`}>
                    {/* <p class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                    </p> */}
                    <div className='section-content has-text-centered'>
                        <Image className='mb-3' src={"./check.png"} width={100} alt={''} height={100} />
                        <h4 className='title is-3'>Thank You!</h4>
                        <button className='button is-black' style={{ borderRadius: '10px' }} onClick={() => setShowSuccess(false)}>Okay</button>
                    </div>
                </div>
                <button onClick={() => setShowSuccess(false)} class="modal-close is-large" aria-label="close"></button>
            </div>
        </>
    )
}

export default function BookModal({ isActive, setIsActive }) {

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        //prevent default action (reload)
        e.preventDefault();

        if (typeof window !== "undefined") {

            if (typeof octaValidate !== "function") return false;

            //check if octavalidate is defined
            if (typeof octaValidate === "function") {
                const ov = new octaValidate('form_book', {
                    errorElem : {
                        'inp_service' : 'inp_service_wrapper'
                    }
                });
                //validate
                if (ov.validate()) {
                    //Hide the book modal
                    setIsActive(false);
                    //show the success modal
                    setShowSuccess(true)
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
                                    <input placeholder='Required' octavalidate="R,NAME" id="inp_fullname" className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Phone Number</label>
                                    <input placeholder='Required' octavalidate="R,DIGITS" id="inp_phone" className={`input ${styles.input}`} />
                                </div>
                                <div className='field'>
                                    <label className='label'>Location</label>
                                    <input placeholder='Required' octavalidate="R,TEXT" id="inp_location" className={`input ${styles.input}`} />
                                </div>
                                <div id="inp_service_wrapper">
                                    <div className='field'>
                                        <label className='label'>Select service</label>
                                        <div className={`select is-fullwidth`}>
                                            <select defaultValue={""} octavalidate="R,TEXT" id="inp_service" className={styles.select}>
                                                <option value={""}>Select a service</option>
                                                <option>Service 1</option>
                                                <option>Service 2</option>
                                                <option>Service 3</option>
                                            </select>
                                        </div>
                                        <small className={styles.small}>You can select more than one service</small>
                                    </div>
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
                                                    <input placeholder='Required' octavalidate="R" id="inp_date" className={`input ${styles.input}`} type="date" />
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
                                                    <input placeholder='Required' octavalidate="R" id="inp_time" className={`input ${styles.input}`} type="time" />
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
            <ModalSuccess showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
        </>
    )
}