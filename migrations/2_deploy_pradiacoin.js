var PRADiAcoin = artifacts.require('./PRADiAcoin.sol');

module.exports = function(deployer) {
    deployer.deploy(PRADiAcoin);
};
