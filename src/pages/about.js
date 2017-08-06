import React, { Component } from 'react';
import Typist from 'react-typist';

import './about.css';


const styles = {
    // justifyContent: "center",

    height: "800",
    backgroundColor: "Black",
};
const img ={
    height:200,
    width:200
};


class About extends Component {
    constructor(props){
        super(props);
        this.state ={
            renderMsg:false

        }
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    };

    delayGen(mean, std, { line, lineIdx, charIdx, defDelayGenerator }) {
        if (lineIdx === 0 && charIdx === line.length - 1) {
            return 1250;
        }
        if (lineIdx === 1 && charIdx === line.length - 1) {
            return 1250;
        }
        if (lineIdx === 3 && charIdx === line.length - 1) {
            return 1250;
        }
        return defDelayGenerator(mean + 25);
    }

    render() {

        return (
            <div style={styles} className="AboutTypist">
                <Typist
                    className="AboutTypist-header"
                    avgTypingSpeed={45}
                    startDelay={2000}
                    onTypingDone={this.onHeaderTyped}
                >
                    <a>I am looking to embark on a new career path and contribute my skills to a dynamic, fast-paced team.
                        My sincere enthusiasm for frontend and backend development coupled with solid problem-solving skills, demonstrated creativity,
                        proven collaboration capabilities, and ability to work with a wide variety of personality
                        types at all levels would make me an ideal candidate for a developer role with a start-up or well-established company.</a>
                </Typist>
                <div className="AboutTypist-content">
                    {this.state.renderMsg ? (
                        <Typist
                            className="AboutTypist-message"
                            delayGenerator={this.delayGen}
                            cursor={{ hideWhenDone: true }}
                        >

                            <br />
                            {''}
                        </Typist>
                    ) : null }
                </div>
            </div>
        );
    }

}

export default About;