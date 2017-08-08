import React, {Component} from 'react';
import {Router, browserHistory, Route} from 'react-router';

import './App.css';
import 'antd/dist/antd.css';


const Page = ({title}) => (
    <div className="App">
       
    </div>
);

const Home = (props) => (<Page title="Home"/>);

const About = (props) => (<Page title="About"/>);

const Settings = (props) => (<Page title="Settings"/>);

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/settings" component={Settings}/>
            </Router>
        );
    }
}

export default App;
