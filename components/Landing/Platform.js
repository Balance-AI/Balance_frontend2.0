import React from "react";
import platformstyles from "../../styles/Platform.module.css";

const Platform = () => {
  return (
    <section className={platformstyles.platform}>
      <div className={"row"}>
        <div className={`${platformstyles.platform__container} container`}>
          <span className={platformstyles.platform__use}>Platform</span>
          <h2 className={platformstyles.platform__h2}>
            The BalanceAI Data Intelligence Platform
          </h2>
          <span className={platformstyles.platform__databring}>
            BalanceAI brings AI to your data to help you bring AI to the world
          </span>
          <div className={platformstyles.platform__boxes}>
            <div className={platformstyles.platform__box}>Boxie 1</div>
            <div className={platformstyles.platform__box}>Boxie 1</div>
            <div className={platformstyles.platform__box}>Boxie 1</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
