import React, { useState, useEffect } from "react";
import Web3 from "web3";
import SimpleWalletABI from "../artifacts/contracts/SimpleWallet.sol/SimpleWallet.json";

const SimpleWallet = ({ address }) => {
  const [balance, setBalance] = useState(0);
  const [transferAddress, setTransferAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [web3, setWeb3] = useState(null)
  const [userAddress, setUserAddress] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setUserAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
    contract ? 
      setContract(new web3.eth.Contract(SimpleWalletABI.abi, address))
      : console.log("Error setting contract")
  }, [])

  const transfer = async () => {
    await contract.methods.transfer(transferAddress, transferAmount).send({ from: web3.eth.defaultAccount });
    const balance = await contract.methods.balanceOf(web3.eth.defaultAccount).call();
    setBalance(balance);
  };

  return (
    <div>
    {web3 ?
      <div>
        <p>Balance: {balance} ETH</p>
        <input type="text" placeholder="Recipient address" value={transferAddress} onChange={(e) => setTransferAddress(e.target.value)} />
        <input type="number" placeholder="Amount" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
        <button onClick={transfer}>Transfer</button>
      </div>
      : <p>"Please Install Metamask"</p>
    }
    </div>
  );
};

export default () => (
    <SimpleWallet
      address="0x5FbDB2315678afecb367f032d93F642f64180aa3"
    />
);