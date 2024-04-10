import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserSelection from "./components/UserSelection";
import { ethers } from "ethers";
import ABI from './web3/contractAbi.json'

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const fetchContractDetails = async () => {
    try {
      const getProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(getProvider);

      const contractAddress = "0x75DDEA6B063886587b5e3A1B4ae0947367E2F663";

      const getSigner = getProvider.getSigner();

      const walletAddress = await getSigner.getAddress();
      setWalletAddress(walletAddress);

      const getContract = new ethers.Contract(walletAddress, ABI.abi, getSigner);
      setContract(getContract);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccountsChanged = async (accounts) => {
    setIsWalletConnected(accounts.length > 0);
  };

  useEffect(() => {
    fetchContractDetails();

    // Add event listener for Metamask account change
    window.ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      // Cleanup event listener
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, [walletAddress]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UserSelection />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
