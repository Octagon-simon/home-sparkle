"use client"

import Image from "next/image";

export default function Navbar() {

    const toggleMobileNav = function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        document.querySelector('.navbar-burger')?.classList.toggle('is-active');
        document.querySelector('.navbar-menu')?.classList.toggle('is-active');
    }

    const unToggleMobileNav = () => {
        document.querySelector('.navbar-burger')?.classList.remove('is-active');
        document.querySelector('.navbar-menu')?.classList.remove('is-active');
    }

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <Image src={"/nav.jpg"} alt={"Home sparkles"} width={"100"} height={"30"} />
                    </a>

                    <a role="button" className="navbar-burger is-align-self-center" aria-label="menu" aria-expanded="false" data-target="NavContent" onClick={(event) => toggleMobileNav(event)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="NavContent" className="navbar-menu is-align-self-center">
                    <div className="navbar-end">
                        <a className={`navbar-item is-active`} href="/"
                            onClick={unToggleMobileNav}>
                            Home
                        </a>
                        <a className={`navbar-item`} href="/about-kabocash-technologies"
                            onClick={unToggleMobileNav}>
                            About
                        </a>
                        <a href="#" className={`navbar-item`} onClick={unToggleMobileNav}>
                            Services
                        </a>
                        <a href="#" className={`navbar-item`} onClick={unToggleMobileNav}>
                            contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}