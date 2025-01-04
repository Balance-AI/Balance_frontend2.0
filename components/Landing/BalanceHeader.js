// import Image from "next/image";
import AssessmentIcon from '@mui/icons-material/Assessment';
import Image from "next/image";
import balancestyles from "../../styles/BalanceHeader.module.css";

export default function BalanceHeader() {
  return (
    <section className={`${balancestyles.balance} uplift`}>
      <div className={balancestyles.balance__row}>
        <div className={balancestyles.header__lefthalf}>
          <h1 className={balancestyles["header__h1"]}>Balance AI</h1>
          <p className={balancestyles["header__p"]}>Unlock valuable insights and drive impactful growth</p>
          <div className={`${balancestyles["header__caption--box"]}`}>
            <div className={`${balancestyles["header__caption--top"]}`}>
              {/* <img className={balancestyles["header__caption--img"]} src="balaiheaderimg.png" /> */}
              <AssessmentIcon style={{ fontSize: 80, fill: "#FFC635" }} /> {/* Example usage of the icon */}
              <p className={balancestyles["header__caption--p"]}>Connect to all your business platforms; Leverage AI to
              consolidate, visualize and execute on actionable insights.</p>
            </div>
            <div className={balancestyles["header__caption--bottom"]}>
              <button className={balancestyles["header__caption--getstarted"]}>Get started</button>
              <button className={balancestyles["header__caption--account"]}>Have an account? Sign in</button>
            </div>
          </div>
        </div>
        <div className={balancestyles.header__righthalf}></div>
      </div>
    </section>
  );
}
