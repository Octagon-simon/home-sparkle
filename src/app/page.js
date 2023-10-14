import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className="hero is-medium">
        <div className="hero-body is-justify-content-center">
          <div className='container'>
            <section className="section-content has-text-centered">
              <h1 className="title home-title is-1">Offers commercial and domestic cleaning services</h1>
              <p className='has-text-white content'>Transforming chaos into clean, one space at a time. your trusted partner for immaculate spaces.</p>
              <div class="frame-wrapper" style={{ maxWidth: "700px", margin: "auto" }}>
                <div class="frame-container">
                  <div className='frame-item'>
                    <span className='icon'>
                      <Image width={15} height={15} alt='' src="/search-icon.svg" />
                    </span>
                    <input type="text" className="location-input" id="location-input" placeholder="Enter your location" />
                  </div>
                  <div class="frame-item">
                    <span className='icon'>
                      <Image width={15} height={15} alt='' src="/book.svg" />
                    </span>
                    <div class="dropdown-select">
                      <select className='hero-dropdown'>
                        <option value="male">Type of service</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <div class="arrow-down">
                        <img src="/arrow-down.svg" alt="Arrow Icon" />
                      </div>
                    </div>
                  </div>
                  <div class="frame-item">
                    <button className='button btn-brand'>Request</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div >
      </section >
    </main >
  )
}
