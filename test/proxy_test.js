const { getWeb3, getContractInstance  } = require("./helpers")
const web3 = getWeb3()
const getInstance = getContractInstance(web3)


contract("Proxy", (accounts) => {
    var citStorage = getInstance('CitizenStorage', accounts[2])
    var busStorage = getInstance('BusinessStorage', accounts[2])
    var logic = getInstance('UserLogicV2', accounts[2])

    it("check user registration", async () => {
        const citIns = await citStorage.deploy().send()
        const busIns = await busStorage.deploy().send()
        console.log(citIns.options.address)
        console.log(busIns.options.address)
        const logicInstance = await logic.deploy({arguments: [citIns.options.address, busIns.options.address]}).send()


        await logicInstance.methods.registerCitizen('0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000').send({from: accounts[5]});
        let value = await logicInstance.methods.userIsRegistered(accounts[5]).call();
        assert.equal("2", value.toString());

        await logicInstance.methods.setActiveCit(accounts[5], false).send();
        await logicInstance.methods.setNameCit(accounts[5], '0x0010000000000000000000000000000000000000').send();

        await logicInstance.methods.getActiveCit(accounts[5]).call().then((result) => {
          value = result;
        });
        assert.equal(false, value);
        await logicInstance.methods.setActiveCit(accounts[5], true).send();

        value = await citIns.methods.getActive(accounts[5]).call()
        assert.equal(true, value);

        value = await citIns.methods.getName(accounts[5]).call()
        assert.equal("0x0010000000000000000000000000000000000000000000000000000000000000",value)

    })
})
