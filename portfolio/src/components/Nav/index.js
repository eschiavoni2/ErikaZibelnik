import React from 'react';
import "./style.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from "react-router-dom";

const Example = (props) => {
  return (
    <div className="demo-big-content navB">
    <Layout>
        <Header title="Erika Zibelnik" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Erika Zibelnik" className="drawer">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default Example;