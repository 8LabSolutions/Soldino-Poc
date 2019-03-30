const IPFS = require('ipfs-mini');
const { getWeb3 } = require('./helpers')

const ContractManager = artifacts.require("ContractManager");
const ProductStorage = artifacts.require("ProductStorage");
const ProductLogic = artifacts.require("ProductLogic");

var web3 = getWeb3()


contract("ProductStorage", (accounts) => {
  var contractManagerInstance;
  var productStorageInstance;
  var productLogicInstance;

  before(() => {
    contractManagerInstance = new web3.eth.Contract(
      ContractManager.abi,
      ContractManager.networks[ContractManager.network_id].address
    );

    productStorageInstance = new web3.eth.Contract(
      ProductStorage.abi,
      ProductStorage.networks[ContractManager.network_id].address
    );

    productLogicInstance = new web3.eth.Contract(
      ProductLogic.abi,
      ProductLogic.networks[ContractManager.network_id].address
    );

  });

  it("should not give authorization to an unregistered address (ProductLogic)", async () => {
    return productStorageInstance.methods.authorized(productLogicInstance.options.address)
    .call()
    .then((result) => {
      assert.equal(result, false);
    })
  })

  it("should set the ProductLogic contract as authorized contract", async () => {
    return productStorageInstance.methods.addAuthorized(productLogicInstance.options.address)
    .send({from: accounts[9]})
    .then(() => {
      return productStorageInstance.methods.authorized(productLogicInstance.options.address)
      .call()
      .then((result) => {
        assert.equal(result, true);
      })
    })
  })


})
