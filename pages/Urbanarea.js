// // pages/Question1.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import TextBox from "../components/TextBox";
import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import styles from "../styles/Dropdown.module.css";

export default function Urbanarea() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);8
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const UrbanareaOptions = [
    { label: "Technical", value: "Technical" },
    { label: "Service", value: "Service" },
    { label: "Problem Solving", value: "Problem Solving" },
    { label: "Sales and Marketing", value: "Sales and Marketing" },
    {
      label: "Education and Administration",
      value: "Education and Administration",
    },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Technical") {
      router.push("/TechnicalU");
    } else if (dropdownValue === "Service") {
      router.push("/ServiceU");
    } else if (dropdownValue === "Problem Solving") {
      router.push("/ProblemSolvingU");
    } else if (dropdownValue === "Sales and Marketing") {
      router.push("/SalesMarketingU");
    } else if (dropdownValue === "Education and Administration") {
      router.push("/EducationAdministrationU");
    }
  };

  return (
    <Layout Urbanarea>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="grid grid-cols-1">
        <h1 className="text-yellow-200 text-5xl ... font-serif ...absolute bottom-3 right-5 w-auto ... ">
          Question 3
        </h1>
        {/* <p className="text-yellow-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-rose-300 font-serif text-2xl absolute left-60  transform -translate-x-1/4 relative h-20 absolute inset-20 ... ">
          Which skill are you interested in?
        </h1>
        <Dropdown options={UrbanareaOptions} onChange={handleDropdownChange} />
        <button
          className="text-yellow-200 text-3xl ... inset-x-0 bottom-10 h-16 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

        {/* <p>Selected option: {dropdownValue}</p> */}

        {/* <TextBox type="text" value0={textBoxValue} onChange={handleTextBoxChange} /> */}

        {/* <div>
          <a href={"/third"}>
            <button className="text-yellow-200 absolute inset-x-0 bottom--30 h-16 ... text-3xl ..." >
              Submit
            </button>
          </a>{" "}
        </div> */}
      </section>
    </Layout>
  );
}
