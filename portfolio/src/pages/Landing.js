import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import '../App.css'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="./assets/images/ErikaProfile.png"
                            alt="Profile of Erika"
                            className="profile"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React | NodeJS</p>
                            <div className="social">
                                <a href="https://github.com/eschiavoni2" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/erika-zibelnik-5ab715a4/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
}

export default Landing;