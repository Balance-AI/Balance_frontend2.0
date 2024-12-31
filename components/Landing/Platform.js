import React from "react";
import platformstyles from "../../styles/Platform.module.css";

const Platform = () => {
  return (
    <section className={platformstyles.platform}>
      <div className={"row"}>
        <div className={"container"}>
          <span className={platformstyles.platform__use}>Use Cases</span>
          <h2 className={platformstyles.platform__h2}>Centralize All Your Data + AI</h2>
        </div>
      </div>
    </section>
  );
};

export default Platform;
