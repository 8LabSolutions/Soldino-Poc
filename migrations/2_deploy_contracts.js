/*** GENERIC CONTRACTS ***/
var ContractManager = artifacts.require("ContractManager")
var Government = artifacts.require("Government")
/***  STORAGE CONTRACTS ***/
var UserStorage = artifacts.require("UserStorage")
var CitizenStorage = artifacts.require("CitizenStorage");
var BusinessStorage = artifacts.require("BusinessStorage");
var ProductStorage = artifacts.require("ProductStorage");
/***  LOGIC CONTRACTS ***/
var UserLogic = artifacts.require("UserLogic")
var ProductLogic = artifacts.require("ProductLogic");

module.exports = function(deployer, network, accounts) {
  var constractManagerInstance;
  var userStorageInstance;
  var citizenStorageInstance;
  var businessStorageInstance;
  var governmentInstance;
  var userLogicInstance;
  //every contract must be costructed with the constractManager address as a parameter
  //so it is instantiated before all others
  deployer.deploy(ContractManager).then( async function(_constractManagerInstance) {
    constractManagerInstance = _constractManagerInstance;
    //the userStorage contract is istantiated
    await deployer.deploy(UserStorage, constractManagerInstance.address)
    .then(function(_userStorageInstance){
      userStorageInstance = _userStorageInstance;
      constractManagerInstance.methods.setContractAddress("UserStorage", userStorageInstance.address)
      .send();
      //the government user is added to the contract during the deployment, since it is
      //also the general administrator
      userStorageInstance.methods.addUser(accounts[9], 3).send();
    })
    //the citizenStorage contract is istantiated
    await deployer.deploy(CitizenStorage, accounts[9])
    .then(function(_citizenStorageInstance){
      citizenStorageInstance = _citizenStorageInstance;
      constractManagerInstance.methods.setContractAddress("CitizenStorage", citizenStorageInstance.address)
      .send();
    })
    //the businessStorage contract is istantiated
    await deployer.deploy(BusinessStorage, accounts[9]).then(function(_businessStorageInstance){
      businessStorageInstance = _businessStorageInstance;
      constractManagerInstance.methods.setContractAddress("BusinessStorage", businessStorageInstance.address)
      .send();
    })
    //the government account
    await deployer.deploy(Government, accounts[9])
    .then(function(_governmentInstance){
      governmentInstance = _governmentInstance;
      constractManagerInstance.methods.setContractAddress("Government", governmentInstance.address)
      .send();
    })
    //the userLogic refers to business/logic/user storages, so must be initialized after these
    await deployer.deploy(UserLogic, constractManagerInstance.address)
    .then(function(_userLogicInstance){
      userLogicInstance = _userLogicInstance;
      constractManagerInstance.methods.setContractAddress("UserLogic", userLogicInstance.address)
      .send();
    });

    /*** DEPENDENCIES SET-UP (AUTHORIZATION)***/
    // UserLogic must can access UserStorage, CitizenStorage and BusinessStorage
    await userStorageInstance.methods.addAuthorized(userLogicInstance.address).send();
    await citizenStorageInstance.methods.addAuthorized(userLogicInstance.address).send();
    await businessStorageInstance.methods.addAuthorized(userLogicInstance.address).send();


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
