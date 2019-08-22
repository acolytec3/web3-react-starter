import React, { useState } from 'react';
import connectors from "../Connectors.js";
import { useWeb3Context } from "web3-react";

function ActivateConnectors(props) {
  const context = useWeb3Context();
  const [show, setShow] = useState(true);
  
  
  function sendTransaction() {
     const signer = context.library.getSigner();
        
     signer.sendTransaction({
        to: ethers.constants.AddressZero,
        value: ethers.utils.bigNumberify('0')
     })
      .then(({ hash }) => {
        setTransactionHash(hash)
      });
    }

  console.log(Object.keys(connectors));
  if (context.error) {
    console.error("Error!");
  }
  else {
  return (
    <React.Fragment>
      <div>
        {!context.active && (
        <button onClick={() => context.setConnector('Metamask')}>
            Metamask
        </button>)}
        {!context.active && (
        <button onClick={() => context.setConnector('Portis')}>
            Portis
        </button>)}
      </div>
      {context.active && (
        <button onClick={() => context.unsetConnector()}>
          Reset Web3 Connector
          </button>
      )}
      {context.active && (
        <p>Connected with {context.connectorName} on {context.networkId}!</p>
      )}
      {context.active && context.account && (
          <p>Connected account is: {context.account}</p>
      )}
      {context.error && <p>Something went wrong.  Please try connecting to your Web3 provider again.</p>}
      {context.active && context.account && (
        <button onClick={sendTransaction()}>
          Send Dummy Transaction
          </button>
        )}
    </React.Fragment>
  );
  }
  
}   

export default ActivateConnectors;