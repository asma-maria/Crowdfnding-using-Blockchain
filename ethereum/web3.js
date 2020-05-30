//  import Web3 from 'web3';
//  let web3;
//  if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
//  //we are in the browser and metamask is running
//  web3 = new Web3(window.web3.currentProvider);
//  }
//  else{
//      //we are on the server and  the user is not running metamask
//      const provider = new Web3.providers.HttpProvider(
//          'https://rinkeby.infura.io/v3/49feba3f12f5485ca8b8a46e23113726'
//      );
//      web3=new Web3(provider);
// }
//  export default web3; 
 import Web3 from 'web3';

 let web3;

 if(typeof window !== 'undefined' && typeof window.web3 != 'undefined'){
     // we are in the browser and metamask is running
     web3 = new Web3(window.web3.currentProvider)


 window.addEventListener('load', async () => {
     window.ethereum.autoRefreshOnNetworkChange = false;
     // Modern dapp browsers...
     if (window.ethereum) {
         window.web3 = new Web3(window.ethereum);
         try {
             // Request account access if needed
             await window.ethereum.enable();
             // Acccounts now exposed
             web3.eth.sendTransaction({/* ... */});
         } catch (error) {
             // User denied account access...
         }
     }
     // Legacy dapp browsers...
     else if (window.web3) {
         window.web3 = new Web3(web3.currentProvider);
         // Acccounts always exposed
         web3.eth.sendTransaction({/* ... */});
     }
     // Non-dapp browsers...
     else {
         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
     }
 });

 }else{
     // we are on the server OR the user is not running metamask
     const provider = new Web3.providers.HttpProvider(
         'https://rinkeby.infura.io/v3/49feba3f12f5485ca8b8a46e23113726'
     );

     web3 = new Web3(provider);
 }

export default web3;