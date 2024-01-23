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

export default function Question1() {
  // const [textBoxValue, setTextBoxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState(""); // State for dropdown value
  const router = useRouter();

  // const handleTextBoxChange = (e) => {
  //   setTextBoxValue(e.target.value);
  // };

  const handleDropdownChange = (selectedOption) => {
    setDropdownValue(selectedOption);
  };

  const Question1Options = [
    { label: "Yes", value: "Disabled" },
    { label: "No", value: "Not Disabled" },
    // { label: "Neck mobility", value: "Neck mobility" },
    // { label: "Hip flexibility", value: "Hip flexibility" },
  ];

  const handleSubmit = () => {
    if (dropdownValue === "Disabled") {
      router.push("/Disabled");
    } else if (dropdownValue === "Not Disabled") {
      router.push("/NDisabled");
    }
    // }  else if (dropdownValue === "Neck mobility") {
    //   router.push("/page-for-option-Neck mobility");
    // } else if (dropdownValue === "Hip flexibility") {
    //   router.push("/page-for-option-Hip flexibility");
    // }
  };

  return (
    <Layout Question1>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div>
      <section className="grid grid-cols-1">
        <h1 className="text-lime-200 text-5xl ... font-serif  ...absolute bottom-3 right-5 w-auto ...">
          Question 1
        </h1>
        {/* <p className="text-yellow-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 class="text-cyan-200 font-serif text-2xl text-center  transform -translate-x-1/4 relative h-20 absolute inset-20 ... ">
          Do you have any mobility challenges?
        </h1>
        <Dropdown options={Question1Options} onChange={handleDropdownChange} />
        <button
          className="text-lime-200 text-3xl ... inset-x-0 bottom-10 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
          onClick={handleSubmit}
        >
          NEXT
        </button>

        {/* <p>Selected option: {dropdownValue}</p> */}

        {/* <TextBox type="text" value0={textBoxValue} onChange={handleTextBoxChange} /> */}

        {/* <div>
          <a href={"/third"}>
            <button className="text-yellow-200 absolute inset-x-0 bottom--30 h-16 ... text-4xl ..." >
              Submit
            </button>
          </a>{" "}
        </div> */}
         <a href={"/"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">        

            Home
          </button>
        </a>
      
      </section>
      </div>
    </Layout>
  );
}

//  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...
