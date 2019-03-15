const { getWeb3, getContractInstance } = require("./helpers")
const web3 = getWeb3()
const getInstance = getContractInstance(web3)



contract("Proxy", (accounts) => {
    var proxy = getInstance('Proxy', accounts[1])
    var logic = getInstance('UserLogic', accounts[1])
    var logic2 = getInstance('UserLogicV2', accounts[1])
    it("check user registration", async () => {
        const logicInstance = await logic.deploy().send()
        const logicInstance2 = await logic.deploy().send()
        const proxyInstance = await proxy.deploy().send()

        console.log("Logic: "+logicInstance.options.address)
        console.log("Proxy: "+proxyInstance.options.address)
        console.log("LogicV2: "+logicInstance2.options.address)

        let imp = await proxyInstance.methods._implementation().call()

        assert.equal('0x0000000000000000000000000000000000000000', imp)

        await proxyInstance.methods.upgradeTo(logicInstance.options.address).send()
        imp = await proxyInstance.methods._implementation().call()

        assert.equal(imp, logicInstance.options.address)


        let reg = await logicInstance.methods.userIsRegistered(accounts[2]).call()
        assert.equal(reg.toString(), 'false')

        await logicInstance.methods.registerBusiness(
          accounts[2],
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000',
          '0x0000000000000000000000000000000000000000')
        .send({from: proxyInstance.options.address})

        console.log("secondo userIsRegistered")
        reg = await logicInstance.methods.userIsRegistered(accounts[2]).call()
        assert.equal(reg.toString(), 'true')




    })


})
