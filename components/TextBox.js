// import { Input } from "postcss";
// import React from "react";
import styled from "styled-components";
import React, { useState } from "react";


const TextBox = ({type, value, onChange }) => {
  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const textBoxStyle = {
    padding: '8px',
    fontSize: '15px',
    border: `2px solid ${isHovered || isFocused ? '#d9f99d' : '#27272a'}`,
    borderRadius: '20px',
    color: '#86efac',
    outline: 'none',
    transition: 'border-color 0.3s ease', // Smooth transition for border color

    // ':hover': {
    //   borderColor: '#ef4444', // Border color on hover
    // },
    // ':focus': {
    //   borderColor: '#ef4444', // Border color on focus
    // },
  };
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      style={textBoxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TextBox;

// padding: 7px;
//   font-size: 15px;
//   border: 2px solid #27272a; /* Green border color */
//   border-radius: 20px;
//   color: #4ade80;
//   outline: none;
//   transition: border-color 0.3s ease;

//   &:hover,
//   &:focus {
//     border-color: #ef4444; /* Darker green border color on hover/focus */