import React, { Component } from 'react';

class Project1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contributionAmount: 0
    }

    this.handleChangeContributionAmount = this.handleChangeContributionAmount.bind(this)
    this.handleMakeContribution = this.handleMakeContribution.bind(this)
  }

  componentWillMount() {
    this.props.getProjectTotalContribution()    
  }
  

  handleMakeContribution(event) {
    event.preventDefault();
    this.props.contribute(this.state.contributionAmount)
    //console.log("makereservation", this.state.lockerAddress, this.state.period, this.state.space)
  }

  handleChangeContributionAmount(event) {
    this.setState({ contributionAmount: event.target.value });
  }

  render() {
    return (
    	<div className="container project">

        <h1>Pavagada Solar Park</h1>

        <div className="row row-project">
          <div className="col-sm-4">
            <img src="https://l0dl1j3lc42iebd82042pgl2-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2017/10/suburban-house-roof-solar-panels.jpg" alt="ss" />
          </div>
          <div className="col-sm-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYklra1BUdBterjgX5D_7ZaMEl2MZctxnzmRq2lFAeXB1MCC4n" alt="ss" />

          </div>
          <div className="col-sm-4">
            <img src="https://understandsolar.com/wp-content/uploads/2015/09/solar-homes.jpg" alt="ss" />
          </div>
        </div>

        <div className="information">
          <p>Pavagada Solar Park is a solar park spread over a total area of 13,000 acres (53 km2) in Pavagada taluk,
          Tumkur district, Karnataka. 600 MW of power was commissioned by 31 January 2018. and a further 1,400 MW are planned.
          </p>

          <div className="information">

            <div className="row">

              <div className="col-sm-6">
              <p>Pavagada Solar Power Project is a solar park spread over an area of 2,500 acres (10 km2) in Kamuthi, 90 km from Madurai, in the state of Tamil Nadu, India. The project was commissioned by Adani Power. With a generating capacity of 648 MW at a single location, it is the world's sixth largest (as of 2018) solar park.
ABB commissioned five sub-stations to connect the solar park with the National Grid on 13 June 2016. The Kamuthi Solar Power Project was completed on 21 September 2016 with an investment of around ₹4,550 crore (equivalent to ₹47 billion or US$710 million in 2017).</p>
                <p><b>Total Funding: 6000 USD</b></p>
                <p><b>Total contribution:  {this.props.totalContribution} USD</b></p>
                
              </div>
              <div className="col-sm-6">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">1 year</th>
                      <th scope="col">5 years</th>
                      <th scope="col">10 year</th>
                      <th scope="col">25 year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">Returns</th>
                      <td>10%</td>
                      <td>100%</td>
                      <td>200%</td>
                      <td>500%</td>
                    </tr>
                    <tr>
                      <th scope="col">Net income</th>
                      <td>-</td>
                      <td>0%</td>
                      <td>100%</td>
                      <td>400%</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>
          </div>
               
        </div>

        <div className="invest">
          <h2>Invest</h2>

          <div className="information">

            <p>To make an investment you should verify and send the money to the project's account, put the amount and send the transaction.</p>

            <form onSubmit={this.handleMakeContribution}>
              <div>
                <p>Amount to contribute:</p>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>

                  <input type="number" className="form-control" value={this.state.contributionAmount || ''} 
                    aria-label="Amount (to the nearest dollar)" onChange={this.handleChangeContributionAmount} />
                  
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                  </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Contribute" />
              </div>
            </form>

          </div>


        </div>

      </div>
    );
  }
}

export default Project1
