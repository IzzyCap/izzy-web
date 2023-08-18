import classes from './description.module.css'
import Animation from '@/components/animation/animation';

export default function Description() {
  const animationPath = '/animations/dev.json'; // Correct path to the animation JSON file

  return (
    <div className={classes.descriptionWrapper}>
      <div>
        <h1>Izzy Caparrós Salvà</h1>
        <br/>
        <h2>Full Stack software developer with 4+ years of experience.</h2>
      </div>
      <Animation animationPath={animationPath} />
    </div>
  )
}
