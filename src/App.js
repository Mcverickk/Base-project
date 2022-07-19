import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swap from "./components/Swap/Swap";
import Liquidity from "./components/Liquidity/Liquidity";
import Farms from "./components/Farms/Farms";
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [providerContract, setProviderContract] = useState(undefined);
  const [signerContract, setSignerContract] = useState(undefined);
  const [isConnected, setIsConnected] = useState(false);
  const [connectButton, setConnectButton] = useState("Connect");
  const [signer, setSigner] = useState();

  async function Connect() {
    let prov;
    let sign;
    if (typeof window.ethereum !== "undefined") {
      try {
        prov = await new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await prov.send("eth_requestAccounts", []);
        setIsConnected(true);
        setConnectButton(accounts[0]);
        sign = await prov.getSigner();
        //props.setProviderContract(new ethers.Contract(address, abi, prov));
        //props.setSignerContract(new ethers.Contract(address, abi, sign));
        setSigner(sign);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route
            path="/swap"
            element={
              <Swap
                connectButton={connectButton}
                isConnected={isConnected}
                signer={signer}
                connect={Connect}
                providerContract={providerContract}
                signerContract={signerContract}
              />
            }
          />
          <Route
            path="/liquidity"
            element={
              <Liquidity
                connectButton={connectButton}
                isConnected={isConnected}
                signer={signer}
                connect={Connect}
                providerContract={providerContract}
                signerContract={signerContract}
              />
            }
          />
          <Route
            path="/farms"
            element={
              <Farms
                connectButton={connectButton}
                isConnected={isConnected}
                signer={signer}
                connect={Connect}
                providerContract={providerContract}
                signerContract={signerContract}
              />
            } */}
          {/* /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
