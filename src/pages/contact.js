import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './contact.css';
import Map from './map';
const styles = {
    // justifyContent: "center",

    height: "100%",
    backgroundColor: "",
};




class Contact extends Component {


    componentWillMount() {

    }

    render() {

        return (
            <div style={styles} className="contact" id="contact">
                <Grid>
                <div className="container">
                    <div className="heading">
                        <h2>Contact</h2>
                        <h3>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br />
                            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.
                        </h3>
                    </div>
                </div>

                <div className ="container">
                    <Row>
                        <Col md={7}>
                            <div className="map"  ref='map'>
                                <Map google={this.props.google}/>
                            </div>
                        </Col>>

                        <div className="contact-info">
                            <Col md={5}>
                                <h4>My Contact Info</h4>
                                <h5>Willis Dorden</h5>
                                <p></p>
                                <ul>
                                    <li><i className="fa fa-home fa-2x"></i> 233 goldenrain dr unit 203</li>
                                    <li><i className="fa fa-phone fa-2x"></i>(407)491-3118</li>
                                    <li><i className="fa fa-envelope fa-2x"></i>willisdorden@gmail.com</li>
                                    <li><i className="fa fa-download fa-2x"></i> Download My Resume</li>
                                </ul>
                            </Col>
                            </div>
                    </Row>
                </div>

                <div className="container">
                    <Row>
                        <Col sm={8} md={8} >
                            <form action="" method="post" role="form" className="contactForm">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div class="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>

                                <div className="text-center"><button type="submit" className="contact submit">Send Message</button></div>
                            </form>
                         </Col>
                    </Row>
                </div>
                </Grid>
            </div>

        );
    }
        }
export default Contact;