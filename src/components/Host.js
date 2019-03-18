import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    <Card
      className="host"
      // {/* NOTE: The className "host selected" renders a different style than simply "host". */}
      onClick={()=> {props.handleSelectHost(props.character)}}
      image={props.character.imageUrl}
      raised
    />
  )
}

export default Host
