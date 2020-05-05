const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface,bytecode } = require('./compiler');

const provider = new HDWalletProvider(
    'use pet twelve runway glance vintage capable banana wrong interest sugar twin',
    'https://rinkeby.infura.io/v3/7726b1123e86406abe06c2a153cea51e'
);
const web3 = new Web3(provider);

const deployFunction = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log('trying to deploy from account '+accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data:bytecode})
                    .send({from:accounts[0],gas:'1000000'});

    console.log(interface);
    console.log('contract deployed to '+result.options.address);
};
deployFunction();