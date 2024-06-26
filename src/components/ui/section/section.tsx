import classes from "./section.module.scss";

type Props = {
  children: React.ReactNode;
};

// [TODO] make secondary section configurable
export default function Experience({ children }: Props) {
  return (
    <section className="secondarySection">
      <span className={`${classes.wave} ${classes.waveTop}`}></span>
      <div>{children}</div>
      <span className={`${classes.wave} ${classes.waveBottom}`}></span>
    </section>
  );
}
