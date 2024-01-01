import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import ContactView from './components/ContactView.jsx'
import './App.css'
import './index.css'

function App() {
  const [selectedId, setSelectedId] = useState(null);
  console.log('SelectedId::', selectedId);

  return (
    <>
    {
      (!selectedId) 
      ? <ContactList setSelectedId = {setSelectedId}/> 
      : <ContactView  selectedId = {selectedId}/>
    }
    </>
  )
}

export default App
