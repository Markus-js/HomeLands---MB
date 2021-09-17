import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/Context';
import { doFetch } from '../../helpers/Fetch';
import Style from './updateReview.module.scss';

export const UpdateReview = () => {
    const { loginData, refresh, setRefresh, reviewsDataById, setReviewsDataById} = useContext(AppContext);
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
 
console.log("-------------")
    console.log(reviewsDataById.num_stars)
    console.log(reviewsDataById.title)
    console.log(reviewsDataById.content)
    console.log(reviewsDataById.id)
    console.log("-------------")
    const createReview = async () => {

        const url = `https://api.mediehuset.net/homelands/reviews`;
        const formData = new FormData();
        formData.append('id', 197);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('num_stars', 0);
        formData.append('active', 3);
        const res = await doFetch(url, 'PUT', formData, loginData.access_token);
       
        console.log(res);
    }

    useEffect(() => {
        setRating(reviewsDataById.num_stars);
        setTitle(reviewsDataById.title);
        setContent(reviewsDataById.content);
        setId(reviewsDataById.id)
    }, [reviewsDataById]);

   

 

    



    return (
        <div >
            FORM
            <form>
                <input name="title" type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
             
                <textarea name="content" placeholder="Kommentar" value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>

                

                <span>
                    <button type="button" onClick={createReview}>Send</button>
                </span>
            </form>
  
        </div>
    )
}
