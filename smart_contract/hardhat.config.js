/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle');


//all the key value pairs are being made available due to this lib
require('dotenv').config(); 

//environment variables are being loaded here.
const {API_URL_KEY, PRIVATE_KEY} = process.env; 

module.exports ={
  solidity: '0.8.9',
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli:{
      url: API_URL_KEY,
      accounts: [ `${PRIVATE_KEY}` ]
    }
  }
}