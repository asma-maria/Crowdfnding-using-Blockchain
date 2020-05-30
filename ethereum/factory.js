import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
   
    //'0xa637a1f181BC04cBFC9A8a1888BE70eB7561d1a3'
    '0x41169981820f318C6b83903f1421b83dca3D6186'
);

export default instance;