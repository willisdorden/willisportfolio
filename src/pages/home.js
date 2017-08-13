import React, { Component } from 'react';
import Typist from 'react-typist';
import Delay from "react-delay";
import './home.css';
import willis from "../img/willis.jpg";
import willis2 from '../img/willis2.JPG';

const styles = {
    // justifyContent: "center",

    height: "800",
    backgroundColor: "Black",
};
const img ={
    height:200,
    width:200
};


class Home extends Component {
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
            <div style={styles} className="Typist">
                <Typist
                    className="Typist-header"
                    avgTypingSpeed={25}
                    startDelay={2000}
                    onTypingDone={this.onHeaderTyped}
                >
                    <a>Welcome                      </a>
                </Typist>
                <Delay
                    wait={3500}
                >
                <img style={img} src={willis} />
                </Delay>

                <div className="Typist-content">
                    {this.state.renderMsg ? (
                        <Typist
                            className="Typist-message"
                            delayGenerator={this.delayGen}
                            cursor={{ hideWhenDone: true }}
                        >
                            My name is Willis Dorden
                            <br />
                            I am a full stack Developer
                            <br />
                            {''}
                        </Typist>
                    ) : null }
                </div>
            </div>
        );
    }

}

export default Home;