"use client"
import React, { useState, useEffect } from 'react';
import './subscribe-email-dialog.css';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    setIsOpen(true);
  }, []); 

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`subscribe-email-dialog-box ${isOpen ? 'subscribe-email-dialog-open-animation' : 'subscribe-email-dialog-close-animation'}`}>
      <button className='subscribe-email-dialog-x' onClick={handleClose}>
        <CloseIcon className='subscribe-email-dialog-close-icon' />
      </button>

      <div className='subscribe-email-dialog-content'>
        <div className='subscribe-email-dialog-top'>
            <p className='subscribe-dialog-text' >Abonniere unseren Newsletter</p>
            <div className='subscribe-dialog-email-icon'><EmailOutlinedIcon/></div>
        </div>
        <p className='subscribe-dialog-middle-text'>Der Ort, an dem Sie alle Informationen und Details über unsere Aktivitäten, Finanzierungsprogramme und aktuelle Nachrichten erhalten.</p>
        <input className='subscribe-dialog-email-input' type="text" placeholder='Ihre email adresse' />
        <button className='subscribe-btn'>Abonniere jetzt</button>
      
      </div>
      
    </div>
  );
};

export default Dialog;