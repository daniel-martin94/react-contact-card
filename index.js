import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ContactCard from './components/ContactCard'
import './style.css';
import userData from './data.json'

import { TouchableOpacity } from "semantic-ui-react";

function App () {

  const [users, updateUsers] = useState(userData)

  function renderUsers() {
    return users.users.map(function (item, index) {
      return(
        <div>
        <ContactCard profile={item.profile} removeUser={removeUser(index)}></ContactCard>
        <ContactCard profile={item.profile}></ContactCard>
        </div>
      )
    })
  }

  function duplicateUser(){

  }

  function removeUser(index){
    
  }

    function renderUsers() {
    return users.users.map(function (item, index) {
      return(
        <div>
        <ContactCard profile={item.profile}></ContactCard>
        <ContactCard profile={item.profile}></ContactCard>
        </div>
      )
    })
  }
    return (
      <div>
        {renderUsers()}
      </div>
    );
  }

render(<App />, document.getElementById('root'));
