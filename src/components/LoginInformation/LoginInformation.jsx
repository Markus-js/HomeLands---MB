import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../Context/Context";

const LoginInformation = () => {
    const {loginData, setLoginData} = useContext(AppContext)
    const [username, setUsername] = useState('');
    const history = useHistory();

    const getInformation = () => {
        const information = JSON.parse(sessionStorage.getItem('token'))
        if(information) {
            setUsername(information.username)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token');
        history.push('/frontpage');
        setLoginData({});
    }


    useEffect(() => {
        getInformation()
    }, [])

    return (
        <div>
            <h2>Dine Oplysninger</h2>
            <p>Du er nu logget ind som: {username ? username : null}</p>
            <button type="button" onClick={logOut}>Log ud</button>
        </div>
    )
}

export default LoginInformation;