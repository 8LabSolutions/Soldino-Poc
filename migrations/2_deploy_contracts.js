/*** GENERIC CONTRACTS ***/
var ContractManager = artifacts.require("ContractManager")
var Government = artifacts.require("Government")
/***  STORAGE CONTRACTS ***/
var UserStorage = artifacts.require("UserStorage")
var CitizenStorage = artifacts.require("CitizenStorage");
var BusinessStorage = artifacts.require("BusinessStorage");
/***  LOGIC CONTRACTS ***/
var UserLogic = artifacts.require("UserLogic")
var ProductStorage = artifacts.require("ProductStorage")
var ProductLogic = artifacts.require("ProductLogic")


module.exports = function(deployer, network, accounts) {
  //deployer.deploy(Accounts);
  //deployer.deploy(Token, 10000, "Cubit", "CC", "0xA5A91DE72568141687864507423604f9Ea25E823");
  deployer.deploy(ContractManager).then( async function(constractManagerInstance) {
    await deployer.deploy(UserStorage, constractManagerInstance.address).then(async function(userStorageInstance){
      constractManagerInstance.setUserStorageAddress(userStorageInstance.address);
      await deployer.deploy(CitizenStorage, accounts[9]).then( async function(citizenStorageInstance){
        constractManagerInstance.setCitizenStorageAddress(citizenStorageInstance.address);
        await deployer.deploy(CitizenLogic, constractManagerInstance.address).then((citizenLogicInstance)=>{
          constractManagerInstance.setCitizenLogicAddress(citizenLogicInstance.address);
        })
      });
      return deployer.deploy(Government, accounts[9]).then(async function(governmentInstance){
        constractManagerInstance.setGovernmentAddress(governmentInstance.address);
        userStorageInstance.addUser(accounts[9], 3);
      })
    })
    //the citizenStorage contract is istantiated
    await deployer.deploy(CitizenStorage, accounts[9])
    .then(function(_citizenStorageInstance){
      citizenStorageInstance = _citizenStorageInstance;
      constractManagerInstance.setContractAddress("CitizenStorage", citizenStorageInstance.address);
    })
    //the businessStorage contract is istantiated
    await deployer.deploy(BusinessStorage, accounts[9]).then(function(_businessStorageInstance){
      businessStorageInstance = _businessStorageInstance;
      constractManagerInstance.setContractAddress("BusinessStorage", businessStorageInstance.address);
    })
    //the government account
    await deployer.deploy(Government, accounts[9])
    .then(function(_governmentInstance){
      governmentInstance = _governmentInstance;
      constractManagerInstance.setContractAddress("Government", governmentInstance.address);
    })
    //the userLogic refers to business/logic/user storages, so must be initialized after these
    await deployer.deploy(UserLogic, constractManagerInstance.address)
    .then(function(_userLogicInstance){
      userLogicInstance = _userLogicInstance;
      constractManagerInstance.setContractAddress("UserLogic", userLogicInstance.address);
    });

    /*** DEPENDENCIES SET-UP (AUTHORIZATION)***/
    // UserLogic must can access UserStorage, CitizenStorage and BusinessStorage
    await userStorageInstance.addAuthorized(userLogicInstance.address);
    await citizenStorageInstance.addAuthorized(userLogicInstance.address);
    await businessStorageInstance.addAuthorized(userLogicInstance.address);


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
