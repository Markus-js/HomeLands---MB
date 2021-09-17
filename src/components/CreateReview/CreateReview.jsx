import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/Context';
import {doFetch} from "../../helpers/Fetch";
import Style from "./createReview.module.scss"

export const CreateReview = () => {
    const { loginData, setRefresh, setSuccess } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [stars, setStars] = useState('');
    const [content, setContent] = useState('');

    




    const handleReset = () => {
        setTitle("")
        setStars("")
        setContent("")
    }

   




    const createReview = async (e) => {
        const url = `https://api.mediehuset.net/homelands/reviews`;
        const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('user_id', loginData.user_id);
            formData.append('active', true);
            formData.append('num_stars', stars);
        const res = await doFetch(url, 'POST', formData, loginData.access_token);
        handleReset()
        console.log(res)
        if(res.error === "") {
            setSuccess(true)
            setRefresh(true)
        }
        return res;
    }

    


    


    return (
        <>
            <h4>Anmeld</h4>
            <form className={Style.createReview} >
              <div>
              <input name="title" type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input name="num_stars" type="number" placeholder="Stars" value={stars} onChange={(e) => setStars(e.target.value)} />
              </div>

                <div>
                <textarea name="content" placeholder="Kommentar" value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>
                </div>
                
                <span>
                    <button type="button" className="btn btn--login" onClick={handleReset}>Annuller</button>
                    <button type="button" className="btn btn--login" onClick={createReview}>Send</button>
                </span>
            </form>
  
        </>
    )
}

     