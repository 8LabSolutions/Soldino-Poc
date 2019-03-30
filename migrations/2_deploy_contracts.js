/* eslint-disable no-undef */
//var Accounts = artifacts.require("Accounts")
//var Token = artifacts.require("TokenERC20")
var ContractManager = artifacts.require("ContractManager")
var UserStorage = artifacts.require("UserStorage")
var CitizenStorage = artifacts.require("CitizenStorage")
var CitizenLogic = artifacts.require("CitizenLogic")
var Government = artifacts.require("Government")

var ProductStorage = artifacts.require("ProductStorage")
var ProductLogic = artifacts.require("ProductLogic")
//var Caller = artifacts.require("Caller.sol");

module.exports = function(deployer, network, accounts) {
  //deployer.deploy(Accounts);
  //deployer.deploy(Token, 10000, "Cubit", "CC", "0xA5A91DE72568141687864507423604f9Ea25E823");
  deployer.deploy(ContractManager)
  .then(async function(constractManagerInstance) {
    await deployer.deploy(UserStorage, constractManagerInstance.address)
    .then(async function(userStorageInstance) {
      constractManagerInstance.setUserStorageAddress(userStorageInstance.address);
      await deployer.deploy(CitizenStorage, accounts[9])
      .then( async function(citizenStorageInstance){
        constractManagerInstance.setCitizenStorageAddress(citizenStorageInstance.address);
        await deployer.deploy(CitizenLogic, constractManagerInstance.address)
        .then((citizenLogicInstance) => {
          constractManagerInstance.setCitizenLogicAddress(citizenLogicInstance.address);
        })
      });
      return deployer.deploy(Government, accounts[9])
      .then(async function(governmentInstance) {
        constractManagerInstance.setGovernmentAddress(governmentInstance.address);
        userStorageInstance.addUser(accounts[9], 3);
      })

    })

    await deployer.deploy(ProductStorage, accounts[9])
    .then(async (ProductStorageInstance) => {
      await deployer.deploy(
        ProductLogic,
        constractManagerInstance.address,
        ProductStorageInstance.address
      )
    })
  })
};
