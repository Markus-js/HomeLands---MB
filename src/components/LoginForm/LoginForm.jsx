import React, {useState, useEffect, useContext} from 'react';
import Style from './loginForm.module.scss';

import { doFetch } from '../../Helpers/Fetch'; 
import { AppContext } from '../../Context/Context';
import { useHistory } from 'react-router';
import { useSetUserSessionStorage } from '../../Hooks/useSetUserSessionStorage';
import { ClearFix } from '../ClearFix/ClearFix';

// Prop => type drilled from = Reviews => Modal => this 
// LoginForm component is used on both LoginPage and Reviews
// Fra Reviews vil vi gerne linke tilbage til forside efter login
// Fra LoginPage vil vi gerne linke til Admin efter login
// Type kan bruges til condition for hvert component`s link
export const LoginForm = ({type}) => {
    const [message, setMessage] = useState('');
    const { loginData, setLoginData } = useContext(AppContext);
    const [value, setValue] = useSetUserSessionStorage("token", "")

    const history = useHistory();

    let formLoginData = {
        username: '',
        password: ''
    };

    const handleUsername = (val) => {
        formLoginData.username = val
        setMessage('')
    }
   const handlePassword = (val) => {    
        formLoginData.password = val
        setMessage('')
    }

    const submitForm = async () => {
        let formData = new FormData();
        formData.append('username', formLoginData.username);
        formData.append('password', formLoginData.password);

        const url = 'https://api.mediehuset.net/token';

        const fetchedData = await doFetch(url, 'POST', formData);
        handleSessionData(fetchedData)
    }

    const handleSessionData = (data) => {
        if(!data.message) {
            // Custom Hook
            // setValue(data) // === sessionStorage.setItem('token', JSON.stringify(data));
            setMessage('Du er nu logget Ind')
            setLoginData(data)
                // Where to link
                history.push('/Admin')
                if(type === "review_login") {
                    history.push('/frontpage')
                }
        }
        

        if (data.message === 'No authorization') {
            setMessage('Forkert username eller password')
        }
    }

    useEffect(() => {
        if(loginData.user_id) {
            history.push('/Admin');
        }
    }, [])


    return (
        <form className={Style.loginForm}>
            <h2>Login</h2>
            <p >Indtast dit brugernavn og adgangskode for at logge ind</p>
            <span>
                <input className={Style.Login_input} type="text" placeholder="Brugernavn" onKeyUp={(e) => {handleUsername(e.currentTarget.value)}}/> 
                <input  className={Style.Login_input} type="password" placeholder="Adgangskode" onKeyUp={(e) => {handlePassword(e.currentTarget.value)}}/> 
            </span>
            {message}
            <div >
                <button type="button" className="btn btn--login" onClick={submitForm}>Login</button>
            </div>
        
        </form>
    )
}
