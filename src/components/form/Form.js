import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import Style from "./form.module.scss";
init("user_iKlFVYLk9kyYQV2fO6bD6");

export const Form = ({ agent, setModalToggle }) => {
  const [data, setData] = useState({ name: "", email: "", tlf: "", text: "" });
  const [status, setStatus ] = useState();
  const [count, setCount ] = useState(4);




  
  useEffect(() => {
    const countExit = setInterval(() => {
      // email result asynchronous
      if(status) {
        setCount(x => x -1)
      }
    }, 1000);
    return () => {
      clearInterval(countExit)
    }
  }, [status])






  function handleExit() {
    // If response is successfull
    setStatus("Email blev sendt")
    setTimeout(() => {
      // Toggle modal 
      setModalToggle(false);
    }, 4000);
  }






  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58zi6jz",
        "template_b9c11vh",
        e.target,
        'user_iKlFVYLk9kyYQV2fO6bD6'
      )
      .then(
        (result) => {
          handleExit(true);
        },
        (error) => {
          setStatus("Noget gik galt! Venligt prøv igen")
        }
      );
    e.target.reset();
  }

  

  return (
    <section className={Style.form_section} >
    <header>
    <h2>Kontakt {agent.item.firstname} {agent.item.lastname}</h2>
    {status && <h3>{status}</h3>}
    </header>
    {status && status.includes("sendt") ? <h4>Lukker om: {count}</h4> : null}
      <form className={Style.form} onSubmit={sendEmail}>
        
        <div>
          <label>Dit navn og efternavn</label>
          <input
            name="name"
            type="text"
            placeholder="Navn"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Dit telefon nr</label>
          <input
            name="tlf"
            type="number"
            placeholder="+45 12 34 56 78"
            onChange={(e) => setData({ ...data, tlf: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Din mailadresse</label>
          <input
            name="user_email"
            type="email"
            placeholder="example@email.com"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Din mailadresse</label>
          <textarea
            name="message"
            placeholder="EmailJS"
            onChange={(e) => setData({ ...data, text: e.target.value })}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn--contact" >Send besked</button>
      </form>
    </section>
  );
};
