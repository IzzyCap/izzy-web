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
    <header className={classes.header}>
      <div className={classes.menuIcon}>
        <Image src='/icons/burger.svg' alt='Burger Button' width={40} height={40} priority onClick={handleShowNavbar} />
      </div>
      <div className={classes.menuWrapper}>
        <div className={`${classes.container} ${showNavbar && classes.active}`}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.logo}
          >
            <Image src="/logo.svg" alt="Izzy Logo" width={150} height={48} priority />
          </a>

          <Link href="https://github.com/IzzyCap" target="_blank" className={`${classes.rightItem}`}>
            <Image src="/icons/github.svg" alt="Izzy Github" width={35} height={35} priority />
          </Link>
          <Link href="https://www.linkedin.com/in/isaac-caparr%C3%B3s-salv%C3%A0-83b035113/" target="_blank">
            <Image src="/icons/linkedin.svg" alt="Izzy Github" width={35} height={35} priority />
          </Link>
        </div>
      </div>
    </header> 
  )
}
