const RaiFactory = artifacts.require("RaiFactory");
const SimpleToken = artifacts.require("SimpleToken");
const RaiRouter = artifacts.require("RaiRouter"); const Migrations = artifacts.require("Migrations");

const BigNumber = require('bignumber.js');

module.exports = async function (deployer) {
    const instance =  await RaiFactory.deployed();
    console.log(instance.address)
};
