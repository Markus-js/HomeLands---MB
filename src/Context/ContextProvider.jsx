import { createContext, useEffect, useState } from "react";

const AppContext = createContext();



const AppContextProvider = ({children}) => {
    const [loginData, setLoginData] = useState({})


    

    // setting loginData id sessionStorage has them
    const settingLoginData = () => {
        const data = JSON.parse(sessionStorage.getItem('token'));
        if(!loginData.user_id) {
            if(data && data.user_id) {
                setLoginData(data);
            }
        }
    };

    useEffect(() => {
        settingLoginData();
    }, [loginData]);

    return (
        <AppContext.Provider
        value={{
            loginData,
            setLoginData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };