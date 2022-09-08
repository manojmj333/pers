import React from "react";
import axios from "axios";


function Contact(){

  const [name,setName]= React.useState("");
  const [email,setEmail]= React.useState("");
  const [message,setMessage]= React.useState("");

  function onChangeName(e) {
    setName(e.target.value)
  }

  function onChangeEmail(e) {
    setEmail(e.target.value)
  }

  function onChangeMessage(e) {
    setMessage(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      message: message
    }


    axios.post('http://localhost:5000/contacts/add',contact)
      .then(res => console.log(res.data));

    console.log(contact);
  }

    return (
      <div className="contact">
  <div className="contact-container">
    <h1> Get in touch </h1>
    <h3>Details</h3>
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" id="name" name="name" placeholder="Name" autocomplete="off" value={name}
      onChange={onChangeName}/><br/> <br/>
      <input type="email" id="email" name="email" placeholder="Email address" autocomplete="off"  value={email}
      onChange={onChangeEmail}/><br/> <br/>
      <textarea name="message" placeholder="Your Message"  value={message}
      onChange={onChangeMessage}></textarea><br/>
      <input type="submit" value="Submit"/>
    </form>
  </div>
  </div>)
}

export default Contact;
