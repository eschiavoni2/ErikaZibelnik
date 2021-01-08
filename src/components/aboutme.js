import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div>
        <h3 style={{textAlign: 'center'}}>About Me</h3>
          {/* Project 1 */}
          <Card className="width" shadow={5} style={{margin: 'auto', width: '700px', marginBottom: '40px'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(../assets/images/Charlie.jpg) center / cover'}} >Erika Zibelnik</CardTitle>
            <CardText>
              Erika Zibelnik is a former Biologist that moved to Florida and decided for a career path change. She's able to adapt quickly, and come up with innovative ideas that fill spaces. One project she is working on is due to a gap she saw while working as a former Vet Tech. 
              <br />
              <br />
              Contact her today for work or cooperating on projects!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/eschiavoni2">GitHub</a></Button>
              <Button colored><a href="https://www.linkedin.com/in/erika-zibelnik-5ab715a4/">LinkedIn</a></Button>              
            </CardActions>
          </Card>
      </div>
    )
  }
}

export default About;
