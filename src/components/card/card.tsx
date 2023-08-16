'use client'
import { useContext } from 'react';
import classes from './card.module.css'
import ModalContext from '@/store/modalContext';

interface CardProps {
  cardInfo: CardInfo;
}

const Card: React.FC<CardProps> =  ({ cardInfo }) => {
  const modalCtx = useContext(ModalContext);

  const openModal = () => {
    modalCtx.openModal(
      <div className={classes.modalWrapper} onClick={openModal}>
        <figure className={classes.modalBanner}>
          <img src={cardInfo.image} alt="" />
        </figure>
        <div className={classes.modalBody}>
          <h2>{cardInfo.title}</h2>
          <p>
            {cardInfo.description}
          </p>
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
