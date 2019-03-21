const { getWeb3, getContractInstance } = require("./helpers")
const web3 = getWeb3()
const getInstance = getContractInstance(web3)


contract("Proxy", (accounts) => {
    var logic = getInstance('UserLogic', accounts[2])
    it("check user registration", async () => {
        const logicInstance = await logic.deploy().send() //per registrare un cittadino

        await logicInstance.methods.registerCitizen('0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000').send({from: accounts[5]});
        let value = await logicInstance.methods.userIsRegistered(accounts[5]).call();
        assert.equal("2", value.toString());
    })
})
