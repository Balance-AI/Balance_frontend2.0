import React from "react";
import Prodstyles from "../../styles/Prodstyles.module.css";
import Image from "next/image";

export default function Prodinfo() {
  return (
    <section className={Prodstyles.prodinfo}>
      <div className={Prodstyles.prodinfo__row}>
        <span className={Prodstyles.prod__use}>Use Cases</span>
        <h2 className={Prodstyles.prod__h2}>Lorem ipsum dolor + De</h2>
        <div className={Prodstyles.prodinfo__container}>
          <div className={Prodstyles.prodinfo__buttons}>
            <button className={Prodstyles.prodinfo__button}>AI</button>
            <button className={Prodstyles.prodinfo__button}>Governance</button>
            <button className={Prodstyles.prodinfo__button}>Warehousing</button>
            <button className={Prodstyles.prodinfo__button}>ETL</button>
            <button className={Prodstyles.prodinfo__button}>Data Sharing</button>
            <button className={Prodstyles.prodinfo__button}>Orchestration</button>
          </div>
          <div className={Prodstyles.prodinfo__frontboard}>
            <div className={Prodstyles.prodinfo__frontboard__left}>
                Left
            </div>
            <div className={Prodstyles.prodinfo__frontboard__right}>
                <Image src={"/productscreen-static-ai.png"} width={500} height={500}/>
            </div>
          </div>
        </div>
        {/* <div className={Prodstyles.prodinfo__lefthalf}>

                </div> */}
      </div>
    </section>
  );
}
