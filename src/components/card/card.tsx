/* eslint-disable @next/next/no-img-element */
'use client'
import { useContext } from 'react';
import classes from './card.module.css'
import Image from 'next/image'
import ModalContext from '@/store/modalContext';
import TechIcon from '../techIcon/techIcon';
import Link from 'next/link';

interface CardProps {
  cardInfo: CardInfo;
}

const Card: React.FC<CardProps> =  ({ cardInfo }) => {
  const modalCtx = useContext(ModalContext);

  const createTechRow = () => {
    return (    
      cardInfo.techIcons.map((icon) => {
        return (<TechIcon key={icon} iconPath={`/tech/${icon}`} iconAlt={icon} dark={false}/>)
      })
    )
  }

  const openModal = () => {
    modalCtx.openModal(
      <div className={classes.modalWrapper} onClick={openModal}>
        <figure className={classes.modalBanner}>
          <img src={cardInfo.image} alt="Card image" />
        </figure>
        <div className={classes.modalBody}>
          <div className={classes.modalTitle}>
            <h2>{cardInfo.title}</h2>
            <Link href={cardInfo.link} className='center-element' target="_blank">
              <Image src="/icons/link.svg" alt="Link" width={25} height={25} priority/>
            </Link>
          </div>
          <p>
            {cardInfo.longDescription}
          </p>
          <div className={classes.techIcons}>
            {createTechRow()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={classes.articleWrapper} onClick={openModal}>
        <figure className={classes.banner}>
          <img src={cardInfo.image} alt="" />
        </figure>
        <div className={classes.articleBody}>
          <h2>{cardInfo.title}</h2>
          <p>
            {cardInfo.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
