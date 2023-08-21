const { ethers } = require('ethers');
require('dotenv').config()
const dotenv = require('dotenv');
dotenv.config();

const rpcURL = process.env.RPC_URL
const usdt_contract_address = process.env.CONTRACT

const provider = new ethers.providers.JsonRpcProvider(rpcURL)
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)"
]
const contract = new ethers.Contract(usdt_contract_address, ERC20_ABI, provider)
 
const main = async () => {
   const name = await contract.name()
   const symbol = await contract.symbol()
   const totalSupply = await contract.totalSupply()
   console.log(name, symbol, totalSupply.toString())
}

main()
