import React from 'react';
import { Button, Card } from 'semantic-ui-react';


const Event = ({ event, deleteEvent, adventure }) => {
  return(
    <Card>
      <Card.Content>
        <Card.Description>
          {event.title}
          {event.description}
          {event.krio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button variant="primary" onClick={() => deleteEvent(event, adventure)}>Delete</Button>
      </Card.Content>
    </Card>
  )
}
export default Event;