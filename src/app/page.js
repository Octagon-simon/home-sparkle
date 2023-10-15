"use client"

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/styles/root.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className="hero is-medium">
        <div className="hero-body is-justify-content-center">
          <div className='container'>
            <section className="section-content has-text-centered">
              <h1 className="title home-title is-1">Offers commercial and domestic cleaning services</h1>
              <p className='has-text-white content'>Transforming chaos into clean, one space at a time. your trusted partner for immaculate spaces.</p>
              <div className={styles.frameWrapper} style={{ maxWidth: "700px", margin: "auto" }}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameItem}>
                    <span className='icon'>
                      <Image width={15} height={15} alt='' src="/search-icon.svg" />
                    </span>
                    <input type="text" className={'custom-input'} id="location-input" placeholder="Enter your location" />
                  </div>
                  <div className={styles.frameItem}>
                    <span className='icon'>
                      <Image width={15} height={15} alt='' src="/book.svg" />
                    </span>
                    <div className={styles.dropdownSelect}>
                      <select className={styles.dropdown}>
                        <option value="male">Type of service</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <div className={styles.arrowDown}>
                        <img src="/arrow-down.svg" alt="Arrow Icon" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameItem}>
                    <button className='button btn-brand'>Request</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div >
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-flex-direction-row-reverse'>
            <div className='column is-6'>
              <div className='section-content'>
                <p className='text-primary mb-2'>ABOUT HOMESPARKLE SOLUTION</p>
                <h3 className='title is-3 fw-bold'>Why Choose Us?</h3>
              </div>
              <div className='section-content'>
                <p className='has-text-black-black5'>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom multinar. </p>
              </div>
              <div className='section-content'>
                <div className={`is-flex is-justify-content-space-between ${styles.projectsCompleted}`}>
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
              <div className='section-content'>
                <button className='button btn-brand is-outline'>
                  Read more about us
                  <span className='icon'>
                    <Image src="/arrow-right.svg" width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className='column is-6'>
              <Image src="/why-choose-us.png" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='section-content'>
            <p className='text-primary mb-2'>SERVICES</p>
            <h3 className='title is-3 fw-bold'>What services do we offer?</h3>
          </div>

          <div className={`mt-4 ${styles.serviceCardWrapper}`}>
            <div className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="/cleaning-item-1.svg" width={20} height={20} />
              </div>
              <h5 className='title is-5 has-text-white'>Commercial Cleaning</h5>
              <p>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. att rit-avdrag. Eposade farir, anteng även om neresön holl.</p>
            </div>
            <div className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="/cleaning-item-1.svg" width={20} height={20} />
              </div>
              <h5 className='title is-5 has-text-white'>Commercial Cleaning</h5>
              <p>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. att rit-avdrag. Eposade farir, anteng även om neresön holl.</p>
            </div>
          </div>
          <div className={`mt-4 ${styles.serviceCardWrapper}`}>
            <div className={`card ${styles.serviceCard} ${styles.hasBlackBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="/cleaning-item-1.svg" width={20} height={20} />
              </div>
              <h5 className='title is-5 has-text-white'>Commercial Cleaning</h5>
              <p>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. att rit-avdrag. Eposade farir, anteng även om neresön holl.</p>
            </div>
            <div className={`card ${styles.serviceCard} ${styles.hasBlackBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="/cleaning-item-1.svg" width={20} height={20} />
              </div>
              <h5 className='title is-5 has-text-white'>Commercial Cleaning</h5>
              <p>Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade farir, anteng även om neresön holl. att rit-avdrag. Eposade farir, anteng även om neresön holl.</p>
            </div>
          </div>

          <div className={styles.cleaningBrush}>
            <Image src="/cleaning-brush.png" width={300} height={300} />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='section-content'>
            <h4 className='title is-4 has-text-centered'>HOW CLEANING HAPPENS?</h4>
            <div class="tabs is-toggle is-toggle-rounded">
              <ul className=' is-justify-content-center'>
                <li class="is-active">
                  <a>
                    <span class="icon is-small"><i class="fas fa-image"></i></span>
                    <span>Living Room</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-music"></i></span>
                    <span>Bedroom</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-film"></i></span>
                    <span>Kitchen</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
                    <span>Restroom</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <Image style={{ width: '100%' }} className='' src="/how-cleaning-happens.png" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='section-content'>
            <div className={styles.testimonialContainer}>
              <div className={styles.testimonialItem}>
                <Image src="/chevron-back-outline.svg" width={20} height={20} />
              </div>
              <div className={styles.testimonialItem}>
                <h4 className='title is-4'>What our clients say about us</h4>
              </div>
              <div className={styles.testimonialItem}>
                <Image src="/chevron-forward-outline.svg" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className='hide-on-desktop mt-5'>
            <Carousel showArrows={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
              <div className='carousel-item'>
                <Image src="/testimonial-1.png" style={{ width: "360px", height: "360px" }} width={360} height={360} alt='' />
              </div>
              <div className='carousel-item'>
                <Image src="/testimonial-2.png" width={500} height={500} alt='' />
              </div>
              <div className='carousel-item'>
                <Image src="/testimonial-3.png" width={360} height={360} alt='' />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main >
  )
}
