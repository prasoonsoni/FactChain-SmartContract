require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:"0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/krRI40mIL0Ze-7P4CEI35QYBNJfWbQfp",
      accounts: ['4a8a894c37235fb05c8fd11e13a6e420ff194123a30dac180a6ec94b7722c1ce'] 
    }
  }
}

// url - url from alchemy > view key > http
// accounts - metamask > accounts detail > export private key
