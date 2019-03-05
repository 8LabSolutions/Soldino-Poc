var Accounts = artifacts.require("Accounts");
var Token = artifacts.require("TokenERC20")

module.exports = function(deployer) {
  deployer.deploy(Accounts);
  deployer.deploy(Token, 10000, "Cubit", "CC", "0x82BFE24926b45a253427F9950CaC1e7f9194817b");
};
