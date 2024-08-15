import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={herostyles.hero}>
      <div className={`${herostyles.hero__row} row`}>
        <div className={`${herostyles.hero__frame} container`}>
          <div className={herostyles.hero__left}>
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
            </div>
          </div>
          <div className={herostyles.hero__right}>
            <figure className={herostyles["hero__right--img"]}>
              {/* <img src="/heroiphone.png" alt="Description of Image" /> */}
              <img src="/heroiphone2.png" alt="Description of Image" />
            </figure>
            <img
              className={herostyles.hero__taskbar}
              src="/herotaskbarimg.svg"
              alt="Description of Image"
            />
            <img
              className={herostyles.hero__graph1}
              src="/herograph.svg"
              alt="Description of Image"
            />
            <img
              className={herostyles.hero__graph2}
              src="/herograph2.svg"
              alt="Description of Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
