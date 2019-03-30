const { getWeb3, getContractInstance  } = require("./helpers")

const web3 = getWeb3()
const getInstance = getContractInstance(web3)

/*
contract("Proxy", (accounts) => {
    var citStorage = getInstance('CitizenStorage', accounts[2])
    var busStorage = getInstance('BusinessStorage', accounts[2])

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
*/
/*
contract("Escrow", (accounts) => {
  var token = getInstance('TokenERC20', accounts[2])
  var escrow = getInstance('Escrow', accounts[2])

  it("should transfer cubit to the escrow contract", async () => {
      const tokenIns = await token.deploy({arguments: [100000,"CC","Cubit",accounts[3]]}).send({from: accounts[3]})
      const escrowIns = await escrow.deploy({arguments: [tokenIns.options.address]}).send()


      let res = await tokenIns.methods.balanceOf(accounts[3]).call()
      console.log(res)
      let result = await tokenIns.methods.approveAndCall(escrowIns.options.address,9999,"0x4920686176652031303021000000000000000000000000000000000000000000").send({from: accounts[3]})

      assert(result, true)
      res = await tokenIns.methods.balanceOf(accounts[3]).call()
      assert(res, 90001)

      res = await tokenIns.methods.balanceOf(escrowIns.options.address).call()
      assert(res, 9999)

      await escrowIns.methods.confirmBuy(accounts[5], 9999).send({from: accounts[3]})

      res = await tokenIns.methods.balanceOf(escrowIns.options.address).call()
      assert(res, 0)

      res = await tokenIns.methods.balanceOf(accounts[5]).call()
      assert(res, 9999)
  })
})
*/
