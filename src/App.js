import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import {data} from './resumeData'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
//import Contact from './Components/Contact';

import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  
  componentDidMount(){
    this.setState({resumeData:data})
    console.log(this.state.resumeData)
  }

  render() {
    return (
      <div className="App">
        <Header data={data.main}/>
        <About data={data.main}/>
        <Resume data={data.resume}/>
        <Portfolio data={data.portfolio}/>
        

        <Footer data={data.main}/>
      </div>
    );
  }
}

export default App;
        //<Contact data={this.state.resumeData.main}/>