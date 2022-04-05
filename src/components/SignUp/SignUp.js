import ComboBoxEntry from "../ComboBoxEntry/ComboBoxEntry";
import TextEntry from "../TextEntry/TextEntry";
import ImgEntry from "../ImgEntry/ImgEntry";
import "./SignUp.css";

const SignUp = () =>
{
  const onSubmit = (event) =>
  {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries())
    {
      console.log(key, value);
    };
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>

        <TextEntry fieldKey="fullname" fieldName="Full Name" required={true} fieldType="text" minLength="3" maxLength="20"
          validityMsg="At least 3 letters" regex="[A-Za-z\u0590-\u05FF]{3,20}" />

        <TextEntry fieldKey="username" fieldName="Username" required={true} fieldType="text" minLength="3" maxLength="20"
          validityMsg="Must start with a letter and length between 4-20 characters" regex="^[a-zA-Z][a-zA-Z0-9]{3,19}$" />

        <TextEntry fieldKey="password" fieldName="Password" required={true} fieldType="password" minLength="8" maxLength="20"
          validityMsg="Minimum eight characters, at least one letter and one number" regex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" />

        <TextEntry fieldKey="email" fieldName="Email" required={true} fieldType="email" minLength="5" maxLength="30"
          validityMsg="Please enter a valid Email" />

        <TextEntry fieldKey="id" fieldName="ID" required={true} fieldType="text" minLength="8" maxLength="9"
          validityMsg="length must be between 8-9 characters" regex="[0-9]{8,9}$" />

        <TextEntry className="NoBorder" fieldKey="birthday" required={false} fieldName="Birthday" fieldType="date" />

        <ComboBoxEntry fieldKey="gender" fieldName="Gender" options={["Male", "Female", "Other"]} />

        <ImgEntry required={false} fieldKey="image" fieldName="Image" />

        <input className="Grow" id="submit" type="submit" />
      </form >
    </div >
  );
};

export default SignUp;
