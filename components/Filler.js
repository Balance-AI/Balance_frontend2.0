import Link from "next/link";
import logo from "../public/Logo.svg";
import fillerstyles from "../styles/Filler.module.css";
import Image from "next/image";



export default function Filler() {
    return(  
        <section className={fillerstyles.filler}>
      <div className={fillerstyles.filler__content}>
        <div className={fillerstyles.filler__text}>
          <h1 className={fillerstyles.filler__heading}>Manage Cash Flow & Effectively Utilize Capital</h1>
          <h2 className={fillerstyles.filler__subheading}>Understand All Your Business Data Insights Through Our Proprietary Analytics Dashboards, AI Powered Reports & Forecasts</h2>
          <div className={fillerstyles.filler__buttonContainer}>
            <button className={fillerstyles.filler__button}>Learn More</button>
          </div>
        </div>
        <div className={fillerstyles.filler__imageContainer}>
          <Image
            alt="Business Cash Flow"
            className={fillerstyles.filler__image}
            height={250}
            width={333}
            src="/BusinessCashFlow.svg"
          />
        </div>
      </div>

      <div className={fillerstyles.filler__content}>
        <div className={fillerstyles.filler__imageContainer}>
          <Image
            alt="Product Image"
            className={fillerstyles.filler__image}
            height={250}
            width={333}
            src="/CuttingEdge.svg"
          />
        </div>
        <div className={fillerstyles.filler__text}>
          <h1 className={fillerstyles.filler__heading}>Cutting Edge Analytics</h1>
          <p className={fillerstyles.filler__description}>With accurate information, track all of your profits from each platform</p>
          <div className={fillerstyles.filler__buttonContainer}>
            <button className={fillerstyles.filler__button}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
    

    );
}