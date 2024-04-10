import React from 'react';
import { ethers } from 'ethers';
import { abi } from "./contractAbi.json/abi"

const Connect = () => {
    const contract_address = "0x75DDEA6B063886587b5e3A1B4ae0947367E2F663";

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contract_address, abi, signer);

    const registeration = async () => {
        const transactionsContract = createEthereumContract();
        const tx = transactionsContract.registerUser();
        await tx.wait(); 
    }

    const requestLoan = async () => {
        const transactionsContract = createEthereumContract();
        const tx = transactionsContract.requestLoan();
        await tx.wait(); 
    }


    return (
        <div>Connect</div>
    )
}

export default Connect