import Modal from '@/components/modal/modal';
import classes from './projects.module.css'
import Card from '@/components/card/card'
import { useState } from 'react';

// [TODO] move card data to a file or DB.
const cardMathType: CardInfo = {
  title: 'MathType Web',
  description: 'The official JavaScript library for MathType, the leading formula editor and equation writer for the web by Wiris',
  link: 'string',
  image: "/projects/mathtype.png",
};

const cardPorfolio: CardInfo = {
  title: 'Web Portfolio',
  description: 'Even this web page powered by Next.js is open source. Take a look at the code',
  link: 'string',
  image: "/projects/porfolio.png",
}

const cardMinter: CardInfo = {
  title: 'Mutable NFTs minter',
  description: 'This tool allow you to create mutable NFTs on the powerful and sustainable Algorand blockchain',
  link: 'string',
  image: "/projects/algorand.png",
}

const cardLolo: CardInfo = {
  title: 'Lolo',
  description: 'Addictive rhythm game, where you play as a goofy slime, with the mission to collect three golden eighth notes scattered in three different levels.',
  link: 'string',
  image: "/projects/lolo.png",
}

export default function Projects() {
  return (
    <>
      {/* <Modal>
        <h1>Projects</h1>
      </Modal> */}
      <div className={classes.container}>
        <h1>Projects</h1>
        <div className={classes.projectsContainer}>
          <Card cardInfo={cardMathType}/>
          <Card cardInfo={cardPorfolio}/>
          <Card cardInfo={cardLolo}/>
          <Card cardInfo={cardMinter}/>
        </div>
      </div>
    </>
  )
}
