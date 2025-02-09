import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import LoginInputBox from '../components/loginInputBox';

import { useQuery } from '@apollo/client'
import { LogIn } from "../FetchData"

function LoginView(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);
    const [skip, setSkip] = useState(true);

    const history = useHistory()
    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    //FIX: when the frontend is opened, it will send a query with empty username and password, and causes a error in checkUserExists.
    // (Error msg in the backend)
    // The behaviour is seemingly harmless.
    const { loading, error, data, refetch } = useQuery(LogIn, {
        variables: {
            name: username,
            password: password
        },
        skip: skip
    })

    useEffect(() => {
        if (username !== "" && password !== "") {
            console.log(skip)
            refetch()
        }
    }, [skip])

    useEffect(() => {
        if (data !== undefined) {
            console.log(data)
            if (error) {
                alert('wrong username or password.')
                // setLoggingIn(false);
            } else {
                props.setName(data.login.name);
                props.setBackpack(data.login.backpack);
                setUsername("");
                setPassword("");
                history.push('/map');
            }
            setSkip(true);
        }
    }, [data])

    const handleLogin = () => {
        if (!loading) {
            setSkip(false);
            // setLoggingIn(true);
        }

    }

    return (
        <>
            <div style={{
                width: "600px",
                height: "300px",
                margin: "-150px 0 0 -300px",
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign: "center"
            }}>
                <h1>Pokémon</h1>
                <h2>Log In</h2>
                <LoginInputBox name="Username" value={username} onChange={handleUsernameInput} password={false} />
                <LoginInputBox name="Password" value={password} onChange={handlePasswordInput} password={true} />
                <button onClick={handleLogin}>Log In</button>
                <div><Link to="/signup">Don't have an account? Sign Up</Link></div>

            </div>
        </>
    )
}



export default LoginView;