import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = (props) => {

let hostsForStorage = props.hosts.filter((host) => { return host.active === false})

  return (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

      <HostList hosts={hostsForStorage} handleSelectHost={props.handleSelectHost}/>

    </Segment>
  </Segment.Group>
)
}

export default ColdStorage
