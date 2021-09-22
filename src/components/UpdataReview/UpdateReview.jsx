import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/Context';
import { doFetch } from '../../Helpers/Fetch';
import Style from './updateReview.module.scss';

export const UpdateReview = () => {
    const { loginData, reviewsDataById} = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
 
    console.log("-------------")
    console.log(reviewsDataById.num_stars)
    console.log(reviewsDataById.title)
    console.log(reviewsDataById.content)
    console.log(reviewsDataById.id)
    console.log("-------------")




    const createReview = async () => {

        const url = `https://api.mediehuset.net/homelands/reviews`;
        const formData = new FormData();
        formData.append('id', reviewsDataById.id);
        formData.append('title', reviewsDataById.title);
        formData.append('content', reviewsDataById.content);
        formData.append('num_stars', reviewsDataById.num_stars);
        formData.append('active', true);
        const res = await doFetch(url, 'PUT', formData, loginData.access_token);
       
        console.log(res);
    }




    return (
        <>
            <h4>Updater</h4>
            EDIT:    id:   {reviewsDataById.id} - Title:   {reviewsDataById.title}  -  Content:    {reviewsDataById.content}
            <form className={Style.updateReview}>
                <input name="title" type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="content" placeholder="Kommentar" value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <span>
                    <button className="btn btn--login" type="button" onClick={createReview}>Send</button>
                </span>
            </form>
  
        </>
    )
}
