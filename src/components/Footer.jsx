import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-7">
                        <a target="_blank" rel="noopener" className="mb-4 is-inline-block" href="./">
                            <Image loading="lazy" width="120" height="100" src="/nav-typo-logo-white.webp" alt="KaboCash Logo" />
                        </a>
                        <p className="mb-4">
                            We help you send and receive money across Africa quickly and without stress.
                        </p>
                        <div>
                            <a target="_blank" rel="noopener" aria-label="Follow us on Facebook" className="mr-3 is-inline-block" href="#">
                                <i className="mx-auto social image is-fullwidth bx bxl-facebook"></i>
                            </a>
                            <a target="_blank" rel="noopener" aria-label="Follow us on Twitter" className="mr-3 is-inline-block" href="https://twitter.com/kabocashapp">
                                {/* <i className="mx-auto social image is-fullwidth bx bxl-twitter"></i> */}
                                <Image src="/brands/x-logo-white.webp" width={20} height={25} className='mx-auto' alt="Follow us on X" />
                            </a>
                            <a target="_blank" rel="noopener" aria-label="Follow us on Instagram" className="mr-3 is-inline-block" href="https://instagram.com/kabocash">
                                <i className="mx-auto social image is-fullwidth bx bxl-instagram"></i>
                            </a>
                            <a target="_blank" rel="noopener" aria-label="Subscribe to our channel on YouTube" className="mr-3 is-inline-block" href="https://www.youtube.com/@kabocash">
                                <i className="mx-auto social image is-fullwidth bx bxl-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="columns is-multiline is-justify-content-end">
                            <div className="column is-6 is-6-desktop mb-5">
                                <h4 className="is-size-5 has-text-weight-bold mb-4">Pages</h4>
                                <ul>
                                    <li className="mb-2">
                                        <a target="_self" rel="noopener" className="link" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a target="_self" rel="noopener" href="/about-kabocash-technologies" className="link">
                                            About us
                                        </a>
                                    </li>
                                    {/* <li className="mb-2">
                                        <a target="_blank" rel="noopener" className="link" href="#">
                                            FAQs
                                        </a>
                                    </li> */}
                                    <li className="mb-2">
                                        <a target="_blank" rel="noopener" className="link" href="#">
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-6 is-6-desktop mb-5">
                                <h4 className="is-size-5 has-text-weight-bold mb-4">Quick Links</h4>
                                <ul>
                                    <li className="mb-2">
                                        <a target="_self" rel="noopener" className="link" href="/customer-privacy">
                                            Customer privacy
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a target="_self" rel="noopener" className="link" href="/security-guidelines">
                                            Security guidelines
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a target="_self" rel="noopener" className="link" href="/terms-of-service">
                                            Terms of service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="is-flex mb-4" style={{ gap: "10px" }}>
                    <div className="download-btn is-light">
                        <div className="item">
                            <i className='bx bxl-play-store bx-md'></i>
                        </div>
                        <div className="item inner">
                            <span className="df">GET IT ON</span>
                            <span className="dfn">Google Play</span>
                        </div>
                    </div>
                    <a style={{ all: "unset" }} href="https://apps.apple.com/app/kabocash/id6469073288" target="_blank" rel="noreferrer">
                        <div className="download-btn is-light">
                            <div className="item">
                                <i className="bx bxl-apple bx-md"></i>
                            </div>
                            <div className="item inner">
                                <span className="df">GET IT ON</span>
                                <span className="dfn">App Store</span>
                            </div>
                        </div>
                    </a>
                </div>
                <hr />
                <div className='sec-text has-text-centered'>
                    <p className='mb-2'>Registration: 80034161985297 - P.O. Box 119701 Central Kampala GPO. OS Kagere Advocates. Soliz House. 23 Lumumba Avenue, Nakasero. Kampala, Uganda.</p>
                    <p className='mb-2'>Registration: 7044680 - KaboCash Technologies NIG. LTD NO342, KANO STATE, NIGERIA. TIN-(31455227-0001)</p>
                    <p>All rights reserved &copy; KaboCash Technologies 2023</p>
                </div>
            </div>
        </footer>
    )
}