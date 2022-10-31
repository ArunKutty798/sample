import React from "react";

import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  return (
    <div className={styles.roadmap} id="roadmap">
      <div className="mx pad">
        <div className={styles.container}>
          <h3 className="block_title mb-8">Road map</h3>
          <div className={styles.roadmap_main}>
            <div
              className={styles.roadmap_box}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className={styles.time}>April 15, 2022</p>
              <h5 className="title">Concept</h5>
              <ul className={styles.list}>
                <li>Concept Generation</li>
                <li>Team Assemble</li>
              </ul>
            </div>
            <div
              className={styles.roadmap_box}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={styles.time}>May 26, 2022 - August 17, 2022</p>
              <h5 className="title">Phase I</h5>
              <ul className={styles.list}>
                <li>Community Building Started</li>
                <li>Company Registration in the UAE</li>
                <li>Office Acquired in Dubai</li>
                <li>Further Marketing</li>
              </ul>
            </div>
            <div
              className={styles.roadmap_box}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className={styles.time}>
                August 17, 2022 - September 12, 2022
              </p>
              <h5 className="title">Phase I</h5>
              <ul className={styles.list}>
                <li>Completion of Vikhan Inu token [TestNet]</li>
                <li>Completion of Smart-Mint Contract</li>
                <li>Further Test, Initial Contract Audit</li>
                <li>Further Test and Contract Improvement</li>
              </ul>
            </div>
            <div
              className={styles.roadmap_box}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={styles.time}>
                September 12, 2022 - September 30, 2022
              </p>
              <h5 className="title">Phase II</h5>
              <ul className={styles.list}>
                <li>Launching Vikhan Inu.finance</li>
                <li>White paper conpletion</li>
                <li>Launching Vikhan Inu Token Private Sales</li>
                <li>Launching Vikhan Inu Token Pre-Sales</li>
                <li>Building Liquidity Support on Pancakeswap</li>
                <li>Further Marketing Campaigns</li>
              </ul>
            </div>
            <div
              className={styles.roadmap_box}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className={styles.time}>
                October 5th, 2022 - December 7, 2022
              </p>
              <h5 className="title">Phase II</h5>
              <ul className={styles.list}>
                <li>Vikhan Inu token Public Sales Starts</li>
                <li>Vikhan Inu takes part of CRYPTO-EXPO in Dubai</li>
                <li>Launching Vikhan Inu Online Crypto-University</li>
                <li>Vikhan Inu Cars Award Ceremony to Leaders</li>
                <li>Vikhan Inu Listing on CoinGecko</li>
                <li>Vikhan Inu listing on Coin MarketCap</li>
              </ul>
            </div>
            <div
              className={styles.roadmap_box}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={styles.time}>December 7, 2022 - May 26, 2023</p>
              <h5 className="title">Phase III</h5>
              <ul className={styles.list}>
                <li>Further Ecosystem Expansion</li>
                <li>Vikhan Inu Wallet Launch</li>
                <li>Vikhan Inu DEX Launch</li>
                <li>Vikhan Inu E-commerce Launch</li>
                <li>Vikhan Inu Award Ceremony in Africa</li>
                <li>First Anniversary Event in Dubai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
