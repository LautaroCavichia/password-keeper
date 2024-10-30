import React, { useEffect, useState } from "react";

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
        <div>
        <h1>Welcome to the PASSWORD KEEPER</h1>
        <div>
            <p>{loginErrorState.userNameError || "Username:"}</p>
            <input
            id="userNameInput"
            value={loginState.userName}
            onChange={e=>setLoginState({...loginState,userName:e.target.value})}
            />
        </div>
        <div>
            <p>{loginErrorState.passwordError || "Password:"}</p>
            <input
            id="passwordInput"
            value={loginState.password}
            onChange={e=>setLoginState({...loginState,password:e.target.value})}
            />
        </div>
        <div>
            <button>Submit</button>
        </div>
        </div>
    );
    }
