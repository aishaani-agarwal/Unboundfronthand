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

export default function ServiceL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout ServiceL>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="grid grid-cols-1">
        <h1 className="text-yellow-200 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          Resources & Reccomendations
        </h1>
        {/* 6 */}
        <p className="text-rose-300"></p>
        <Box>
          <p>Nurses/Wardboy</p>
        </Box>
        <Box>
          <p>Masseuse</p>
        </Box>
        <Box>
          <p>Fast food service position</p>
        </Box>
        <Box>
          <p>Baby sitter</p>
        </Box>
        <Box>
          <p>Pet care taker</p>
        </Box>
        <Box>
          <p>Painter</p>
        </Box>
        <Box>
          <p>Cook</p>
        </Box>
        <Box>
          <p>Beauticians</p>
        </Box>
      </section>
    </Layout>
  );
}
// }
