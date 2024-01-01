import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx";
import { API_URL } from "../assets/constants";


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = ({setSelectedId}) => {
  const [contacts, setContacts] = useState([]);
 // const [selectedContactId, setSelectedContactId] = useState(null);


 //setSelectedId(selectedContactId);
  useEffect( () => {
    console.log('API_URL', API_URL);
    async function getContacts() {
      try{
        const response = await fetch(API_URL);
        const json = await response.json();
        setContacts(json);
      }catch(error) {
        console.log(error);
      }
    }
    getContacts();
  },[])
 
  
  return (
    <div>
     <table>
      <thead>
        <tr>
          <th colSpan={3}>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
        </tr>
        {
          contacts.map((contact) => {
           return <ContactRow key={contact.id} contact={contact} setSelectedId = {setSelectedId}/>
          
          })
        }
      </tbody>
     </table>
    </div>
  )
}

export default ContactList;