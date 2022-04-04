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
      <form onSubmit={onSubmit} >
        <label>
          <p>Full Name:</p>
          <input required type="text" name="fullname" pattern="[A-Za-z\u0590-\u05FF]{3,20}" minLength="3" maxLength="20"
            title="At least 3 letters" />
        </label>
        <label>
          <p>User Name:</p>
          <input required type="text" name="username" pattern="^[a-zA-Z][a-zA-Z0-9]{3,19}$" minLength="3" maxLength="20"
            title="Must start with a letter and length between 4-20 characters" />
        </label>
        <label>
          <p>Password:</p>
          <input required type="password" name="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" minLength="8" maxLength="20"
            title="Minimum eight characters, at least one letter and one number" />
        </label>
        <label>
          <p>Email:</p>
          <input required type="email" name="email" minLength="5" maxLength="30"
            title="Please enter a valid Email" />
        </label>
        <label>
          <p>ID:</p>
          <input required type="text" name="id" pattern="[0-9]{8,9}$" minLength="8" maxLength="9"
            title="length must be between 8-9 characters" />
        </label>
        <label>
          <p>Birthday:</p>
          <input className="NoBorder" type="date" name="birthday" />
        </label>
        <label>
          <p>Gender:</p>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          <p>image:</p>
          <input className="NoBorder" type="file" name="image" />
        </label>
        <input className="Grow" id="submit" type="submit" />
      </form >
    </div >
  );
};

export default SignUp;
