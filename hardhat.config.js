/**
 * @type import('hardhat/config').HardhatUserConfig
 */


 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");
 const { alchemyApiKey, mnemonic } = require('./secrets.json');



module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }

  },
  networks: {
      localhost: {
        url: `http://127.0.0.1:8545/`,
        accounts: {mnemonic: mnemonic}
      },
      rinkeby: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
        accounts: {mnemonic: mnemonic}
      },
      bsctest: {
        url: `https://data-seed-prebsc-2-s1.binance.org:8545/`,
        accounts: {mnemonic: mnemonic}
      },
      mainnet: {
        url: `https://eth-mainnet.alchemyapi.io/v2/LOTq6i-unlZrg-yS_ZUqOcTU6LOVUraS`,
        accounts: {mnemonic: mnemonic}
      }
   },
   gas: 5000000000,
   etherscan: {
    apiKey: "BTZY273IV5DUFIH6PVB7ZWE4RYIXKBHITN"
  }
};
