import React from "react";

const ContactRow = ({contact , setSelectedId}) => {
  function handleClick(id) {
    console.log('Clicked!', id);
    setSelectedId(id);
  
  }
  return (
    <tr onClick={() => handleClick(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  )
}

export default ContactRow;