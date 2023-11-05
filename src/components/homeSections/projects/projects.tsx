import classes from "./projects.module.css";
import Card from "@/components/card/card";

// [TODO] move card data to a file or DB.
const cardMathType: CardInfo = {
  title: "MathType Integrations for Web",
  description:
    "The official JavaScript library for MathType, the leading formula editor and equation writer for the web by Wiris.",
  longDescription:
    "This repository contains the source code of the MathType plugins for the most popular HTML editors, such as CKEditor, Froala, and TinyMCE. They are available from the npm directory. It also provides a collection of working examples, including step-by-step information, on how to integrate MathType in vanilla HTML, Angular, React projects, or even your own custom web editor.",
  image: "/projects/mathtype.png",
  techIcons: [
    "TypeScript.svg",
    "JavaScript.svg",
    "React.svg",
    "HTML5.svg",
    "CSS3.svg",
  ],
  link: "https://github.com/wiris/html-integrations",
};

const cardPorfolio: CardInfo = {
  title: "Web Portfolio",
  description:
    "Even this web page powered by Next.js is open source. Take a look at the code.",
  longDescription:
    "Take a look at the source code of this web portfolio. It has been developed using Next.js 13 along with TypeScript.",
  image: "/projects/porfolio.png",
  techIcons: ["Next.js.svg", "TypeScript.svg"],
  link: "https://github.com/IzzyCap/izzy-web",
};

const cardMinter: CardInfo = {
  title: "Mutable NFTs minter",
  description:
    "This tool allow you to create mutable NFTs on the powerful and sustainable Algorand blockchain.",
  longDescription:
    "This tool allow you to create mutable NFTs on the powerful and sustainable Algorand blockchain.",
  image: "/projects/algorand.png",
  techIcons: ["TypeScript.svg"],
  link: "https://github.com/IzzyCap/algorand-arc19-auto-mint",
};

const cardBeepboy: CardInfo = {
  title: "Beepboy Survive",
  description:
    "Stand alongside Beepboy in a battle for survival against the relentless and malevolent forces of darkness.",
  longDescription:
    "Stand alongside Beepboy in a battle for survival against the relentless and malevolent forces of darkness.",
  techIcons: ["Unity.svg", "CSharp.svg"],
  image: "/projects/beepboy.png",
  link: "https://izzycap.itch.io/beepboy-survive-browser-edition",
};

const cardLolo: CardInfo = {
  title: "Lolo",
  description:
    "Addictive rhythm game, where you play as a goofy slime, with the mission to collect three golden eighth notes scattered in three different levels.",
  longDescription:
    "Addictive rhythm game, where you play as a goofy slime, with the mission to collect three golden eighth notes scattered in three different levels.",
  techIcons: ["Unity.svg", "CSharp.svg"],
  image: "/projects/lolo.png",
  link: "https://team-alpaca.itch.io/lolo",
};

export default function Projects() {
  return (
    <>
      <section className={classes.projectWrapper}>
        <h1>Projects</h1>
        <div className={classes.projectsContainer}>
          <Card cardInfo={cardMathType} />
          <Card cardInfo={cardPorfolio} />
          <Card cardInfo={cardBeepboy} />
          <Card cardInfo={cardLolo} />
          <Card cardInfo={cardMinter} />
        </div>
      </section>
    </>
  );
}
