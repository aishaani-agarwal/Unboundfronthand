// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import FancyTextBox from "../components/TextBox";
import React, { useState } from "react";
import styled from "styled-components";
import Box from "../components/Box";

export default function ProblemSolvingL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout ProblemSolvingL>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="grid grid-cols-1">
        <h1 className="text-yellow-200 text-4xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          Resources & Reccomendations
        </h1>
        {/* 6 */}
        <p className="text-rose-300"></p>
        <Box>
          <p>Warehouse manager</p>
        </Box>
        <Box>
          <p>Packaging assistants</p>
        </Box>
        <Box>
          <p>Kitchen assistants</p>
        </Box>
        <Box>
          <p>Delivery Driver</p>
        </Box>
        <Box>
          <p>Customer Service Representative</p>
        </Box>
        <Box>
          <p>Janitorial Services Assistant</p>
        </Box>
      </section>
    </Layout>
  );
}
// }