import React from "react";
import platformstyles from "@/styles/Platform.module.css";
import Image from "next/image";

const Platform = () => {
  return (
    <section className={platformstyles.platform}>
      <div className={"row"}>
        <div className={`${platformstyles.platform__container} container`}>
          <span className={platformstyles.platform__use}>Platform</span>
          <h2 className={platformstyles.platform__h2}>
            The Balance AI Business Intelligence Platform
          </h2>
          <span className={platformstyles.platform__databring}>
          Revolutionizing Professional Business Analytics for Every Business Owner.
          </span>
          <div className={platformstyles.platform__boxes}>
            <div className={platformstyles.platform__box}>
              <figure className={platformstyles.platform__boxicon}>
                <Image src="/icon-succeed-with-ai.svg" className={platformstyles.platform__boxiconimg} width={50} height={50} />
              </figure>
              <h3 className={platformstyles.platform__h3}>Succeed With AI</h3>
              <p className={platformstyles.platform__p}>
                Balance AI transcends automation—our platform learns, adapts,
                and evolves to drive greater profits and deeper engagement for
                your enterprise.
              </p>
            </div>
            <div className={platformstyles.platform__box}>
              <figure className={platformstyles.platform__boxicon}>
                <Image src="/icon-succeed-with-ai.svg" className={platformstyles.platform__boxiconimg} width={50} height={50} />
              </figure>
              <h3 className={platformstyles.platform__h3}>
                All Your Data, In One Place
              </h3>
              <p className={platformstyles.platform__p}>
                Connect all your trusted business data with your product data to
                understand the real impact on your marketing efforts, finances,
                support, NPS, and more.
              </p>
            </div>
            <div className={platformstyles.platform__box}>
              <figure className={platformstyles.platform__boxicon}>
                <Image src="/icon-succeed-with-ai.svg" className={platformstyles.platform__boxiconimg} width={50} height={50} />
              </figure>
              <h3 className={platformstyles.platform__h3}>
                Business Analytics Simplified
              </h3>
              <p className={platformstyles.platform__p}>
                Break down silos by unifying all your key metrics across every
                team into one, self-serve, platform simplifying analysis &
                providing expert insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
