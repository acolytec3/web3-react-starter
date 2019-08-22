import { Connectors } from "web3-react";
//import TrezorApi from "trezor-connect";
//import WalletConnectApi from "@walletconnect/web3-subprovider";
//import FortmaticApi from "fortmatic";
import PortisApi from "@portis/web3";

const {
  InjectedConnector,
  NetworkOnlyConnector,
 // TrezorConnector,
 // LedgerConnector,
 // WalletConnectConnector,
 // FortmaticConnector,
  PortisConnector
} = Connectors;

const supportedNetworkURLs = {
  1: "https://mainnet.infura.io/v3/",
  3: "https://ropsten.infura.io/v3/",
  4: "https://rinkeby.infura.io/v3/"
};

// const defaultNetwork = 1;

const Metamask = new InjectedConnector({
  supportedNetworks: [3]
});

const Network = new NetworkOnlyConnector({
  providerURL: supportedNetworkURLs[3]
});
/*
const Trezor = new TrezorConnector({
  api: TrezorApi,
  supportedNetworkURLs,
  defaultNetwork,
  manifestEmail: "",
  manifestAppUrl: ""
});

const Ledger = new LedgerConnector({
  supportedNetworkURLs,
  defaultNetwork
});

const WalletConnect = new WalletConnectConnector({
  api: WalletConnectApi,
  bridge: "https://bridge.walletconnect.org",
  supportedNetworkURLs,
  defaultNetwork
});

const Fortmatic = new FortmaticConnector({
  api: FortmaticApi,
  apiKey: "",
  logoutOnDeactivation: false
});
*/
const Portis = new PortisConnector({
  api: PortisApi,
  dAppId: "ee7c5125-0a8c-4a07-ae5c-c1e430e3d1ca",
  network: "ropsten"
});

export default {
  Metamask,
  Network,
/*  Trezor,
  Ledger,
  WalletConnect,
  Fortmatic,*/
  Portis
};
