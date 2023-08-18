import Image from 'next/image'
import classes from './techIcon.module.css'

interface TechIconProps {
  iconPath: string;
  iconAlt: string;
  dark: boolean;
}

const TechIcon: React.FC<TechIconProps> =  ({ iconPath, iconAlt, dark = false }) => {
  return (
    <div className={`${classes.techItem} ${dark ? classes.dark : ''}`}>
      <Image src={iconPath} alt={iconAlt} width={30} height={30}/>
    </div>
  )
};

export default TechIcon;
