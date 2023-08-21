const { ethers } = require('ethers');
require('dotenv').config()

const dotenv = require('dotenv');
dotenv.config();

const rpcURL = process.env.RPC_URL
const address = process.env.TEST_ADDRESS

const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const main = async () => {
    const test_balance = await provider.getBalance(address)
    console.log("The current balance for the test account is:", ethers.utils.formatEther(test_balance))
}

main()
