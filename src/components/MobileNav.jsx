"use client"

import { useState } from 'react';
import styles from './MobileNav.module.css';

export default function MobileNav() {

    const [isOpen, setIsOpen] = useState(false);

    const handleNavOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false)
        }
    }

    return (
        <nav className={`hide-on-desktop show-on-tablet has-navbar-fixed-top show-on-mobile ${styles.mobileNav}`} style={(isOpen) ? { borderRadius: '0 0 30px 30px' } : {}}>
            <div className={styles.mobileMenuParent}>
                <label className={styles.burger} onClick={() => handleNavOpen()}>
                    {
                        (!isOpen) ? <img src="./harmburger.svg" />
                            : <img src="./close.svg" />
                    }
                </label>
                <div className={styles.mobileMenuBrand}>
                    <img src="/brand-logo.svg" width="80px" />
                </div>
                <div>
                    <button className="button is-black hover-brand">Book now</button>
                </div>
            </div>
            <div className={`${styles.mobileMenu} ${(isOpen) ? `${styles.mobileMenuActive}` : null}`}>
                <ul className={styles.mobileMenuList}>
                    <li className={`${styles.mobileMenuItem} ${styles.mobileMenuItemActive}`}><a href="#">Home</a></li>
                    <li className={styles.mobileMenuItem}><a href="#">About</a></li>
                    <li className={styles.mobileMenuItem}><a href="#">Services</a></li>
                    <li className={styles.mobileMenuItem}><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}