import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={herostyles.hero}>
      <div className={herostyles.hero__frame}>
        <h1 className={herostyles["hero__frame--h1"]}>
          Cash Flow Made Easy for Creators
        </h1>
        <div className={herostyles.hero__interactive}>
          <div className={herostyles.email__form}>
            <input
              type="text"
              className={herostyles.email__input}
              placeholder="Your E-mail Address"
            />
            <button
              className={`${herostyles.started__button} bai__button--hover bai__button--focus`}
            >
              Get Started
            </button>
          </div>
          <button
            className={`${herostyles["hero__buttons--learn"]} bai__button--hover bai__button--focus`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
