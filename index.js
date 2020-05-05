import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ContactCard from './components/ContactCard'
import './style.css';
import userData from './data.json'

import { TouchableOpacity } from "semantic-ui-react";

function App () {

  const [users, updateUsers] = useState(userData)
  
  // useEffect({

  // }, [users])

  function renderUsers() {
    return users.users.map(function (item, index) {
      return(
        <ContactCard profile={item.profile}></ContactCard>
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
