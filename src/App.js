import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
import { Log } from './services/Log'



class App extends Component {

  state = {
    areas: [],
    hosts: [],
    selectedHost: "none",
    ableToActivate: true,
    logs: []
  }

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  // hosts: [...this.state.hosts].filter(host => host !== hostObj),

  handleActive = (hostObj) => {
    let newArr = [...this.state.hosts.filter((host)=> {return host !== hostObj})]
    let chosen = hostObj
    chosen.active = !chosen.active
    this.setState({
      hosts: [...newArr, chosen],
      selectedHost: chosen
    })
  }

  handleHostArea = (value, hostObj) => {
    // console.log("helen's ", hostObj)

    let foundArea = this.state.areas.find((area)=> {return area.name === value})
        console.log('limit', foundArea.limit)
        let hostsInArea = this.state.hosts.filter((host)=> {return host.area === value}).length
        console.log('hosts in area', hostsInArea)
    if ( hostsInArea < foundArea.limit) {
      let newArr = [...this.state.hosts].map((host)=> {
        if(host !== hostObj){
          return host
        } else {
          hostObj.area = value
          return hostObj
        }
      })
      console.log("broken")
      this.setState({
        hosts: newArr,
        selectedHost: hostObj,
        logs: [Log.notify(`${hostObj.firstName} set in area ${hostObj.area}`), ...this.state.logs]
      })
  } else {
    let updatedLogs = [Log.warn(`${foundArea.name} is at max capacity of ${foundArea.limit}`), ...this.state.logs]
    this.setState({ logs: updatedLogs})
  }

  }

  handleActivateAll = () => {
    let newArr = [...this.state.hosts]
    newArr.map((host) => {
      if (this.state.ableToActivate) {
      return host.active = true
    } else if (this.state.ableToActivate === false){
      return host.active = false
    }
    })
    this.setState({
      ableToActivate: !this.state.ableToActivate,
      hosts: newArr
    })
  }

  handleSelectHost = (hostObj) => {
    this.setState({ selectedHost: hostObj})
  }

  componentDidMount() {

  fetch('http://localhost:4000/areas')
  .then(res => res.json())
  .then(areas => this.setState({areas: areas}))

  fetch('http://localhost:4000/hosts')
  .then(res => res.json())
  .then(hosts => {
    this.setState({hosts: hosts})
  })

  }


  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} handleSelectHost={this.handleSelectHost}/>
        { this.state.hosts.length > 0 ? <Headquarters logs={this.state.logs} ableToActivate={this.state.ableToActivate} handleActivateAll={this.handleActivateAll} handleActive={this.handleActive} handleHostArea={this.handleHostArea} areas={this.state.areas} hosts={this.state.hosts} selected={this.state.selectedHost} handleSelectHost={this.handleSelectHost}/> : <p> Loading </p>}
      </Segment>
    )
  }
}

export default App;
