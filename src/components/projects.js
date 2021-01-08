import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Grid>
            <Cell col={4}>
          {/* Project 1 */}
          <Card className="react" shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'space-evenly', height: '350px' }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/home.PNG) center / cover'}} ></CardTitle>
            <CardText>
              Pet Pal's a MERN stack web application that allows pet lovers to track their pets.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://calm-falls-93556.herokuapp.com/">Pet Pals</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Project3">Github Repo</a></Button>
            </CardActions>
          </Card>
          </Cell>
          <Cell col={4}>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/artgalsearch.png) center / cover'}} ></CardTitle>
            <CardText>
              ArtBook is an Express/Mysql2 web application that allows the user to create a profile, and add art from a museum database into their own personalized artbook.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://quiet-earth-28574.herokuapp.com/">ArtBook</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Project2">Github Repo</a></Button>
            </CardActions>
          </Card>
          </Cell>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/burger.gif) center / cover'}} ></CardTitle>
            <CardText>
              This is a burger logger with MySQL, Node, and Express. Add a burger, and then devour it!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://damp-gorge-35199.herokuapp.com/">Bob's Burgers</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Burger">GitHub Repo</a></Button>
            </CardActions>
          </Card> 

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '350px' }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/fitness.PNG) center / cover'}} ></CardTitle>
            <CardText>
              A nosql and express Fitness Tracker application. This tracker allows the user to enter their workout and look back at their workout dashboard.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://limitless-crag-09447.herokuapp.com/">Fitness Tracker</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Workout-Tracker">GitHub Repo</a></Button>
            </CardActions>
          </Card> 

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '350px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/budget.gif) center / cover'}} ></CardTitle>
            <CardText>
              This is a budget tracking app using express and mongoose, which can be used online or offline. This is a PWA.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://serene-peak-27861.herokuapp.com/">Budget Tracker</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Budget-Tracker">GitHub Repo</a></Button>
            </CardActions>
          </Card> 

          {/* Project 6 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', height: '350px' }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../assets/images/planner.PNG) center / cover'}} ></CardTitle>
            <CardText>
              Work Day Planner is an application that uses third party APIs and jQuery. This app allows the user to enter informatin in and it shows current/past/present time.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://eschiavoni2.github.io/Work-Day-Scheduler/">Work Day Planner</a></Button>
              <Button colored><a href="https://github.com/eschiavoni2/Work-Day-Scheduler">GitHub Repo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
          </Grid>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
