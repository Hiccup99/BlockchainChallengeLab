import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class Projects extends Component {
  render() {
    return (
      <div>
        <Jumbotron title="Projects"/>
        <div className="container">


          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                  <img src="https://l0dl1j3lc42iebd82042pgl2-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2017/10/suburban-house-roof-solar-panels.jpg" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                    <li>Total Funding = $18,000</li>
                    </ul>	
                  </div>
                </a>
              </div>

              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                    <img src="https://www.hitachi-hightech.com/products/images/12084/ind-pp_002_main.jpg" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                    <li>Total Funding = $158,000</li>
                    </ul>	
                  </div>
                </a>

              </div>

              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                    <img src="https://i2.wp.com/rcenergysolutions.com/wp-content/uploads/2016/06/Do-Solar-Panels-Add-Value-to-Your-Home.jpg?fit=1136%2C692&ssl=1" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                      <li>Total Funding = $1,058,000</li>
                    </ul>	
                  </div>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                    <img src="https://www.sciencenews.org/sites/default/files/2016/12/main/blogposts/ticker_solar_panels_free.jpg" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                      <li>Total Funding = $2,128,000</li>
                    </ul>	
                  </div>
                </a>
              </div>

              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                    <img src="http://a57.foxnews.com/images.foxnews.com/content/fox-news/politics/2017/06/07/report-trump-suggests-solar-panels-for-border/_jcr_content/par/featured_image/media-0.img.jpg/876/493/1496807089124.jpg?ve=1&tl=1" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                      <li>Total Funding = $15,000</li>
                    </ul>	
                  </div>
                </a>

              </div>

              <div className="col-sm-4">
                <a  href="projects/2">
                  <div className="image-box">
                    <img src="https://dallasnews.imgix.net/1513267333-IKEAsolarpanels_AL008.JPG?auto=format%2Cenhance&crop=faces%2Centropy&fit=crop&q=40&or=0&w=1024&h=543" alt="ss" />
                    <div className="card-data">
                      <h3>Pavagada Project</h3>
                      <p>Ongoing</p>
                    </div>
                    <ul className="social-links">
                      <li>Total Funding = $18,000</li>
                    </ul>	
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Projects
