import TechIcon from "@/components/techIcon/techIcon";
import classes from "./experience.module.css";
import Image from "next/image";
import Section from "../../ui/section/section";

export default function Experience() {
  return (
    <Section>
      <div className={`${classes.experienceWrapper}`}>
        <Image
          className={classes.profileImage}
          src="/images/me.jpg"
          alt="Izzy Logo"
          width={360}
          height={360}
          priority
        />
        <div>
          <p className={classes.text}>
            Full Stack software developer with more than 4 years of experience.
            Based in Barcelona.
            <br />
            <br />
            Currently working at Wiris developing digital solutions for Math and
            Science. TypeScript, Node.js, React.js and Docker are some of the
            many technologies that I use in my day to day with my professional
            and personal projects.
            <br />
            <br />
            Graduated in Videogame Production and Development I also love to
            share my own created resources to the Unity community.
          </p>
          <div className={classes.techIcons}>
            <TechIcon
              iconPath={"/tech/JavaScript.svg"}
              iconAlt={"JavaScript Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/TypeScript.svg"}
              iconAlt={"TypeScript Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/Next.js.svg"}
              iconAlt={"Next.js Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/React.svg"}
              iconAlt={"React Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/Unity.svg"}
              iconAlt={"Unity Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/Docker.svg"}
              iconAlt={"Docker Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/CSharp.svg"}
              iconAlt={"CSharp Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/HTML5.svg"}
              iconAlt={"HTML5 Icon"}
              dark={true}
            />
            <TechIcon
              iconPath={"/tech/CSS3.svg"}
              iconAlt={"CSS3 Icon"}
              dark={true}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
