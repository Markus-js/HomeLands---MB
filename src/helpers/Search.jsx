import React, {useState} from 'react'
import { doFetch } from './Fetch';
import Style from "./search.module.scss"

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const gethousesData = async () => {
        const url = `https://api.mediehuset.net/homelands/search/${searchTerm}`;
        const res = await doFetch(url);
        console.log(res)
       
      };

    return (
        <div className={Style.search_box} >
            <input type="text" placeholder="Indtast søgeord" onChange={e => {setSearchTerm(e.target.value)}} />
            <button onClick={e => {gethousesData()}} ></button>
        </div>
    )
}
