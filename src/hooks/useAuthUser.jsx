// import { useState, useEffect } from "react";

// function getSavedValue(key, initialValue) {
//   const savedValue = JSON.parse(sessionStorage.getItem(key));
//   if (savedValue) return savedValue;

//   if (initialValue instanceof Function) return initialValue();
//   return initialValue;
// }

// export const useAuthUser = (key) => {
//   const [user, setUser] = useState(() => {
//     return getSavedValue(key, initialValue);
//   });

//   useEffect(() => {
//     sessionStorage.getItem(key);
//   }, [user]);

//   console.log(user)
//   return [user, setUser];
// };

// // setting loginData id sessionStorage has them
//     const settingLoginData = () => {
//         const data = JSON.parse(sessionStorage.getItem('token'));
//         if(!loginData.user_id) {
//             if(data && data.user_id) {
//                 setLoginData(data);
//             }
//         }
//         if(loginData.user_id) {
//             removeShoppingcard_whenLoggingIn();
//         }
//     };

//     useEffect(() => {
//         settingLoginData();
//     }, [loginData]);