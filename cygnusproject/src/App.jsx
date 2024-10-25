import { useState,useEffect } from 'react'
import { ethers } from 'ethers';
import './App.css'

function App() {
  const [count, setunt] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
      const contractAddress="";
      const contractABI="";
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connecting to the blockchain
      const {ethereum}=window;

      const account =await ethereum.request({
        method:"eth_requestAccounts"
      })
      setAccount(account)
      const provider=new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();

      const contract=new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      

    }
  })

  return (
    <>
      hi there
    </>
  )
}

export default App
