import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    // console.log(this.props.hosts)
    // console.log(this.props.selected)
    let hostsForStorage = this.props.hosts.filter((host)=>{ host.active })
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} handleSelectHost={this.props.handleSelectHost}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details areas={this.props.areas} selected={this.props.selected} handleActive={this.props.handleActive} handleHostArea={this.props.handleHostArea}/>
        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel ableToActivate={this.props.ableToActivate} handleActivateAll={this.props.handleActivateAll}/>

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
