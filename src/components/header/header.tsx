import React from 'react'
import classes from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (

    <nav>
      <ul className={classes.primaryNav}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.svg"
            alt="Izzy Logo"
            className={classes.izzyLogo}
            width={200}
            height={48}
            priority
          />
        </a>
        <li><Link href='/'>Projects</Link></li>
        <li><Link href='/assets'>Assets</Link></li>
        <li className={classes.left}><Link href='/info'>Info</Link></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </nav> 
  )
}
