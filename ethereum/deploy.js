const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'famous scrub cat cushion tortoise erosion hobby coin shop edge absorb hollow',
    'https://rinkeby.infura.io/v3/49feba3f12f5485ca8b8a46e23113726'
);

const web3 = new Web3(provider);

const deploy = async() =>{
    accounts = await web3.eth.getAccounts();
    console.log('Attempting from', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({ from: accounts[0], gas: '2000000'});

        console.log('Contract deployed to', result.options.address);

};

deploy();
