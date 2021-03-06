import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = (props) => {
  const dummyLogs = () => {
    // This is just to show you how this should work. But where should the log data actually get stored?
    console.log(props.logs)
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = (props.logs.length > 1 ? props.logs : [])

    // logs.unshift(Log.warn("This is an example of a warn log"))
    // logs.unshift(Log.notify("This is an example of a notify log"))
    // logs.unshift(Log.error("This is an example of an error log"))

    return logs
  }

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      <Button
        fluid
        color={props.ableToActivate ? "red" : "blue"}
        // {/* This isn't always going to be the same color...*/}

        content={props.ableToActivate ? "ACTIVATE ALL" : "DECOMMISSION ALL"}
        onClick={props.handleActivateAll}
        // {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      />
    </Segment>
  )
}

export default LogPanel
