const Payme = artifacts.require('Payme');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Payme).then((instance) => {
        console.log(`PayMe has been deployed. It's address is: ${instance.address}`)
    });
};