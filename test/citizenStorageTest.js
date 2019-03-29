import getWeb3 from '../src/utils/web_util';

const ContractManager = artifacts.require("ContractManager");
const CitizenStorage = artifacts.require("CitizenStorage");

var web3 = getWeb3()
const IPFS = require('ipfs-mini');

contract("CitizenStorage", (accounts) => {
  var contractManagerInstance;
  var citizenStorageInstance;
  const CITIZEN = accounts[3];
  const GOVERNMENT = accounts[9];

  before(() => {
    contractManagerInstance = new web3.eth.Contract(ContractManager.abi,
      ContractManager.networks[ContractManager.network_id].address);
    return contractManagerInstance.methods.getCitizenStorageAddress().call()
    .then((_citizenStorageInstance)=>{
      citizenStorageInstance = new web3.eth.Contract(CitizenStorage.abi,
        _citizenStorageInstance);
    })
  });

  it("should check if the data are correctly saved", async () => {
    var name = "8Lab";
    var surname = "Solutions";
    var email = "8LabSolutions@gmail.com";
    var deliveryAddress = "Via Esempio, 8, Paese, 12345";
    return citizenStorageInstance.methods.setName(CITIZEN, name).send({from: CITIZEN})
    .then(function(){
      return citizenStorageInstance.methods.setSurname(CITIZEN, surname).send({from: CITIZEN});
    }).then(function(){
      return citizenStorageInstance.methods.setEmail(CITIZEN, email).send({from: CITIZEN});
    }).then(function(){
      return citizenStorageInstance.methods.setDeliveryAddress(CITIZEN, deliveryAddress).send({from: CITIZEN});
    }).then(function(){
      return citizenStorageInstance.methods.setActive(CITIZEN, true).send({from: GOVERNMENT});
    }).then(function(){
      return citizenStorageInstance.methods.getName(CITIZEN).call().then((ris) => {
        assert.equal(
          ris,
          name
       )
      })
    }).then(() => {
        return citizenStorageInstance.methods.getSurname(CITIZEN).call().then((_surname)=>{
          assert.equal(
            _surname,
            surname,
           "The surname has not been setted correctly"
         )
      })
    }).then(()=>{
      return citizenStorageInstance.methods.getEmail(CITIZEN).call().then((_email)=>{
        assert.equal(
          _email,
          email,
          "The email has not been setted correctly"
        )
      })
    }).then(()=>{
      return citizenStorageInstance.methods.getDeliveryAddress(CITIZEN).call().then((_deliveryAddress)=>{
        assert.equal(
          _deliveryAddress,
          deliveryAddress,
          "The email has not been setted correctly"
        )
      })
    })
  });

  it("should check that the government can actually disable a citizen account", () => {
    return citizenStorageInstance.methods.getActive(CITIZEN).call().then((active) => {
      assert.equal(
        active,
        true,
        "The citizen is disabled"
      );
      return citizenStorageInstance.methods.setActive(CITIZEN, false).send({from: GOVERNMENT}).then(()=>{
        return citizenStorageInstance.methods.getActive(CITIZEN).call().then((active)=>{
          assert.equal(
            active,
            false,
            "Disabling went wrong"
          );
        });
      });
    });
  });

  it("should test IPFS", () =>{
    const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    var ilMioJSON = {name:"Palla", costo:13.13};
    var hash;
    return ipfs.addJSON(ilMioJSON).then((ris)=>{
      hash= ris;
      return ipfs.catJSON(hash).then((_ris2)=>{
        var ris2 = _ris2;
        assert.equal(
          ilMioJSON.name,
          ris2.name,
          "avrebbero dovuto essere uguali"
        )
      })
    })
  });

  it("should revert because the caller is not the government", () =>{
    return citizenStorageInstance.methods.setActive(CITIZEN, false).send({from: accounts[5]})
    .then((ris) => {
      assert.isFalse(ris, "should have been false");
    }).catch((err) => {
      assert.isTrue(err.toString().includes("Only the government can able/disable users"));
    })
  });

});
