import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.scss";
import Header from "components/Header";
import Hero from "components/Hero";
import AboutUs from "components/AboutUs";
import Features from "components/Features";
import ContactUs from "components/ContactUs";
import Roadmap from "components/Roadmap";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Vikhan Inu | COMMUNITY YIELD FARMING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <AboutUs />
        <Features />
        <Roadmap />
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
