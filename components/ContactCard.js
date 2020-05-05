import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import { Button, Card, Image } from 'semantic-ui-react'

const ContactCard = (props) => {
  let profile = { props }
  console.log(profile)
  return(
    <Card>
    <Card.Content>
        <Image
          floated='left'
          size='mini'
          src="https://www.thepeakid.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
        />
        <Card.Header>Daniel Martin</Card.Header>
        <Card.Meta>Business Analyst</Card.Meta>
        <Card.Description>
          Loves to binge watch Star Wars
        </Card.Description>
    </Card.Content>
    </Card>
  )
}

export default ContactCard