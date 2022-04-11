import TextEntry from "../TextEntry/TextEntry";
import "./Login.css";
import React, { useState } from 'react'

const Login = ({ setToken }) =>
{
    const onSubmit = (event) =>
    {
        event.preventDefault();
        console.log(username + Password);
        //TODO stop mocking user login
        setToken(username);
    }

    const [username, setUsername] = useState();
    const [Password, setPassword] = useState();

    return (
        <div className="Login">
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <TextEntry onChange={setUsername} fieldName="Username" required={true} fieldType="text" borderless={true} />

                <TextEntry onChange={setPassword} fieldName="Password" required={true} fieldType="password" borderless={true} />

                <input className="Grow" id="signIn" type="submit" />
            </form >
        </div >
    );
};

export default Login;
