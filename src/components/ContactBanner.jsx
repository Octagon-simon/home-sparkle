export default function ContactBanner() {
    return (
        <section className='section bg-primary-light has-text-centered'>
            <div style={{ maxWidth: "800px" }} className='m-auto'>
                <h2 className="title is-2">Contact Us</h2>
                <p className='mb-3 content'>Have any questions or concerns? We&apos;d love to hear them. Drop us a message and we&apos;ll get back to you within 24 hours.</p>
                <section className='section-content'>
                    <a href="#" target='_blank' rel="noopener" className="button btn-primary btn-cta has-dark-shadow is-filled">Contact us<span className="icon"><i className='bx bx-support'></i></span></a>
                </section>
            </div>
        </section>
    )
}