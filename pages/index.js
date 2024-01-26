// pages/index.js
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";



export default function Home() {
  return (
    <Layout className="bg-blue-500 " home>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="absolute items-center justify-center top-0 left-0 w-full h-full flex bg-black-100">
        <p className="text-center text-6xl  font-serif font-bold text-white tracking-wide ..  ">
          UNBOUND
          <p className="text-base text-base  font-serif font-bold text-lime-200	">
            GO BEYOND DEGREES!
          </p>
        </p>

        <a href={"/aboutpage"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            ABOUT
          </button>
        </a>
        <a href={"/newpage"}>
          <button className="text-cyan-200  text-3xl font-MONO  absolute inset-x-0 bottom-20 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            QUESTIONNAIRE
          </button>
        </a>

       
      </div>
    </Layout>
  );
}

{
  /* <img
          className="absolute -top-20 -right-20"
          src="/picture2.jpg"
          width={500}
          height={500}
        />

        <img
          className="absolute -bottom-20 -left-20"
          src="/picture.jpg"
          height={400}
          width={400}
        /> */
}
