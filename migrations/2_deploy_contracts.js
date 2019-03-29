/* eslint-disable no-undef */
//var Accounts = artifacts.require("Accounts")
//var Token = artifacts.require("TokenERC20")

var Logic = artifacts.require("UserLogic.sol");
var Citizien = artifacts.require("CitizenStorage.sol");
var Business = artifacts.require("BusinessStorage.sol");
//var Caller = artifacts.require("Caller.sol");

module.exports = function(deployer) {
  //deployer.deploy(Accounts);
  //deployer.deploy(Token, 10000, "Cubit", "CC", "0xA5A91DE72568141687864507423604f9Ea25E823");
  deployer.deploy(Citizien).then(() => {
    return deployer.deploy(Business)
  }).then(() => {
    return deployer.deploy(Logic,Citizien.address,Business.address)
  })



};
