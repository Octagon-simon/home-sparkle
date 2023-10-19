"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import BookModal from "./BookModal";

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

    //all Nav Items
    const navItems = {
        'Home': '/',
        'About': '/about',
        'Services': '/services',
        'Contact': '/contact'
    }

    const [currentUrl, setCurrentUrl] = useState('/');

    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.location !== "undefined") {
            setCurrentUrl(window.location.pathname)
        }
    }, [])

    //Modal

    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <>
            {/* hide-on-mobile hide-on-tablet */}
            <nav className="navbar is-fixed-top is-align-items-center " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" className="navbar-brand-link">
                        <Image src={"/brand-logo.svg"} alt={"Home sparkles"} width={"80"} height={"30"} />
                    </a>

                    <a role="button" className="navbar-burger is-align-self-center" aria-label="menu" aria-expanded="false" data-target="NavContent" onClick={(event) => toggleMobileNav(event)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="NavContent" className="navbar-menu is-align-self-center">
                    <div className="navbar-start m-auto" style={{gap : '20px'}}>
                        {
                            Object.keys(navItems).map((val, ind) => {

                                const isActive = (currentUrl === navItems[val]);

                                return <a key={ind} className={`navbar-item ${(isActive) ? 'is-active' : ''} `} href={navItems[val]}
                                    onClick={unToggleMobileNav}>
                                    {val}
                                </a>
                            })
                        }
                        <div className="navbar-item hide-on-desktop show-on-tablet">
                            <button onClick={() => setIsModalActive(true)} className="button is-black hover-brand">Book now</button>
                        </div>
                    </div>
                </div>
                <div className="navbar-item hide-on-mobile hide-on-tablet">
                    <button onClick={() => setIsModalActive(true)} className="button is-black hover-brand">Book now</button>
                </div>
            </nav>
            <BookModal isActive={isModalActive} setIsActive={setIsModalActive} />
        </>
    )
}