import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doFetch } from "../../helpers/Fetch";
import mail_icon from "../../assets/images/mail-icon.svg";
import mobile_icon from "../../assets/images/mobile-icon.svg";
import Style from "./staffDetails.module.scss";
import { Modal } from "../modal/Modal";

export const StaffDetails = () => {
  const [agent, setAgent] = useState({});
  const [modalToggle, setModalToggle] = useState(true);
  const [modalType, setModalType] = useState("");
  // const [modalToggle, setModalToggle] = useState(true);
  // const [modalType, setModalType] = useState("");

  let { staffId } = useParams();
  let history = useHistory()

  const getStaffDetails = async () => {
    const url = `https://api.mediehuset.net/homelands/staff/${staffId}`;
    const res = await doFetch(url);
    setAgent(res);
  };
  useEffect(() => {
    getStaffDetails();
  }, []);

  const handleModal = (type) => {
    setModalType(type)
    setModalToggle(true)
}

const handleClick = () => {
    history.push("/staffPage")
}

  return agent.item ? (
     <> 
    <section className={Style.agent_section}>
      <button className="btn" onClick={handleClick}>Tilbage til ansatte</button>
      <header>
       <main>
       <h1>
          {agent.item.firstname} {agent.item.lastname}
        </h1>
        <h3>{agent.item.position}</h3>
        <p>
        {agent.item.firstname} er erfaren indenfor {agent.item.position}.  {agent.item.firstname} er manifestet
          af jysk grundighed og oprigtig interesse; Står solidt plantet i
          sin faglighed, temmelig urokkelig på principperne, men alt andet, kan
          man snakke om. Det er sådan, han foretrækker det; Aalborg Mægleren er
          et personligt projekt; og hvis man leder efter et nyt hjem, eller skal
          sælge det, man har, så skal man mødes af et engageret menneske.
        </p>
        <button className="btn" onClick={() => {handleModal("agent")}}>Kontakt {agent.item.firstname}</button>
       </main>
      </header>
      <footer>
        <img
          className={Style.agent}
          src={agent.item.image}
          alt={agent.item.firstname}
        />
        <div className={Style.contact_info}>
          <h2>Skriv eller ring til mig</h2>
          <p>Så tager vi en uforpligtende snak om jeres behov</p>
        </div>
        <div>
          <figure>
            <img src={mobile_icon} alt="phone" />
            <div>
              <figcaption>mobil</figcaption>
              <p>
                <a href={`tel:+45${agent.item.phone}`}>{agent.item.phone}</a>
              </p>
            </div>
          </figure>
          <figure>
            <img src={mail_icon} alt="email" />
            <div>
              <figcaption>email</figcaption>
              <p>
                <a href={`mailto:${agent.item.email}`}>{agent.item.email}</a>
              </p>
            </div>
          </figure>
        </div>
      </footer>
    
    </section>
    <Modal type={modalType} agent={agent} modalToggle={modalToggle} setModalToggle={setModalToggle} />
  </>
  ) : (
    <p>Siden indlæses...</p>
  );
};
