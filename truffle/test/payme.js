var Payme = artifacts.require("./payme.sol");

contract('Payme', function(accounts) {
	web3.eth.defaultAccount = accounts[0];

 it("should put 1000 to the account", async () => {
     let instance = await Payme.deployed();
     let balance = await instance.deposit(1000);
     assert.notEqual(balance, [], "aaaa" );
  });

    it("should remove 100 from the account", async () => {
     let instance = await Payme.deployed();
     let balance = await instance.withdraw(100);
     assert.notEqual(balance, [], "bbbb");
  });
});
