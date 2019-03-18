import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  // let arrOfHosts = props.hosts.map((host)=> { return <Host key={host.id} character={host} />})
  return(
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      {props.hosts.map((host)=> { return <Host key={host.id} character={host} handleSelectHost={props.handleSelectHost}/>})}
    </Card.Group>
  )
}

export default HostList
