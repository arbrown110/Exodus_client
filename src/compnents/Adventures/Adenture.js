import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import EventsContainer from '../../containers/EventsContainer'
import { connect } from 'react-redux'
import { deleteAdventure } from '../../actions/adventuresActions'


  class Adventure extends Component {
    handleClick(){
      this.props.deleteAdventure(this.props.adventure.id)
    }

    render(){
      const { adventure } = this.props

      return (
        <Grid >
          <Grid.Column>
            <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <Card.Content >
                <strong>Name: {adventure.title}</strong>
                <br/>
                Image: {adventure.image_url}
                <br/>
                <br/>
                <Button  variant="primary" onClick={ () => this.handleClick() }>Delete </Button>
              </Card.Content>
              <br/>
              <Card.Content extra>
                <EventsContainer adventure={adventure}/>
              </Card.Content>
              <br></br>
          </Card>
        </Grid.Column>
      </Grid>
      )
    }
  }


export default connect(null, { deleteAdventure })(Adventure);