import React, { Component } from 'react';
import './App.css';

import Admin from './pages/Admin';
import { projectContract, web3 } from './EthereumSetup';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Profile from './pages/Profile.jsx';
import Project1 from './pages/Project1.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coinbase: null,
      isCrowdfundingPeriod: true,
      owner: null,
      pricePerKW: null,
      kwGenerated: null,
      myStake: 10,
      debt: null,
      dataCollector: null,
      totalContribution: null,
      myContribution: null,
    }

    this.getCoinbase = this.getCoinbase.bind(this);  
    this.endCrowdfundingPeriod = this.endCrowdfundingPeriod.bind(this);
    this.getIsCrowdfundingPeriod = this.getIsCrowdfundingPeriod.bind(this);
    this.getOwner = this.getOwner.bind(this)
    this.contribute = this.contribute.bind(this)
    this.getKWGenerated = this.getKWGenerated.bind(this)
    this.getMyStake = this.getMyStake.bind(this)
    this.setDataCollector = this.setDataCollector.bind(this)
    this.setKwPrice = this.setKwPrice.bind(this)
    this.setKwGenerated = this.setKwGenerated.bind(this)
    this.setDebt = this.setDebt.bind(this)
    this.getDebt = this.getDebt.bind(this)
    this.payDebt = this.payDebt.bind(this)
    this.getDataCollector = this.getDataCollector.bind(this)
    this.getKwPrice = this.getKwPrice.bind(this)
    this.getProjectTotalContribution = this.getProjectTotalContribution.bind(this)
    this.resetData = this.resetData.bind(this)
    this.getMyContribution = this.getMyContribution.bind(this)

  }


  componentWillMount() {
    this.getCoinbase()
    this.getIsCrowdfundingPeriod()
    this.getOwner()
    this.getKWGenerated()
    this.getDebt()
    this.getDataCollector()
    this.getKwPrice()
    //this.getProjectTotalContribution()
    //this.getMyStake()
  }

  getCoinbase() {
    web3.eth.getCoinbase(function(error, result) {
      this.setState({ coinbase: result });
    }.bind(this))
  }

  endCrowdfundingPeriod() {
    console.log("endCrowdfundingPeriod")
    /*
    projectContract.endCrowdfundingPeriod(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("endCrowdfundingPeriod ", result)        
        this.setState({ 
          isCrowdfundingPeriod: false
        })
      }.bind(this)
    )
    */
  }

  resetData() {
    projectContract.resetData(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("resetData", result)        
      }.bind(this)
    ) 
  }

  getIsCrowdfundingPeriod() {
    projectContract.getIsCrowdfundingPeriod(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getIsCrowdfundingPeriod ", result)        
        this.setState({ 
          isCrowdfundingPeriod: result
        })
      }.bind(this)
    )
  }

  getOwner() {
    projectContract.getOwner(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getOwner ", result)        
        this.setState({ 
          owner: result
        })
      }.bind(this)
    )
  }

  contribute(_contributionAmount) {
    projectContract.contribute(
      _contributionAmount,
      {from: this.state.coinbase},
      function(error, result) {
        console.log("contribute ", result)        

      }.bind(this)
    )
  }

  getKwPrice() {
    projectContract.getKwPrice(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getKwPrice ", result)        
        this.setState({
          kwPrice: result.c[0]
        })
      }.bind(this)
    )
  }

  getKWGenerated() {
    projectContract.getKwGenerated(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getKwGenerated ", result)        
        this.setState({
          kwGenerated: result.c[0]
        })
      }.bind(this)
    )
  } 

  getMyContribution() {
    projectContract.getMyContribution(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("myContribution", result)        
        this.setState({
          myContribution: result.c[0]
        })
      }.bind(this)
    )
  }

  getMyStake() {
    projectContract.getMyStake(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("myStake", result)        
        this.setState({
          myStake: result.c[0]
        })
      }.bind(this)
    )
  }

  getDebt() {
    projectContract.getDebt(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getDebt ", result)        
        this.setState({
          debt: result.c[0]
        })
      }.bind(this)
    )
  }

  getDataCollector(){
    projectContract.getDataCollector(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("setDataCollector ", result)   
        this.setState({
          dataCollector: result
        })     
      }.bind(this)  
    )
  }

  setDataCollector(_dataCollector) {
    projectContract.setDataCollector(
      _dataCollector,
      {from: this.state.coinbase},
      function(error, result) {
        console.log("setDataCollector ", result)        
      }.bind(this)  
    )
  }

  setKwPrice(_kwPrice) {
    projectContract.setKwPrice(
      _kwPrice,
      {from: this.state.coinbase},
      function(error, result) {
        console.log("setKwPrice ", result)        
      }.bind(this)  
    )
  }

  setKwGenerated(_kwGenerated) {
    projectContract.setKwGenerated(
      _kwGenerated,
      {from: this.state.coinbase},
      function(error, result) {
        console.log("kwGenerated ", result)        
      }.bind(this)  
    )
  }

  setDebt(_debt) {
    projectContract.setDebt(
      _debt,
      {from: this.state.coinbase},
      function(error, result) {
        console.log("setDebt ", result)        
      }.bind(this)  
    )
  }

  payDebt() {
    console.log('debt', this.state.debt)
    projectContract.payDebt(
      {from: this.state.coinbase, value: web3.toWei(this.state.debt, 'ether')},
      function(error, result) {
        console.log("payDebt ", result)        
      }.bind(this)  
    )
  }

  getProjectTotalContribution() {
    projectContract.getProjectTotalContribution(
      {from: this.state.coinbase},
      function(error, result) {
        console.log("getProjectTotalContribution ", result.c[0])
        this.setState({
          totalContribution: result.c[0]
        })        
      }.bind(this)  
    )
  }

  render() {
    return (
      <div>
        {
          (function() {
            switch(this.state.coinbase) {
              case this.state.owner:
                return <Admin 
                  endCrowdfundingPeriod={this.endCrowdfundingPeriod} 
                  isCrowdfundingPeriod={this.state.isCrowdfundingPeriod}
                  setDataCollector={this.setDataCollector}
                  setKwPrice = {this.setKwPrice}
                  setKwGenerated = {this.setKwGenerated}
                  kwPrice = {this.state.kwPrice}
                  kwGenerated = {this.state.kwGenerated}
                  setDebt = {this.setDebt}
                  debt={this.state.debt}
                  dataCollector={this.state.dataCollector}
                  totalContribution={this.state.totalContribution}
                  resetData={this.resetData}
                  
                  /> 
              default:
                return <Router>
                <div>
                  <Navbar />
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/projects" component={Projects}/>
                  <Route exact path="/projects/2" render={props => 
                    <Project1 {...props} contribute = {this.contribute}
                    getProjectTotalContribution={this.getProjectTotalContribution}                                        
                    totalContribution={this.state.totalContribution} 
                    />
                  }/>  
                  <Route exact path="/profile" render={props => 
                    <Profile {...props} kwPrice={this.state.kwPrice}
                      kwGenerated={this.state.kwGenerated}
                      myStake={this.state.myStake}
                      debt={this.state.debt}
                      payDebt={this.payDebt}
                      isDataCollector={this.state.dataCollector === this.state.coinbase}
                      totalContribution={this.state.totalContribution}
                      getMyStake={this.getMyStake}
                      getProjectTotalContribution={this.getProjectTotalContribution}
                      getMyContribution={this.getMyContribution}
                      myContribution={this.state.myContribution} 
                    />
                  }/>        
                  </div>
              </Router>
            }
          }.bind(this))()          
        }
      </div>
    );
  }
}

export default App;