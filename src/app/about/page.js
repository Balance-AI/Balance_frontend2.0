import aboutstyles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={`${aboutstyles.about__header} `}>
      <video
        src="https://cdn.vidzflow.com/v/H0LDXZjsnq_1080p_1703000142.mp4"
        autoPlay
        loop
        muted
      />
      <div className={aboutstyles["hero__video--lighting"]}></div>
      <div className="row">
        <div className="container">
          <h1>About Us</h1>
        </div>
        <div className={aboutstyles.home__heroheadline}>
          <div className={aboutstyles.home__hero1}>
            <div>Simplify</div>
          </div>
          <div className={aboutstyles.home__hero2}>
            <div>Bills</div>
          </div>
          <div className={aboutstyles.home__hero3}>
            <div>Amplify,</div>
          </div>
          <div className={aboutstyles.home__hero4}>
            <div className="overflow__none">Insight.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
