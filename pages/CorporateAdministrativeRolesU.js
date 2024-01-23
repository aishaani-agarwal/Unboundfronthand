// // pages/newpage.js

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import FancyTextBox from "../components/TextBox";
import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../components/Box';



export default function CorporateAdministrativeRolesU() {
  const [textBoxValue, setTextBoxValue] = useState("");
  

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };


  return (
    <Layout CorporateAdministrativeRolesU>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div>
      <section className="grid grid-cols-1">
        <h1 className="text-lime-20000 text-3xl ... font-serif ...absolute bottom-0 right-3 w-30 ...">
          Resources & Reccomendations
        </h1>
        {/* 6 */}
        <p className="text-cyan-200"></p>
                 
      <Box>
        <p>Event Logistics Coordinator</p>
      </Box>
      <Box>
        <p>Front Desk Receptionist</p>
      </Box>
      <Box>
        <p>Corporate jobs</p>
      </Box>
      <Box>
        <p>Library Assistant</p>
      </Box>
      <Box>
        <p>Office Assistant</p>
      </Box>
    

      </section>
      <a href={"/"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">        

            Home
          </button>
        </a>
        </div>
    </Layout>
  );
}
// }