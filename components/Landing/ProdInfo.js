import React, { useState } from "react";
import Prodstyles from "../../styles/Prodstyles.module.css";
import Image from "next/image";

export default function Prodinfo() {
  const [content, setContent] = useState("AI");
  const [activeButton, setActiveButton] = useState("AI");

  const handleButtonClick = (newContent) => {
    setContent(newContent);
    setActiveButton(newContent);
  };

  return (
    <section className={Prodstyles.prodinfo}>
      <div className="row">
        <div className={`${Prodstyles.prodinfo__container} container`}>
          <span className={Prodstyles.prod__use}>Use Cases</span>
          <h2 className={Prodstyles.prod__h2}>Centralize All Your Data + AI</h2>
          <div className={Prodstyles.prodinfo__stagelight}>
            <div className={Prodstyles.prodinfo__buttons}>
              {[
                "AI",
                "Analytics",
                "Integrations",
                "Management",
                "Governance",
                "Data Storage",
              ].map((item) => (
                <button
                  key={item}
                  className={`${Prodstyles.prodinfo__button} ${
                    activeButton === item ? Prodstyles.active : ""
                  }`}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={Prodstyles.prodinfo__frontboard}>
              <div className={Prodstyles.prodinfo__frontboard__left}>
                {content === "AI" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Enhance Analysis Through Seamless Conversation
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Business Analytics is an essential process that directly
                      correlates to the success of every business. Deriving key
                      insights hidden in data can be incredibly time consuming
                      and requires years of technical experience. Balance AI
                      eliminates this problem for business owners providing
                      industry standard insights through guided conversation.
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Instantly Receive Any Desired KPI Metric on Command.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Generate All Possible Graphs & Visualizations Using
                        Proprietary Data.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Build Strategy through Highly Intuitive Insight Analysis
                        & Risk Management Alerts.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
                {content === "Analytics" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Aesthetic Visualizations Leading To Significant Impact
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Balance AI consolidates all your enterprise’s financial &
                      marketing data into simple, concise visualizations. Our
                      platform optimizes to highlight the most important KPIs
                      for your specific business and industry. No need to sort
                      through multiple softwares to understand business
                      performance, all you need is Balance AI.
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Our Analytics Software Utilizes Historical Data to offer
                        Predictive Insights & Reports.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Seamless Data Exploration & KPI dashboard customization.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Expert User Experience Design allowing for unseamed
                        platform navigation.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
                {content === "Integrations" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Connect To All Platforms Your Business Utilities
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Empower your analytics with seamless integration of all
                      your business data. Connect to every platform your company
                      operates on with just one click, supporting all major
                      platforms for businesses of every type.
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Effortlessly integrate with all major platforms your
                        business relies on.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Universal compatibility ensures businesses across
                        industries can centralize their data and uncover
                        valuable insights.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Easily add or manage new integrations as your business
                        grows.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
                {content === "Management" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Keep Track of all Projects and Team Members
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Effortlessly track all projects, deadlines, and team
                      members' tasks with a centralized, user-friendly platform
                      designed for efficient collaboration
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Centralized hub for organizing and managing all project
                        details.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Easily assign tasks, track progress, and ensure
                        accountability across teams.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Receive instant updates on milestones, deadlines, and
                        task completions.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
                {content === "Governance" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Security at the Highest Level
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Ensure robust data security and compliance with a unified
                      governance model for managing structured and unstructured
                      data across your ecosystem. Unlock actionable insights
                      tailored to your business's unique attributes, people, and
                      priorities, all while safeguarding sensitive information.
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Protect sensitive data with Balance AI guaranteed
                        security measures.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Simplify management using a unified governance framework
                        across your entire data ecosystem.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Gain AI tailored insights aligned with your business's
                        priorities, people, and unique data characteristics.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
                {content === "Data Storage" && (
                  <>
                    <h3 className={Prodstyles.prodinfo__h3}>
                      Scalable data storage at an unbeatable price
                    </h3>
                    <p className={Prodstyles.prodinfo__p}>
                      Our platform efficiently hosts large volumes of company
                      data at a highly competitive price, securely storing
                      historical data and ensuring easy, quick access whenever
                      needed. Enjoy cost-effective data management with seamless
                      retrieval and scalability.
                    </p>
                    <ul className={Prodstyles.prodinfo__list}>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Cost-effective data hosting for large volumes of company
                        data.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Historical data is securely stored and easily accessible
                        whenever needed.
                      </li>
                      <li className={Prodstyles.prodinfo__listitem}>
                        Retrieve stored data quickly, ensuring seamless access
                        for efficient business operations.
                      </li>
                    </ul>
                    <div
                      className={Prodstyles.prodinfo__frontboard__leftbuttons}
                    >
                      <a
                        href="#"
                        className={`${Prodstyles.prodinfo__frontboard__leftbutton} bai__button bai__button--black bai__button--focus `}
                      >
                        Experience Demo
                      </a>
                      <a
                        href="#"
                        className={Prodstyles.prodinfo__frontboard__leftbutton2}
                      >
                        In-Depth AI Process Description
                      </a>
                    </div>
                  </>
                )}
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
