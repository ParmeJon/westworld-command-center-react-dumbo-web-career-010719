import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList';

const Area = (props) => {

let hostsForArea = props.hosts.filter((host) => { return host.area === props.place.name && host.active})
// let areaOfCards = hostsForArea.map((host)=> { return <Host character={host} />})
// console.log(hostsForArea)

  return (
  <div className='area' id={props.place.name}>
    <h3 className='labels'>{props.place.name.split("_").map(word => word[0].toUpperCase() + word.slice(1) ).join(" ")}</h3>

    <HostList hosts={hostsForArea} handleSelectHost={props.handleSelectHost}/>
    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}

  </div>
)

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.filter((host) => { return host.area === props.place.name && host.active}).length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.place.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
