import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (

      <section>
        {
          <p className="text-green-500 font-serif ... text-lg .. tracking-normal ... leading-relaxed ... text-center ... ">
            The invisible barrier that comes at every turn for workers without a
            bachelor’s degree Millions of workers with in-demand skills and
            experience, overlooked for higher-wage jobs because they don’t have
            a bachelor’s degree. The invisible barrier that comes at every turn
            for workers without a bachelor’s degree. This all stops now, Unbound
            helps these workers figure out their true passion and forces them to
            be limitless and pursue any job they want. Tear the paper ceiling
            today!{" "}
          </p>
        }
      </section>
  );
    };