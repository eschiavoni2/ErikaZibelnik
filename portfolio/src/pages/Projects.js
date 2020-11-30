import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Card 
                shadow={5} 
                style={{minWidth: '450', margin: 'auto'}}
                >
                    <CardTitle 
                    style={{color: '#fff', height: '176px', background: 'url("./assets/images/budget.PNG") center / cover'}} 
                    >
                    </CardTitle>
                    <CardText>
                        This web app allows the user to track their budget. They can add new income, and subtract purchases or other costs. The user can monitor their budget and track highs and lows thanks to the ability to track dates on the graph.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Heroku</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Project 2</h1>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Project 3</h1>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is Project 4</h1>
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div>
                    <h1>This is Project 5</h1>
                </div>
            )
        } else if(this.state.activeTab === 5) {
            return (
                <div>
                    <h1>This is Project 6</h1>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className="tabs">
                <h1>Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project One</Tab>
                    <Tab>Project Two</Tab>
                    <Tab>Project Three</Tab>
                    <Tab>Project Four</Tab>
                    <Tab>Project Five</Tab>
                    <Tab>Project Six</Tab>
                </Tabs>
                <section className="projects">
                    <Grid className="projects">
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    };
}

export default Projects;