'use client'
import { useState } from 'react';
import classes from './card.module.scss'

interface CardProps {
  cardInfo: CardInfo;
}

const Card: React.FC<CardProps> =  ({ cardInfo }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const OpenModal = () => {
    setModalOpen(true);
  }

  const CloseModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div className={`${classes.modalContainer} ${classes.open} ${modalOpen ? '' : classes.close}`} onClick={CloseModal}>
        <div className={classes.modalBackground}>
          <div className={classes.modal}>
            <h2>Im a Modal</h2>
            <p>Hear me roar.</p>
            <svg className={classes.modalSvg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.articleWrapper} onClick={OpenModal}>
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
