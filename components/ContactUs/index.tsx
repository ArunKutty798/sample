import React from "react";
import styles from "./ContactUs.module.scss";
import MailIcon from "public/icons/mail.svg";
import Telegram from "public/icons/telegram.svg";
import Twitter from "public/icons/twitter.svg";
import Facebook from "public/icons/facebook.svg";
import Youtube from "public/icons/youtube.svg";
import Tiktok from "public/icons/tiktok.svg";
import Linkedin from "public/icons/linkedin.svg";
import Instagram from "public/icons/Instagram.svg";
import Discord from "public/icons/discord.svg";

const ContactUs = () => {
  return (
    <div className={styles.contactus}>
      <div className="mx pad">
        <footer className={styles.footer}>
          <div className={styles.footer__top}>
            <div className={styles.container}>
              <div className={styles.content_left}>
                <h3 className="mb-16">Contact Us</h3>
                <p className="mb-16">
                  We are always open and we welcome and questions you have for
                  our team.{" "}
                </p>
                <ul className={styles.lists}>
                  <li>
                    <MailIcon />
                    <span>sales@Vikhan Inu.finance</span>
                  </li>
                  <li>
                    <MailIcon />
                    <span>
                      <a href="https://wa.me/447310564189">+44 7310 564189</a>{" "}
                      (WhatsApp Only){" "}
                    </span>
                  </li>
                </ul>
                <ul className={styles.lists_social}>
                  <li>
                    <a
                      href="https://www.facebook.com/groups/507996043992821"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/communityieldF"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/CommunityieldFarmchannel"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Telegram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UClqIS2rrUea2Z3TaH3MC6UA"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Youtube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@communityield"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Tiktok />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/smartis-limited/?viewAsMember=true"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/Vikhan Inu.finance/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/66jbUWxA"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Discord />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <p style={{ textAlign: "center" }}>
              © 2022. All rights reserved by <a href="#">SMARTIS.FINANCE</a>
            </p>
            <p style={{ textAlign: "center" }}>
              Developed by{" "}
              <a href="https://defutura.cloud" target="blank">
                Defutura Private Limited
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
