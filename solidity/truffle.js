module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      from: "0x71c123b941127f2a88e5e9240afc3f1595a46c16",
      network_id: 4,
      gas: 4612388
    }
  }
};
