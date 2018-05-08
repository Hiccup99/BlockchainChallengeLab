import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class Profile extends Component {
  constructor(props) {
    super(props)

    this.getMyStake = this.getMyStake.bind(this)
  }


  componentWillMount() {
    console.log(this.props.pricePerKW)
    this.props.getProjectTotalContribution()
    this.props.getMyContribution()
  }

  getMyStake() {
    this.props.getMyStake()
  }

  render() {
    return (
      <div>
        <Jumbotron title="Profile"/>


        <div className="container">

          {this.props.isDataCollector === false ?
            <div>
              <h1>Pavagada Solar Park project</h1>
              <h4>Investor</h4>
              <p>Paying price per KW: {this.props.kwPrice} ETH / KW</p>
              <p>KW generated since investment: {this.props.kwGenerated} KW</p>

              <p>Your contribution: {this.props.myContribution || 0} USD</p>
              <p>Total contribution:  {this.props.totalContribution} USD</p>
            </div>
            :
            <div>

              <h1>Pavagada Solar Park project</h1>
              <div className="row">
                <div className="col-sm-6">
                  <p>You can pay the consumption of energy on this page. Just press the button to make the payment correspondig to the debt.</p>
                  <p>KW price: {this.props.kwPrice} ETH / KW</p>
                  <p>KW generated: {this.props.kwGenerated} KW</p>
                  <p>Debt: {this.props.debt} ETH</p>
                  
                </div>
                <div className="col-sm-6">
                  <button onClick={this.props.payDebt} className="btn btn-primary btn-lg btn-block">Pay Debt</button>

                </div>
              </div>
            </div>
          }
        </div>

        
      </div> 
    );
  }
}

export default Profile