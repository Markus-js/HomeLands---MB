import React, {useState, useContext } from 'react'
import { doFetch } from './Fetch';
import Style from "./search.module.scss"
import { AppContext } from '../Context/Context';
import { useHistory } from "react-router";
import {useRouteMatch} from "react-router-dom"


export const Search = () => {
    // Custom hook
    const { setSearchResult, setToggle} = useContext(AppContext)
    const [searchTerm, setSearchTerm] = useState("")

    const history = useHistory();
    
    
    const getSearchTerm = async () => {
        const url = `https://api.mediehuset.net/homelands/search/${searchTerm}`;
        const res = await doFetch(url);
        setSearchResult(res)
        setToggle(false)
            history.push('/seachpage');
      };

    return (
        <div className={Style.search_box} >
            <input type="text" placeholder="Indtast søgeord" onChange={e => {setSearchTerm(e.target.value)}} />
            <button onClick={e => {getSearchTerm()}} ></button>
        </div>
    )
}
