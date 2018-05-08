import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataCollector: '',
      kwPrice: 0,
      debt: 0,
      kwGenerated: 0
    }

    this.handleChangeDataCollector = this.handleChangeDataCollector.bind(this)
    this.handleSetDataCollector = this.handleSetDataCollector.bind(this)

    this.handleChangeKwPrice = this.handleChangeKwPrice.bind(this)
    this.handleSetKwPrice = this.handleSetKwPrice.bind(this)

    this.handleChangeKwGenerated = this.handleChangeKwGenerated.bind(this)
    this.handleSetKwGenerated = this.handleSetKwGenerated.bind(this)

    this.handleChangeDebt = this.handleChangeDebt.bind(this)
    this.handleSetDebt = this.handleSetDebt.bind(this)
  }

  handleSetDataCollector(event) {
    event.preventDefault();
    this.props.setDataCollector(this.state.dataCollector)
  }

  handleChangeDataCollector(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSetKwPrice(event) {
    event.preventDefault();
    this.props.setKwPrice(this.state.kwPrice)
  }

  handleChangeKwPrice(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSetKwGenerated(event) {
    event.preventDefault();
    this.props.setKwGenerated(this.state.kwGenerated)
  }

  handleChangeKwGenerated(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSetDebt(event) {
    event.preventDefault();
    this.props.setDebt(this.state.debt)
  }

  handleChangeDebt(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div >

        <nav className="navbar navbar-toggleable-md">

          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <li><a className="navbar-brand" to="/">Apollo</a></li>
            </div>
          </div>
        </nav>

        <div className="container">
          <h1>Admin</h1>
          <h3>{this.props.isCrowdfundingPeriod === true ? "In crowdfunding period" : "Crowdfunding period ended"}</h3>
          <h5>This is only in terms of the demo, in the real MVP it's going to be automated.</h5>

          <button type="button" className="btn btn-danger" onClick={this.props.endCrowdfundingPeriod}>End Crowdfunding Period</button>
          <button type="button" className="btn btn-danger" onClick={this.props.resetData}>Reset Data</button>

          <form onSubmit={this.handleSetDataCollector}>
            <div>
              <p>Data Collector Address: {this.props.dataCollector}</p>
              <input type="text" name="dataCollector" value={this.state.dataCollector || ''} 
                onChange={this.handleChangeDataCollector} />
            <input type="submit" className="btn btn-primary" value="Set Data Collector" />
            </div>
          </form>

          <form onSubmit={this.handleSetKwPrice}>
            <div>
              <p>KW Price: {this.props.kwPrice}</p>
              <input type="number" name="kwPrice" value={this.state.kwPrice || ''} 
                onChange={this.handleChangeKwPrice} />
              <input type="submit" className="btn btn-primary" value="Set KW Price" />
            </div>
          </form>

          <form onSubmit={this.handleSetKwGenerated}>
            <div>
              <p>KW Generated: {this.props.kwGenerated}</p>
              <input type="number" name="kwGenerated" value={this.state.kwGenerated || ''} 
                onChange={this.handleChangeKwGenerated} />
              <input type="submit" className="btn btn-primary" value="Set KW Generated" />
            </div>
          </form>

          <form onSubmit={this.handleSetDebt}>
            <div>
              <p>Set debt: {this.props.debt}</p>
              <input type="number" name="debt" value={this.state.debt || ''} 
                onChange={this.handleChangeDebt} />
            <input type="submit" className="btn btn-primary" value="Set Debt" />
            </div>
          </form>

          <p>Project total contribution: {this.props.totalContribution}</p>

        </div> 


      </div> 
    );
  }
}

export default Admin