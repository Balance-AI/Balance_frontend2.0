import analyticsstyles from "../styles/Analytics.module.css";

export default function Analytics() {
  return (
    <div className="row">
      <div className={`${analyticsstyles.analytics__container} container`} >
        <h1 className={analyticsstyles.analytics__h1}>Intuitive Analytics Dashboard</h1>
        <div className={analyticsstyles.dashboard__wrap}>
          <figure className={analyticsstyles["analytics__img--wrap"]}>
            <img src="/analyticsimg1.svg" alt="Description of Image" /> AI
            Projected Revenue Forecast Financial Metrics
          </figure>
          <figure className={analyticsstyles["analytics__img--wrap"]}>
            <img src="/analyticsimg2.png" alt="Description of Image" /> AI
            Marketing Metrics
          </figure>
          <figure className={analyticsstyles["analytics__img--wrap"]}>
            <img src="/analyticsimg3.png" alt="Description of Image" /> AI
            Projected Revenue Forecast
          </figure>
        </div>
      </div>
    </div>
  );
}
