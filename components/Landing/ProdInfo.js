import React from "react";
import Prodstyles from "../../styles/Prodstyles.module.css";
import Image from "next/image";

export default function Prodinfo() {
  return (
    <section className={Prodstyles.prodinfo}>
      <div className="row">
        <div className={`${Prodstyles.prodinfo__container} container`}>
          <span className={Prodstyles.prod__use}>Use Cases</span>
          <h2 className={Prodstyles.prod__h2}>Centralize All Your Data + AI</h2>
          <div className={Prodstyles.prodinfo__stagelight}>
            <div className={Prodstyles.prodinfo__buttons}>
              <button className={Prodstyles.prodinfo__button}>AI</button>
              <button className={Prodstyles.prodinfo__button}>
                Governance
              </button>
              <button className={Prodstyles.prodinfo__button}>
                Warehousing
              </button>
              <button className={Prodstyles.prodinfo__button}>ETL</button>
              <button className={Prodstyles.prodinfo__button}>
                Data Sharing
              </button>
              <button className={Prodstyles.prodinfo__button}>
                Orchestration
              </button>
            </div>
            <div className={Prodstyles.prodinfo__frontboard}>
              <div className={Prodstyles.prodinfo__frontboard__left}>
                <h3 className={Prodstyles.prodinfo__h3}>
                  Build better AI with a data-centric approach
                </h3>
                <p className={Prodstyles.prodinfo__p}>
                  Great models are built with great data. With BalanceAI,
                  lineage, quality, control and data privacy are maintained
                  across the entire AI workflow, powering a complete set of
                  tools to deliver any AI use case.
                </p>
                <ul className={Prodstyles.prodinfo__list}>
                  <li className={Prodstyles.prodinfo__listitem}>
                    Create, tune and deploy your own generative AI models
                  </li>
                  <li className={Prodstyles.prodinfo__listitem}>
                    Automate experiment tracking and governance
                  </li>
                  <li className={Prodstyles.prodinfo__listitem}>
                    Deploy and monitor models at scale
                  </li>
                </ul>
                <div className={Prodstyles.prodinfo__frontboard__leftbuttons}>
                  <a href="#" className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}>
                    See how
                  </a>
                  <a
                    href="#"
                    className={Prodstyles.prodinfo__frontboard__leftbutton2}
                  >
                    Watch demo
                  </a>
                </div>
              </div>
              <div className={Prodstyles.prodinfo__frontboard__right}>
                <Image
                  src={"/productscreen-static-ai.png"}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={Prodstyles.prodinfo__lefthalf}>

                </div> */}
      </div>
    </section>
  );
}
