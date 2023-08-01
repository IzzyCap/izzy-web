import classes from './projects.module.css'
import Card from '@/components/card/card'

export default function Projects() {
  return (   
    <div className={classes.container}>
      <h1>Projects</h1>
      <div className={classes.projectsContainer}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
