const {getWeb3} = require('./helpers')

const ContractManager = artifacts.require("ContractManager");
const UserStorage = artifacts.require("storage/UserStorage");

var web3 = getWeb3()

contract("UserStorage", (accounts) => {

  var contractManagerInstance;
  var userStorageInstance;
  const CITIZEN = accounts[3];

  before(() => {
    contractManagerInstance = new web3.eth.Contract(ContractManager.abi,
      ContractManager.networks[ContractManager.network_id].address);
    return contractManagerInstance.methods.getContractAddress("UserStorage").call()
    .then((_userStorageInstance)=>{
      userStorageInstance = new web3.eth.Contract(UserStorage.abi,
        _userStorageInstance);
    })

  });

  it("should check if user 9 is registered", function(){
    return userStorageInstance.methods.getUserType(accounts[9]).call().then(function(type){
      assert.equal(
        type,
        3,
        "Government not found, the contracts are not correctly initialized"
      )
    })
  });

  it("should insert a new citizen and get check its type is correct", () => {
    return userStorageInstance.methods.addUser(accounts[1], 1).send({from: CITIZEN}).then(function(){
      return userStorageInstance.methods.getUserType(accounts[1]).call().then(function(type){
        assert.equal(
          type,
          1,
          "Citizen insert is not correct :("
        )
      })
    })
  });

});

