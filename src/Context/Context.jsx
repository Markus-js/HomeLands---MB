import { createContext, useState, useEffect } from "react";

const AppContext = createContext();



const AppContextProvider = ({children}) => {
    const [searchResult, setSearchResult] = useState([])
    const [ loginData, setLoginData ] = useState({});

     // setting loginData id sessionStorage has them
     const settingLoginData = () => {
        const data = JSON.parse(sessionStorage.getItem('token'));
        if(!loginData.user_id) {
            if(data && data.user_id) {
                setLoginData(data);
            }
        }
        // if(loginData.user_id) {
        //     removeShoppingcard_whenLoggingIn();
        // }
    };

    useEffect(() => {
        
        settingLoginData();
    }, [loginData]);

    console.log(loginData)  

    return (
        <AppContext.Provider
        value={{
            searchResult,
            setSearchResult,
            loginData,
            setLoginData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };