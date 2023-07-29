import TechIcon from '@/components/techIcon/techIcon'
import classes from './experience.module.css'
import Image from 'next/image'

export default function Experience() {
  return (
    <div className='secondarySection'>
      <div className={classes.container}>
        <Image className={classes.profileImage} src="/images/me.jpg" alt="Izzy Logo" width={350} height={350} priority />
        <div>
          <p className={classes.text}>
            Full Stack software developer with more than 4 years of experience.
            <br/><br/>
            Currently working at Wiris developing digital solutions for Math and Science. TypeScript, Node.js, React.js and Docker are some of the many technologies that I use in my day to day with my professional and personal projects.
            <br/><br/>
            Graduated in Videogame Production and Development I also love to share my own creasingted resources to the Unity community.
          </p>
          <div className={classes.techIcons}>
            <TechIcon iconPath={'/tech/JavaScript.svg'} iconAlt={'JavaScript Icon'} />
            <TechIcon iconPath={'/tech/TypeScript.svg'} iconAlt={'TypeScript Icon'} />
            <TechIcon iconPath={'/tech/Next.js.svg'} iconAlt={'Next.js Icon'} />
            <TechIcon iconPath={'/tech/React.svg'} iconAlt={'React Icon'} />
            <TechIcon iconPath={'/tech/Docker.svg'} iconAlt={'Docker Icon'} />
            <TechIcon iconPath={'/tech/CSharp.svg'} iconAlt={'CSharp Icon'} />
            <TechIcon iconPath={'/tech/HTML5.svg'} iconAlt={'HTML5 Icon'} />
            <TechIcon iconPath={'/tech/CSS3.svg'} iconAlt={'CSS3 Icon'} />
          </div>
        </div>
      </div>
    </div>
  )
}
