import React from "react";
import {useEffect, useState} from 'react';
import { API_URL } from "../assets/constants";

function ContactView({selectedId}) {
  const [selectedContact, setSelectedContact] = useState({});

 useEffect(()=> {
  async function getSelectedContact() {
    try{
      const response = await fetch(`${API_URL}/${selectedId}`);
      const result = await response.json();
      setSelectedContact(result);
      console.log('selectedContact:',selectedContact);
      console.log('selectedContact.address.',selectedContact.address);
     
    } catch (error) {
      console.log(error);
    }
  }
  getSelectedContact();
  
 },[])

  return (
  <section>
   <h2>{selectedContact.name}</h2>
   <label>UserName: </label>
   <label>{selectedContact.username}</label> <br />
   <label>Email: </label>
   <label>{selectedContact.email}</label> <br />
   <label>Phone: </label>
   <label>{selectedContact.phone}</label> <br />
   <label>Website: </label>
   <label>{selectedContact.website}</label> <br />
  </section>
  )
}

export default ContactView;