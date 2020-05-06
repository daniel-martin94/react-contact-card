import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ContactCard from './components/ContactCard'
import './style.css';
import userData from './data.json'

import { Container } from "semantic-ui-react";

function App() {
  const [users, updateUsers] = useState(userData.users)

  function renderUsers() {
    console.log(users)
    return users.map(function (item, index) {
      return (
        <div>
          <ContactCard key={item.id} profile={item.profile} removeUser={removeUser} id={item.id}></ContactCard>
        </div>
      )
    })
  }

  function removeUser(id) {
    updateUsers(users.filter(function (item) {
      if (item.id != id) {
        return item
      }
    }))
  }

  return (
    <Container>
      {renderUsers()}
    </Container>
  );
}

render(<App />, document.getElementById('root'));
