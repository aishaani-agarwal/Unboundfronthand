import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import TextBox from "../components/TextBox";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default function NewPage() {
  const [textBoxValues, setTextBoxValues] = useState({
    Fname: "",
    Email: "",
    Age: "",
    Location: "",
    Phone: "",
    HLE: "",
    // Add other values if needed
  });
  const [Fname, setFname] = useState([]);
  const [Email, setEmail] = useState([]);
  const [Age, setAge] = useState([]);
  const [HLE, setHLE] = useState([]);
  const [Phone, setPhone] = useState([]);
  const [Location, setlocation] = useState([]);
  const [data, setData] = useState([]);

  const baseurl = "https://unbound-5xnh.onrender.com";

  console.log(textBoxValues.Fname);
  useEffect(() => {
    // Replace 'http://localhost:5000' with your actual backend server URL
    axios
      .get(baseurl + "/api/example")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (e, fieldName) => {
    let newValue = e.target.value;

    const regexMap = {
      Fname: /^[A-Za-z]+$/, // Only letters for first name
      Email: /.*/, // Any characters for email
      Age: /^\d{1,2}$/, // Only numbers for age
      Location: /^[A-Za-z0-9\s]+$/, // Only letters and spaces for location
      Phone: /^\d{0,10}$/, // Only numbers for phone number
      HLE: /^[A-Za-z0-9\s]+$/, // Only letters and spaces for education
    };

    if (regexMap[fieldName]) {
      if (regexMap[fieldName].test(newValue) || newValue === "") {
        setTextBoxValues({
          ...textBoxValues,
          [fieldName]: newValue,
        });
      }
    } else {
      setTextBoxValues({
        ...textBoxValues,
        [fieldName]: newValue,
      });
    }
  };

  const isFormValid = async () => {
    var result = Object.values(textBoxValues).every(
      (value) => value.trim() !== ""
    );
    console.log(Fname);
    return result;
  };

  // const isFormValid = () => {
  //   var result = Object.values(textBoxValues).every((value) => value.trim() !== "");
  //   return result;
  // };

  return (
    <Layout NewPage>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="grid grid-cols-1">
        <h1 className="text-lime-200 text-4xl ... font-serif ...absolute bottom-3 right-5 w-16 ...">
          Identity
        </h1>
        {/* <p className="text-lime-200">
          Rules: * questions are mandantory and the rest are optional
        </p> */}

        <h1 className="text-xl ... text-white  ">First Name</h1>
        <TextBox
          type="text"
          value={textBoxValues.Fname}
          onChange={(e) => handleTextBoxChange(e, "Fname")}
        />

        <h1 className="text-xl ... text-white ">Email</h1>
        <TextBox 
          type="text"
          value={textBoxValues.Email}
          onChange={(e) => handleTextBoxChange(e, "Email")}
        />

        <h1 className="text-xl ... text-white ">Age</h1>
        <TextBox
          type="number"
          value={textBoxValues.Age}
          onChange={(e) => handleTextBoxChange(e, "Age")}
        />

        <h1 className="text-xl ... text-white  ">Location</h1>
        <TextBox
          type="text"
          value={textBoxValues.Location}
          onChange={(e) => handleTextBoxChange(e, "Location")}
        />

        <h1 className="text-xl ... text-white  ">Phone Number</h1>
        <TextBox
          type="number"
          value={textBoxValues.Phone}
          onChange={(e) => handleTextBoxChange(e, "Phone")}
        />

        <h1 className="text-xl ... text-white  ">Highest level of education</h1>
        <TextBox
          type="text"
          value={textBoxValues.HLE}
          onChange={(e) => handleTextBoxChange(e, "HLE")}
        />

        <div>
          <a href={"/Question1"}>
            <button
              className="text-lime-200 absolute inset-x-0 bottom-30 h-16 ... text-3xl ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
              disabled={!isFormValid()}
              onClick={async () => {
                setEmail(textBoxValues.Email);
                console.log(textBoxValues.Fname);
                setFname(textBoxValues.Fname);
                setAge(textBoxValues.Age);
                setlocation(textBoxValues.Location);
                setHLE(textBoxValues.HLE);
                setPhone(textBoxValues.Phone);
                try {
                  // Make a POST request to save data

                  console.log(textBoxValues.Email);
                  console.log(textBoxValues.Fname);
                  console.log(textBoxValues.Age);
                  console.log(textBoxValues.Phone);
                  console.log(textBoxValues.HLE);
                  console.log(textBoxValues.Location);

                  await axios.post(baseurl + "/api/example/add", {
                    // Fname:"Aishaani",
                    // Email:"aishaani@gmail.com",
                    // Age:"3/1/2024",
                    // Location:"Apr",
                    // HLE:"11th",
                    // Phone:"1234567890",
                    Fname: textBoxValues.Fname,
                    Email: textBoxValues.Email,
                    Age: textBoxValues.Age,
                    Location: textBoxValues.Location,
                    HLE: textBoxValues.HLE,
                    Phone: textBoxValues.Phone,
                  });

                  console.log("yayyyyyy2");

                  // Set a success message
                  // setSubmitMessage('Data saved successfully');

                  // Optionally, reset the form fields here
                  // setName('');
                  // setEmail('');
                } catch (error) {
                  // Set an error message
                  console.log(error);
                  console.log("oh nooo");
                  // setSubmitMessage('Error saving data: ' + error.message);
                }
              }}
            >
              Start Questionnaire
            </button>
          </a>{" "}

          <img
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
        />

<a href={"/"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">        

            Home
          </button>
        </a>
        </div>
      </section>
      
    </Layout>
  );
}
