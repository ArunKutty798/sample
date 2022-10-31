import React, { useEffect, useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

import styles from "./Hero.module.scss";

const Hero = () => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(true);
  }, []);
  const countdownRender = ({
    completed,
    days,
    minutes,
    seconds,
    hours,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <>
          <div data-value="Days">
            <span className="countdown__value" style={{ color: "black" }}>
              00
            </span>
          </div>
          <div data-value="Hours">
            <span className="countdown__value" style={{ color: "black" }}>
              00
            </span>
          </div>
          <div data-value="Minutes">
            <span className="countdown__value" style={{ color: "black" }}>
              00
            </span>
          </div>
          <div data-value="Seconds">
            <span className="countdown__value" style={{ color: "black" }}>
              00
            </span>
          </div>
        </>
      );
    } else {
      return (
        <>
          {days > 0 && (
            <div data-value="Days">
              <span className="countdown__value">
                {days < 10 ? `0${days}` : days}
              </span>
            </div>
          )}
          <div data-value="Hours">
            <span className="countdown__value">
              {hours < 10 ? `0${hours}` : hours}
            </span>
          </div>
          <div data-value="Minutes">
            <span className="countdown__value">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
          </div>
          <div data-value="Seconds">
            <span className="countdown__value">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.hero}>
      <div className="mx pad">
        <div className={styles["banner-top__content"]}>
          <h2 className={styles["title"]}>
            100% COMMUNITY OWNED &amp; <br /> RUG-PULL PROOF TOKEN
          </h2>
          <hr />
          <p className={styles["desc"]}>
            Vikhan Inu - Community Yield Farming the World&#39;s BEST Community
            Centered &amp; Powered Utility Token. a BEP20 token with a unique
            algorithm designed to provide value to its community while fostering
            Crypto Adoption through a Vibrant ECOSYSTEM.
          </p>
          <div className={styles.controls}>
            <button>Buy on Pancake</button>
            <button>Buy on Hotbit</button>
            <button>Copy contract</button>
          </div>
        </div>
        <div className={styles["banner-top__sale"]}>
          <div className={styles["sale-content"]}>
            <h3 className="block_title ">Vikhan Inu PUBLIC SALES STARTS IN!</h3>
            <div className={styles["countdown__timer"]}>
              {isTrue && (
                <Countdown date={1666475100000} renderer={countdownRender} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
