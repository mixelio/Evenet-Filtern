import React from 'react';

type Props = {
  setMenuStatus: (value: boolean) => void
}

export const NotificationSwitch: React.FC<Props> = ({ setMenuStatus }) => {
  return (
    <div className="notificationSwitch">
      <div className="notificationSwitch__info">
        <h2 className="notificationSwitch__title">
          Benachtichtigungen aktivieren
        </h2>
        <p className="notificationSwitch__text">
          Auf Basis deiner Interessen können wir dir Benachrichtigungen zu kommenden Events senden.
        </p>
      </div>
      <div className="notificationSwitch__buttonsBox">
        <button 
          className="notificationSwitch__button_hide"
          onClick={() => {
            setMenuStatus(false)
          }}
        >
          Ausblenden
        </button>
        <button
          className="notificationSwitch__button_accept"
          onClick={() => {
            setMenuStatus(false)
          }}
        >
          Jetzt einrichten
        </button>
      </div>
    </div>
  )
}