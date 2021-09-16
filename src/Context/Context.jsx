import { createContext, useState, useEffect } from "react";

const AppContext = createContext();



const AppContextProvider = ({children}) => {
    const [searchResult, setSearchResult] = useState([])
    const [ loginData, setLoginData ] = useState({});
    const [review, setReview] = useState([]);

    //  // first lifecycle => Set loginData to sessionStorage Token/User if it exist
    //  const settingLoginData = () => {
    //     const data = JSON.parse(sessionStorage.getItem('token'));
    //     if(!loginData.user_id) {  
    //         if(data && data.user_id) {
    //             setLoginData(data);
    //         }
    //     }
    // };

    useEffect(() => {
        // settingLoginData();
    }, []);


    return (
        <AppContext.Provider
        value={{
            searchResult,
            setSearchResult,
            loginData,
            setLoginData,
            review,
            setReview
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };