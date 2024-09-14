// import Image from "next/image";
import balancestyles from "../../styles/BalanceHeader.module.css";

export default function BalanceHeader() {
  return (
    <section className={`${balancestyles.balance} uplift`}>
      {/* <figure className={balancestyles.balancefigure}>
        <img src="/balanceheadermain.svg" width={500} height={800} />
      </figure> */}
      <div className={balancestyles.balanceheaderbox}>
        <button className={balancestyles.balanceheaderbutton} role="button">
          Premier Business Analytics Solution to Turbocharge Business Growth
        </button>
        <div className={balancestyles.demo__encap}>
          <button className={balancestyles.balanceheaderbutton2} role="button">
            Book a Demo
            {/* Book a Demo */}
          </button>
          <button className={balancestyles.balanceheaderbutton3} role="button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
