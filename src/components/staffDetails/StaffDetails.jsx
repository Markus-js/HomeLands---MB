import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doFetch } from '../../helpers/Fetch';

export const StaffDetails = () => {
    const [agent, setAgent] = useState({});
    // const [modalToggle, setModalToggle] = useState(true);
    // const [modalType, setModalType] = useState("");
    
    let { staffId } = useParams();
  
    const getStaffDetails = async () => {
      const url = `https://api.mediehuset.net/homelands/staff/${staffId}`;
      const res = await doFetch(url);
      setAgent(res);
    };
    useEffect(() => {
        getStaffDetails();
    }, []);

    return agent.item ? (
        <section>
            {agent.item.firstname}
        </section>
    ) : <p>Siden indlæses...</p>
}
