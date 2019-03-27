const ContractManager = artifacts.require("ContractManager");
const CitizenStorage = artifacts.require("CitizenStorage");

contract("CitizenStorage", (accounts) =>  {
  var contractManagerInstance;
  var citizenStorageInstance;
  const CITIZEN = accounts[3];
  const GOVERNMENT = accounts[9];

  before(() => {
    return ContractManager.deployed().then(function(_contractManagerInstance){
      contractManagerInstance = _contractManagerInstance;
      return CitizenStorage.deployed(contractManagerInstance.getUserStorageAddress())
      .then(function(_userStorageInstance){
        citizenStorageInstance = _userStorageInstance;
      })
    })
  });

  it("should check if the data are correctly saved", async () => {
    var name = "8Lab";
    var surname = "Solutions";
    var email = "8LabSolutions@gmail.com";
    var deliveryAddress = "Via Esempio, 8, Paese, 12345";

    return citizenStorageInstance.setName(CITIZEN, name)
    .then(function(){
      return citizenStorageInstance.setSurname(CITIZEN, surname);
    }).then(function(){
      return citizenStorageInstance.setEmail(CITIZEN, email);
    }).then(function(){
      return citizenStorageInstance.setDeliveryAddress(CITIZEN, deliveryAddress);
    }).then(function(){
      return citizenStorageInstance.setActive(CITIZEN, true, {from: GOVERNMENT});
    }).then(function(){
      return citizenStorageInstance.getName.call(CITIZEN).then((ris) => {
        assert.equal(
          ris,
          name
       )
      })
    }).then(() => {
        return citizenStorageInstance.getSurname.call(CITIZEN).then((_surname)=>{
          assert.equal(
            _surname,
            surname,
           "The surname has not been setted correctly"
         )
      })
    }).then(()=>{
      return citizenStorageInstance.getEmail.call(CITIZEN).then((_email)=>{
        assert.equal(
          _email,
          email,
          "The email has not been setted correctly"
        )
      })
    }).then(()=>{
      return citizenStorageInstance.getDeliveryAddress.call(CITIZEN).then((_deliveryAddress)=>{
        assert.equal(
          _deliveryAddress,
          deliveryAddress,
          "The email has not been setted correctly"
        )
      })
    })
  });

  it("should check that the government can actually disable a citizen account", () => {
    return citizenStorageInstance.getActive.call(CITIZEN).then((active) => {
      assert.equal(
        active,
        true,
        "The citizen is disabled"
      );
      return citizenStorageInstance.setActive(CITIZEN, false, {from: GOVERNMENT}).then(()=>{
        return citizenStorageInstance.getActive.call(CITIZEN).then((active)=>{
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
    const IPFS = require('ipfs-mini');
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
  /*
  it("should revert because the caller is not the government", async () =>{
    ContractManager.deployed().then( async (_contractManager) => {
      contractManager = _contractManager;
      citizenStorage = CitizenStorage(await contractManager.getCitizenStorageAddress());
    })
    let ris = citizenStorage.setActive(CITIZEN, false, {from: accounts[5]});
    assert.isFalse(ris, "should have been false");
  })
*/
});
