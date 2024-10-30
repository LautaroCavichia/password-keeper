import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./LandingPage.css"


interface LoginForm {
    userName?: string;
    password?: string;
}

interface LoginFormError {
    userNameError?: string;
    passwordError?: string;
}

export const LandingPage = () => {

    const [loginState, setLoginState] = useState<Partial<LoginForm>>({});
    const [loginErrorState, setLoginErrorState] = useState<Partial<LoginFormError>>({});
    useEffect(()=>{
        if(loginState.userName && loginState.userName.length < 3)
            setLoginErrorState({...loginErrorState,userNameError:"Devi scegliere un username più lungo!"});
        else
        setLoginErrorState({...loginErrorState,userNameError:undefined})
    },[loginState.userName]);

    useEffect(()=>{
        if(loginState.password && loginState.password.length < 5)
            setLoginErrorState({...loginErrorState,passwordError:"Password troppo corta!"});
        else
        setLoginErrorState({...loginErrorState,passwordError:undefined})
    },[loginState.password]);


    return (
        <div className="login">
            <h1>Welcome!</h1>
            <form>
            <div>
                <p>{loginErrorState.userNameError || "Username:"}</p>
                <input
                    id="userNameInput"
                    type="text"
                    value={loginState.userName}
                    onChange={(e) => setLoginState({ ...loginState, userName: e.target.value })}
                />
            </div>
            <div>
                <p>{loginErrorState.passwordError || "Password:"}</p>
                <input
                    id="passwordInput"
                    type="password"
                    value={loginState.password}
                    onChange={(e) => setLoginState({ ...loginState, password: e.target.value })}
                />
            </div>
        </form>
        
        <Link className = "submit" to="/addPassword">LOGIN</Link>
        </div>
    );
    }
