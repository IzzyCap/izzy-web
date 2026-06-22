import classes from "./description.module.css";
import dynamic from "next/dynamic";

const Animation = dynamic(() => import("@/components/animation/animation"), {
  ssr: false,
});

export default function Description() {
  const animationPath = "/animations/dev.json"; // Correct path to the animation JSON file

  return (
    <section className={classes.descriptionWrapper}>
      <div>
        <h1>Izzy Caparrós Salvà</h1>
        <br />
        <h2>
          Full Stack software developer with{" "}
          <span className="highlight-text">4+ years</span> of experience.
        </h2>
      </div>
      <Animation animationPath={animationPath} />
    </section>
  );
}
