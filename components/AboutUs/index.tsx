import React from "react";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutus} id="about-us">
      <div className="mx">
        <section className={styles.aboutus_wrapper}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className="col-md-12">
                <div className={styles.block_text}>
                  <h3 className="block_title mb-8">
                    Why You must Support Vikhan Inu?
                  </h3>
                  <p className="mb-16 mt-16">
                    Vikhan Inu Started as an experimental community yield
                    farming and quickly grew to a fully supportive community of
                    crypto-currency enthusiast. Our mission is to foster
                    Crypto-Currency adoption across borders by addressing some
                    major factors that affects the global crypto-currency
                    adoption.
                    <br /> A deflationary token launched on Binance Smart Chain
                    with a unique smart MINTING feature and LIMITED supply of
                    100T Vikhan Inu.
                  </p>
                  <hr />
                  COMMUNITY YIELD FARMING TOKEN in Short &#34;Vikhan Inu&#34; is
                  100% backed by its community and strong team of experienced
                  developers and crypto enthusiasts.
                  <p></p>
                </div>
              </div>
            </div>
            <div
              className={styles.about_card}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className={styles.choose__box} data-aos="fade-up">
                <div className={styles.choose__box_icon}>
                  <div className={styles.icon}>
                    <span className="icon-vuesax"></span>
                  </div>
                  <div className={styles.content}>
                    <a href="#" className="mb-8">
                      RUG-PULL PROOF
                    </a>
                    <p className="mb-16 mt-5">
                      Vikhan Inu is 100% Rug-Pull free, token sales totally
                      managed by our <span>sophisticated</span> contract which
                      automatically locks the liquidity, assigning only 7.5% to
                      project development and expansion.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.choose__box} data-aos="fade-up">
                <div className={styles.choose__box_icon}>
                  <div className={styles.icon}>
                    <span className="icon-token"></span>
                  </div>
                  <div className={styles.content}>
                    <a href="#" className="mb-8">
                      COMMUNITY REWARD
                    </a>
                    <p className="mb-16 mt-5">
                      Backed by the community, Vikhan Inu rewards its community
                      in return through a unique smart minting which
                      redistribute up to 35% of tokens sales back to the
                      community.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.choose__box} data-aos="fade-up">
                <div className={styles.choose__box_icon}>
                  <div className={styles.icon}>
                    <span className="icon-startup"></span>
                  </div>
                  <div className={styles.content}>
                    <a href="#" className="mb-8">
                      SELF PROVIDING LIQUIDITY
                    </a>
                    <p className="mb-16 mt-5">
                      Vikhan Inu utilizes a unique approach to create and grow
                      liquidity through the community reward program, The
                      smart-minting [Vikhan Inu farm] is the SELF PROVIDING
                      LIQUIDITY of this project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
