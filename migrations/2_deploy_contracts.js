/* eslint-disable no-undef */
//var Accounts = artifacts.require("Accounts")
//var Token = artifacts.require("TokenERC20")
var Proxy = artifacts.require("Proxy.sol");
var Logic = artifacts.require("UserLogic.sol");

module.exports = function(deployer) {
  //deployer.deploy(Accounts);
  //deployer.deploy(Token, 10000, "Cubit", "CC", "0xA5A91DE72568141687864507423604f9Ea25E823");
  deployer.deploy(Proxy);
  deployer.deploy(Logic);

};
