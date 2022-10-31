import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Menu from "public/icons/menu.svg";
import Close from "public/icons/close.svg";
import DiscordIcon from "public/icons/discord.svg";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onHashChanged = () => {
      setSidebar(false);
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  useEffect(() => {
    const handleOnScroll = () => {
      if (document.documentElement.scrollTop > 90) return setScrolled(true);
      setScrolled(false);
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  const renderLinks = (
    <div className={styles.links}>
      <a href="#">Home</a>
      <a href="#about-us">Ecosystem</a>
      <a href="#smart-mint">Smart Mint</a>
      <a href="#roadmap">Road Map</a>
      <a href="#">Light Paper</a>
    </div>
  );

  return (
    <Fragment>
      <header
        className={styles.header}
        style={{ background: scrolled ? "#000" : "#000" }}
      >
        <div className="mx pad">
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <div onClick={() => router.push("/")}>
                <Image src={"/logo.JPG"} alt="logo" width={100} height={90} />
              </div>
            </div>
            {renderLinks}
            <div className={styles.headerContainer_controls}>
              <a
                href="https://discord.gg/66jbUWxA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon />
                <span style={{ color: "black" }}>JOIN COMMUNITY</span>
              </a>
              <div
                className={styles.menu}
                onClick={() => setSidebar((s) => !s)}
              >
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <h3 className="block_title">Menu</h3>
        {renderLinks}
        <button className="btn-close" onClick={() => setSidebar(false)}>
          Close Menu
        </button>
      </div>
    </Fragment>
  );
};

export default Header;
