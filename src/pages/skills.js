import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import light from '../img/light.png';
import bootstrap from '../img/bootstrap.png';
import coding from '../img/coding.jpg';
import css from '../img/css.jpg';
import firebase from '../img/firebase.jpg';
import react from '../img/react.png';
import javascript from '../img/javascript.png';
import monogodb from '../img/mongodb.png';
import mysql from '../img/mysql.png';
import node from '../img/node.png';
import sequlized from '../img/sequlized.jpg';


import './skills.css';


const styles = {
    // justifyContent: "center",

    height: "100%",
    backgroundColor: "",
};
const progressbarnode={
    width: "85%"
};
const progressbarreact={
    width: "90%"
};
const progressbarCss={
    width: "80%"
};
const progressbarMysql={
    width: "80%"
};
const img ={

    height:260,
    width:600
};
const Bootstrap ={
    backgroundImage:`url(${bootstrap})`,

};
const Coding ={
    backgroundImage:`url(${coding})`,

};
const CSS ={
    backgroundImage:`url(${css})`,

};
const Firebase ={
    backgroundImage:`url(${firebase})`,

};
const Reacts ={
    backgroundImage:`url(${react})`,
    height:50,
    width:50
};
const Javascript ={
    backgroundImage:`url(${javascript})`,

};
const Monogodb ={
    backgroundImage:`url(${monogodb})`,

};
const MYSQL ={
    backgroundImage:`url(${mysql})`,

};const Node ={
    backgroundImage:`url(${node})`,

};
const Sequlize ={
    backgroundImage:`url(${sequlized})`,

};



class Skills extends Component {


    render() {

        return (
            <div style={styles} className="specialties" id="specialties">
                <Grid>
                <div className="container">
                    <div className="heading text-center">
                        <h2>Techinal Skills</h2>
                        <h3>Node.js, Express, JavaScript, jQuery, GIT, Github, MongoDB, MySQL, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, the command line</h3>
                    </div>
                </div>

                <div className="container">
                    <Row>
                        <Col md={6} >
                            <div className="skill">
                                <div className="progress-wrap">
                                    <h3>Node.js</h3>
                                    <div className="progress">
                                        <div className="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={progressbarnode}>
                                            <span className="bar-width">70%</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="progress-wrap">
                                    <h3>React</h3>
                                    <div className="progress">
                                        <div className="progress-bar color2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressbarreact}>
                                            <span className="bar-width">95%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-wrap">
                                    <h3>CSS</h3>
                                    <div className="progress">
                                        <div className="progress-bar color3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={progressbarCss}>
                                            <span className="bar-width">80%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-wrap">
                                    <h3>MySQL</h3>
                                    <div className="progress">
                                        <div className="progress-bar color4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressbarMysql}>
                                            <span className="bar-width">80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col md={6} >
                            <img style={img} src={light} className="img-responsive" />
                        </Col>
                    </Row>
                </div>

                <div className="container">
                    <Row>
                        <Col sm={4} md={4} >
                            <div className="skills">
                                <h3 className="main text-center">WEB DESIGN</h3>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Reacts}>
                                    </div>
                                    <h5>React</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={CSS}>
                                    </div>
                                    <h5>CSS</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Bootstrap}>
                                    </div>
                                    <h5>Bootstrap</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={4} >
                            <div className="skills">
                                <h3 className="main text-center">BackEnd</h3>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Node}>
                                    </div>
                                    <h5>Node.js</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Javascript}>
                                    </div>
                                    <h5>JavaScript</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Sequlize}>
                                    </div>
                                    <h5>Sequlized</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={4} >
                            <div className="skills">
                                <h3 className="main text-center">Databases</h3>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={MYSQL}>
                                    </div>
                                    <h5>MySQL</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Monogodb}>
                                    </div>
                                    <h5>Mongodb</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                                <div className="restitem clearfix">
                                    <div className="rm-thumb" style={Firebase}>
                                    </div>
                                    <h5>Firebase</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor sit amet lacus ultricies rutrum.
                                        Curabitur vitae fringilla elit. Sed at nunc congue, cursus erat ac, pellentesque eros.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Grid>
            </div>

    );
    }

}

export default Skills;
