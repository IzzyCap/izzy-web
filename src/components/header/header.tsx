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
    <nav>
      <div className={classes.menuIcon} onClick={handleShowNavbar}>
        <img alt='burger button' src='/icons/burger.svg'></img>
      </div>
      <ul className={`${classes.primaryNav} ${showNavbar && classes.active}`}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.svg"
            alt="Izzy Logo"
            className={classes.logo}
            width={200}
            height={48}
            priority
          />
        </a>
        <li className={classes.primaryLi}><Link className={classes.link} href='/'>Projects</Link></li>
        <li className={classes.primaryLi}><Link className={classes.link} href='/assets'>Assets</Link></li>
        <li className={`${classes.left} ${classes.primaryLi}`}><Link className={classes.link} href='/info'>Info</Link></li>
        <hr/>
        <li className={classes.secondaryLi}><Link href="#">Donate</Link></li>
        <li className={classes.secondaryLi}><Link  href="#">Support</Link></li>
      </ul>
    </nav> 
  )
}
