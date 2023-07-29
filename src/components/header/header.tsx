'use client'
import React, { useState } from 'react'
import classes from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <header>
      <div className={classes.menuIcon}>
        <Image src='/icons/burger.svg' alt='Burger Button' width={40} height={40} priority onClick={handleShowNavbar} />
      </div>
      <div className={classes.containerContainer}>
        <div className={`${classes.container} ${showNavbar && classes.active}`}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.logo}
          >
            <Image src="/logo.svg" alt="Izzy Logo" width={200} height={48} priority />
          </a>
          {/* <div className={classes.closeButton}>
            <a>x</a>
          </div> */}
          <Link href='/' className={classes.primaryLink}>Projects</Link>
          <Link href='/' className={classes.primaryLink}>Assets</Link>
          <Link href='/' className={classes.primaryLink}>Info</Link>
          <hr/>
          <Link href="#" className={`${classes.rightItem} ${classes.secondaryLink}`}>Donate</Link>
          <Link  href="#"className={classes.secondaryLink}>Support</Link>
        </div>
      </div>
    </header> 
  )
}
