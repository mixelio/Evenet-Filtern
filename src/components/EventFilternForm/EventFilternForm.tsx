
import {FilterSelection} from '../FilterSelection/FilterSelection';
import {NotificationSwitch} from '../NotificationSwitch/NotificationSwitch';
import './EventFilternForm.module.scss';
import classNames from 'classnames';
import React from 'react';

type Props = {
  menuStatus: boolean;
  setMenuStatus: (value: boolean) => void;
}

export const EventFilternForm: React.FC<Props> = ({ menuStatus, setMenuStatus }) => {
  
  return (
    <form
      action="/"
      method="POST"
      className={classNames("eventFilternForm", {
        _active: menuStatus,
      })}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h2 className="eventFilternForm__title">
        Events filtern
      </h2>
      <FilterSelection />
      <NotificationSwitch setMenuStatus={setMenuStatus}/>
    </form>
  )
}