import { Refresh } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/Context';
import { doFetch } from '../../helpers/Fetch';
import { Modal } from '../modal/Modal';
import Style from './MyReviews.module.scss';

export const MyReviews = () => {
    
        const [reviews, setReviews] = useState([]);
        const [filteredReviews, setFilteredReviews] = useState([]);
        const { loginData, refresh, setRefresh, reviewsDataById, setReviewsDataById, setSuccess} = useContext(AppContext);
        const [modalToggle, setModalToggle] = useState(true);
        const [modalType, setModalType] = useState("");

    
        const getReviews = async () => {
            const url = `https://api.mediehuset.net/homelands/reviews`;
            const res = await doFetch(url, 'GET', null, loginData.access_token);
            setReviews(res.items);
        }
    

  const handleModal = (type) => {
    setReviewsDataById(type)
    setModalType(parseInt(type.id))
    setModalToggle(true)
    setSuccess(false)
    console.log(reviewsDataById)
  }
    
        const handleDelete = async (item) => {
            const url = `https://api.mediehuset.net/homelands/reviews/${item}`;
            const res = await doFetch(url, 'DELETE', null, loginData.access_token);
            setRefresh(load => !load)
        }
    
        useEffect(() => {
            getReviews();
        }, [refresh])
    
        useEffect(() => {
            const filterReviews = reviews.filter(review => loginData.user_id === parseInt(review.user_id));
            setFilteredReviews(filterReviews)
        }, [reviews])
    
        return (
            <>
            <table className={Style.table}>
                <tr>
                    <th>Titel</th>
                    <th>Kommentar</th>
                    <th>Mulighed</th>
                </tr>
                {filteredReviews.length ? filteredReviews.map((review, index) => {
                    return (
                        <tr key={index}>
                            <td>{review.title.slice(0, 10)}...</td>
                            <td>{review.content.slice(0, 10)}...</td>
                            <td>
                                <button className="btn btn--admin" type="button" onClick={() => {handleModal(review)}}>Updater</button>
                                <button className="btn btn--admin" type="button btn--admin" onClick={() => {handleDelete(review.id)}} >Slet</button>
                            </td>
                        </tr>
                    )
                }) : null }
            </table>
            <Modal type={modalType} reviewsDataById={reviewsDataById} modalToggle={modalToggle} setModalToggle={setModalToggle} />
           </>
        )
    
}
