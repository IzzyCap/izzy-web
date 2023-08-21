import DownloadButton from '@/components/ui/downloadButton/downloadButton';
import classes from './description.module.css'
import Animation from '@/components/animation/animation';

export default function Description() {
  const animationPath = '/animations/dev.json'; // Correct path to the animation JSON file

  return (
    <div className={classes.descriptionWrapper}>
      <div>
        <h1>Izzy Caparrós Salvà</h1>
        <br/>
        <h2>Full Stack software developer with <span className='highlight-text'>4+ years</span> of experience.</h2>
        <div className={classes.downloadButton}>
          <DownloadButton link='/files/cv.pdf' download="cv">Download CV</DownloadButton>
        </div>
      </div>
      <Animation animationPath={animationPath} />
    </div>
  )
}
