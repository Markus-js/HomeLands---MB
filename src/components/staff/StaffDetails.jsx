import React, {useState, useEffect} from 'react'
import { doFetch } from '../../helpers/Fetch';

export const staffDetails = () => {
    const [houseData, setHouseData] = useState({});
    const [modalToggle, setModalToggle] = useState(true);
    const [modalType, setModalType] = useState("");
    
    let { houseId } = useParams();
  
    const getStaffDetails = async () => {
      const url = `https://api.mediehuset.net/homelands/homes/${houseId}`;
      const res = await doFetch(url);
      setHouseData(res);
    };
    useEffect(() => {
        getStaffDetails();
    }, []);
    console.log(houseData);
    
    return (
        <section>
            
        </section>
    )
}
