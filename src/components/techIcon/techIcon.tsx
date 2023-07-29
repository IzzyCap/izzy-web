import Image from 'next/image'
import classes from './techIcon.module.css'

interface TechIconProps {
  iconPath: string;
  iconAlt: string;
}

const TechIcon: React.FC<TechIconProps> =  ({ iconPath, iconAlt }) => {
  return (
    <div className={classes.techItem}>
      <Image src={iconPath} alt={iconAlt} width={30} height={30}/>
    </div>
  )
};

export default TechIcon;
