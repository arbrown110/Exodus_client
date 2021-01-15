import React from 'react'
import { Grid, Cell } from 'react-mdl';

  export const About = (props) => {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>About</h2>
              <img
                src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png"
                alt="avatar"
                style={{height: '250px'}}
                 />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', align: 'center'}}>.</p>
          </Cell>
          <Cell col={6}>
            <div></div>
          </Cell>
        </Grid>
      </div>
    )
}

export default About;