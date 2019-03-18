import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  let arrayOfAreas = props.areas.map( (area)=> { return <Area key={area.id} place={area} limit={area.limit} hosts={props.hosts} handleSelectHost={props.handleSelectHost}/>})
  return (
    <Segment id="map" >
      {/* What should we render on the map? */}
      {arrayOfAreas}
    </Segment>
  )
}

export default WestworldMap
