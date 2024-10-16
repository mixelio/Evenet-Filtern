import {EventFilternForm} from './components/EventFilternForm/EventFilternForm'
import './App.scss'
import {useState} from 'react'
import React from 'react';

function App() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  return (
    <div className='demo-container'>
      <div className="demo-wrapper">
        <button 
          className="modal-open"
          onClick={() => setMenuStatus(true)}
        >
          open
        </button>
        <EventFilternForm 
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
        />
      </div>
    </div>
  )
}

export default App
