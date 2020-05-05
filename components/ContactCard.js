import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import { Button, Card, Image, List, Divider, Grid } from 'semantic-ui-react'

const ContactCard = (props) => {
  let { profile } = props
  console.log(profile)
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src="https://www.thepeakid.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
        />
        <Card.Header>{profile.firstName} {profile.lastName}</Card.Header>
        <Card.Content>
          <Card.Meta textAlign="left">{profile.jobTitle}</Card.Meta>
          <Card.Meta textAlign="left">{profile.level}</Card.Meta>
        </Card.Content>
        <Divider></Divider>
        <Card.Description>
          <List>
            <List.Item>
              <List.Icon name='phone' />
              <List.Content>
                <a>(123) 456 7891</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='marker' />
              <List.Content>San Francisco, CA</List.Content>
            </List.Item>
          </List>
          {profile.about}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ContactCard