import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron title="Welcome"/>
        <div className="container">
          <p>
            Apollo Grid allows you to invest in solar projects, the main idea of this is to give you the opportunity
            to invest in green energy projects without any minimum investment necessary.          
          </p>
          <p>
            We invite you to go to the projects page to see where and when you can invest in the projects, if you have any question
            contact us in the social media channels available for you.
            </p>
        </div>
      </div>
    );
  }
}

export default Home