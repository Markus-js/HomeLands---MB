import Style from './LoginForm.module.scss';

import { doFetch } from  "../../helpers/Fetch"
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSetUserSessionStorage } from '../../hooks/useSetUserSessionStorage';

const LoginForm = () => {
    const [message, setMessage] = useState('');
    const history = useHistory();
    // Custom hook
    const [value, setToken] = useSetUserSessionStorage("token", "");

    

    let loginData = {
        username: '',
        password: ''
    };


    const handleUsername = (val) => {
        loginData.username = val
        setMessage('')
    }
    const handlePassword = (val) => {
        loginData.password = val
        setMessage('')
    }




    const submitForm = async () => {
        let formData = new FormData();
        formData.append('username', loginData.username);
        formData.append('password', loginData.password);
        const url = 'https://api.mediehuset.net/token';
        const res = await doFetch(url, 'POST', formData);
        handleSessionData(res)
    }

    const handleSessionData = (data) => {
        if(!data.message) {
            // Custom hook
            setToken(data) // ==  sessionStorage.setItem('token', JSON.stringify(data));
            setMessage('Du er nu logget Ind')
            history.push('/admin')
        }

        if (data.message === 'No authorization') {
            setMessage('Forkert username eller password')
        }
    }
    


    return (
        <form className={Style.loginForm}>
            <h2 className={Style.loginForm_h2}>Login</h2>
            <p className={Style.loginForm_p} >Indtast dit brugernavn og adgangskode for at logge ind</p>
            <span className={Style.column}>
                <input className={Style.loginForm_input} type="text" placeholder="Brugernavn" onKeyUp={(e) => {handleUsername(e.currentTarget.value)}}/> 
                <input className={Style.loginForm_input} type="password" placeholder="Adgangskode" onKeyUp={(e) => {handlePassword(e.currentTarget.value)}}/> 
            </span>
            {message}
            <div className={Style.loginForm_div}>
                <button type="button" className={Style.loginForm_button} onClick={submitForm}>Login</button>
           
            </div>
        </form>
    )
}

export default LoginForm;