import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ContactCard from './components/ContactCard'
import './style.css';
import users from './data.json'

function App () {

  const [name, updateName] = useState()
  

    return (
      <div>
        <ContactCard>
        </ContactCard>
      </div>
    );
  }

render(<App />, document.getElementById('root'));
