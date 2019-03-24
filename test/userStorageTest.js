
const ContractManager = artifacts.require("ContractManager");
const UserStorage = artifacts.require("UserStorage");


contract("UserStorage", (accounts) => {

  var contractManagerInstance;
  var userStorageInstance;

  before(() => {
    return ContractManager.deployed().then(function(_contractManagerInstance){
      contractManagerInstance = _contractManagerInstance;
      return UserStorage.deployed(contractManagerInstance.getUserStorageAddress())
      .then(function(_userStorageInstance){
        userStorageInstance = _userStorageInstance;
      })
    })
  });

  it("should check if user 9 is registered", function(){
    return userStorageInstance.getUserType(accounts[9]).then(function(type){
      assert.equal(
        type,
        3,
        "Government not found, the contracts are not correctly initialized"
      )
    })
  });

  it("should insert a new citizen and get check its type is correct", () => {
    return userStorageInstance.addUser(accounts[1], 1).then(function(){
      return userStorageInstance.getUserType(accounts[1]).then(function(type){
        assert.equal(
          type,
          1,
          "Citizen insert is not correct :("
        )
      })
    })
  });
});

