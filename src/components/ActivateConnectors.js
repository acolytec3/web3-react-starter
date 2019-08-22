import React, { useState } from 'react';
import connectors from "../Connectors.js";
import { useWeb3Context } from "web3-react";

function ActivateConnectors(props) {
  const context = useWeb3Context();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  console.log(Object.keys(connectors));
  if (props.source === 'router'){
    context.setConnector('Network')
  }
  if (context.error) {
    console.error("Error!");
  }
  if (props.source === 'router')
  {  
    return null
  }
  else {
  return (
    <React.Fragment>
      <div>
        {!context.active && (
        <button onClick={() => context.setConnector('Injected')}>
            Metamask
        </button>)}
        {!context.active && (
        <button onClick={() => context.setConnector('Portis')}>
            Portis
        </button>)}
      </div>
      {context.active && (
        <p>Connected!</p>
      )}
    </React.Fragment>
  );
  }
  
}   

export default ActivateConnectors;
