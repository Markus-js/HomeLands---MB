import { createContext, useState, useEffect } from "react";

const AppContext = createContext();



const AppContextProvider = ({children}) => {
    const [searchResult, setSearchResult] = useState([])
    const [ loginData, setLoginData ] = useState({});
    const [review, setReview] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const [success, setSuccess] = useState(false)
    const [reviewsDataById, setReviewsDataById] = useState({})
    const [toggle, setToggle] = useState(false);
    const [favorites, setFavorites] = useState([]);



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
        console.log(success)
    }, [success]);
    

    return (
        <AppContext.Provider
        value={{
            searchResult,
            setSearchResult,
            loginData,
            setLoginData,
            review,
            setReview,
            refresh,
            setRefresh,
            success,
            setSuccess,
            reviewsDataById,
            setReviewsDataById,
            setToggle,
            toggle,
            setFavorites,
            favorites
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };