
import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';





export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #BB377D, #FBD3E9);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160vh;
  padding: 0 20px;
  
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  margin-right: 1rem;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
 
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const pageBackground = styled.div`
background-color: #e7edfb;
    height: 100%;
    width: 100%;
    overflow: scroll !important;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`
export const textPage = styled.input`
 --border-radius: 10px;
    --padding-start: 1rem;
    --padding-end: 1rem;
    --padding-top: 1rem;
    --padding-bottom: 1rem;
    padding: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 5rem;
`
export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) =>(primary ? '#4859F7' : '#247cff')};
white-space: nowrap;
padding: ${({big}) =>(big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size:  ${({fontBig}) =>(fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) =>(primary ? '#247cff' : '#4859F7')};

}

@media screen and (max-width: 960px) {
    width: 100%;
}
`
