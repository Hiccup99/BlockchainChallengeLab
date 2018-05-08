var Project = artifacts.require("./Project.sol");

module.exports = function(deployer) {
  deployer.deploy(
    Project, 
    "0x4416b0ff34b5e0edd74e333354a8e2ac417a4be0"
  );
};
