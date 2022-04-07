import ComboBoxEntry from "../ComboBoxEntry/ComboBoxEntry";
import TextEntry from "../TextEntry/TextEntry";
import ImgEntry from "../ImgEntry/ImgEntry";
import "./SignUp.css";
import React, { useState } from 'react'

const genderOptions = ["Male", "Female", "Other"]

const SignUp = () =>
{
  const onSubmit = (event) =>
  {
    event.preventDefault();
    console.log(username + fullname + Password + email + id + birthday + gender + img);
  }

  const [username, setUsername] = useState();
  const [fullname, setFullname] = useState();
  const [Password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState(genderOptions[0]);
  const [img, setImg] = useState();

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>

        <TextEntry onChange={setFullname} fieldName="Full Name" required={true} fieldType="text" minLength="3" maxLength="20"
          validityMsg="At least 3 letters" regex="[A-Za-z\u0590-\u05FF]{3,20}" />

        <TextEntry onChange={setUsername} fieldName="Username" required={true} fieldType="text" minLength="3" maxLength="20"
          validityMsg="Must start with a letter and length between 4-20 characters" regex="^[a-zA-Z][a-zA-Z0-9]{3,19}$" />

        <TextEntry onChange={setPassword} fieldName="Password" required={true} fieldType="password" minLength="8" maxLength="20"
          validityMsg="Minimum eight characters, at least one letter and one number" regex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" />

        <TextEntry onChange={setEmail} fieldName="Email" required={true} fieldType="email" minLength="5" maxLength="30"
          validityMsg="Please enter a valid Email" />

        <TextEntry onChange={setId} fieldName="ID" required={true} fieldType="text" minLength="8" maxLength="9"
          validityMsg="length must be between 8-9 characters" regex="[0-9]{8,9}$" />

        <TextEntry onChange={setBirthday} className="NoBorder" required={false} fieldName="Birthday" fieldType="date" />

        <ComboBoxEntry onChange={setGender} fieldName="Gender" options={genderOptions} />

        <ImgEntry required={false} onChange={setImg} fieldName="Image" />

        <input className="Grow" id="submit" type="submit" />
      </form >
    </div >
  );
};

export default SignUp;
