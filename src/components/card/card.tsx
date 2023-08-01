import classes from './card.module.css'

// interface CardProps {
//   animationPath: string;
// }

// const Card: React.FC<CardProps> =  ({ animationPath }) => {
const Card: React.FC =  () => {
  return (
    <div className={classes.articleWrapper}>
      <figure className={classes.banner}>
        <img src="https://picsum.photos/id/1011/800/450" alt="" />
      </figure>
      <div className={classes.articleBody}>
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.
        </p>
        <a href="#" className={classes.readMore}>
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className={classes.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;