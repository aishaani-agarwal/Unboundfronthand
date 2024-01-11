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

export default function EducationAdministrationL() {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    <Layout EducationAdministrationL>
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
          <p>Corporate Jobs</p>
        </Box>
        <Box>
          <p>Working in NGOs</p>
        </Box>
        <Box>
          <p>Office Assistant</p>
        </Box>
        <Box>
          <p>Community Outreach Coordinator</p>
        </Box>
        <Box>
          <p>Front Desk Receptionist:</p>
        </Box>
        <Box>
          <p>Teacher</p>
        </Box>
        <Box>
          <p>Library Assistant</p>
        </Box>
      </section>
    </Layout>
  );
}
// }
