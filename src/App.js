import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import './App.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './sidemenu/sidemenu';
import SidebarContent from './sidemenu/sidemenuContent';
import MaterialTitlePanel from './sidemenu/sidemenu material';
import Home from './pages/home';
import About from './pages/about';
 import './App.scss';
injectTapEventPlugin();
const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '',
        backgroundColor: "white",
        height:"100%"
    },
    title:{
        textAlign: 'center'
    }
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            docked: false,
            open: false,
        };


        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
    }



    onSetOpen(open) {
        this.setState({open: open});
    }



    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    }



    render() {
        const sidebar = <SidebarContent />;


        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen.bind(this)} href="/" style={styles.contentHeaderMenuLink}>=</a>}
              <span style={styles.title}>Menu</span>
      </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen,
        };

        return (

            <div className="App">
              <Sidebar {...sidebarProps} >
                <MaterialTitlePanel title={contentHeader}>
                  <div style={styles.content}>

                    <Route exact path ="/" component={Home} />
                    <Route   path ="/about" component={About} />


                  </div>
                </MaterialTitlePanel>
              </Sidebar>

            </div>







        );
    }
}

export default App;
