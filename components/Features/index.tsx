import React from "react";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className={styles.features} id="smart-mint">
      <div className="mx pad">
        <section className={styles.features_wrapper} id="features">
          <div className={styles.container}>
            <div className={styles.block_header}>
              <h3 className="block_title mb-8">Why choose our Token?</h3>
              <p className="mb-16 mt-16">
                Vikhan Inu is the world first platform to reward holders
                directly from ICO while sustaining its liquidity at the same
                time preventing any possible rug-pull.
              </p>
            </div>
            <div className={styles.features_card_wrapper}>
              <div
                className={styles.features_card}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className={styles.icon}>
                  <span className="icon-security-safe"></span>
                </div>
                <div className={styles.features_content}>
                  <a href="#">Reliable, tamper-proof network</a>
                  <p className="mb-16 mt-10">
                    The Blockchain Technology secures the algorithm, therefore
                    nobody, even the developer can not interfere, cancel, or
                    alter your transactions.
                  </p>
                </div>
              </div>
              <div
                className={styles.features_card}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className={styles.icon}>
                  <span className="icon-code1"></span>
                </div>
                <div className={styles.features_content}>
                  <a href="#"> Token Sales by SmartContract</a>
                  <p className="mb-16 mt-10">
                    The smart contract code is open source, and anyone anytime
                    can observe the entire transaction history. This ensures
                    fair accountability conditions to rely on.
                  </p>
                </div>
              </div>
              <div
                className={styles.features_card}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className={styles.icon}>
                  <span className="icon-lamp-charge"></span>
                </div>
                <div className={styles.features_content}>
                  <a href="#">
                    An Intuitive Approach <br /> To Promote Adoption
                  </a>
                  <p className="mb-16 mt-10">
                    Everyone venturing into the Crypto-Currency has one thing in
                    mind `<b>What&#39;s in it for me? </b>`. That&#39;s exactly
                    what Vikhan Inu answers to while ensuring long term
                    sustainability.{" "}
                  </p>
                </div>
              </div>
              <div
                className={styles.features_card}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className={styles.icon}>
                  <span className="icon-key"></span>
                </div>
                <div className={styles.features_content}>
                  <a href="#">FULLY AUDITED CONTRACTS</a>
                  <p className="mb-16 mt-10">
                    Vikhan Inu token contract and the Smart-Mint contract have
                    been fully audited by reliable 3rd parties auditing firms
                    [DessertFinance &amp; SolidProof].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
