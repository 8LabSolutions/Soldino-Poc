/* eslint-disable no-undef */
var Accounts = artifacts.require("Accounts");
var Token = artifacts.require("TokenERC20")

module.exports = function(deployer) {
  deployer.deploy(Accounts);
  deployer.deploy(Token, 10000, "Cubit", "CC", "0xA5A91DE72568141687864507423604f9Ea25E823");
};
