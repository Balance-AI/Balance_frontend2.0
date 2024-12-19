import React from "react";
import Prodstyles from "../../styles/Prodstyles.module.css";

export default function Prodinfo() {
  return (
    <section className={Prodstyles.prodinfo}>
      <div className={Prodstyles.prodinfo__row}>
        <span className={Prodstyles.prod__use}>Use Cases</span>
        <h2 className={Prodstyles.prod__h2}>Lorem ipsum dolor + De</h2>
        <div className={Prodstyles.prodinfo__container}>
          <div className={Prodstyles.prodinfo__buttons}>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>AI</button>
          </div>
        </div>
        {/* <div className={Prodstyles.prodinfo__lefthalf}>

                </div> */}
      </div>
    </section>
  );
}
