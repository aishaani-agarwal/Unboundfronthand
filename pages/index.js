import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react"; // Import useState
import { useEffect } from "react";

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <Layout home>
      {/* <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} /> */}
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <section className="grid grid-cols-1">
        <p className="text-rose-300 font-serif ... text-lg .. tracking-normal ... leading-relaxed ... text-center ... ">
          The invisible barrier that comes at every turn for workers without a 
          bachelor’s degree Millions of workers with in-demand skills and
          experience, overlooked for higher-wage jobs because they don’t have a
          bachelor’s degree. The invisible barrier
          that comes at every turn for workers without a bachelor’s degree. This
          all stops now, Unbound helps these workers figure out their true
          passion and forces them to be limitless and pursue any job they want.
          Tear the paper ceiling today!{" "}
        </p>

        <a href={"/newpage"}>
          <button className="text-yellow-200 absolute inset-x-0 bottom-13 h-16 ... text-4xl">
            Questionnaire
          </button>
        </a>
      </section>
    </Layout>
  );
}