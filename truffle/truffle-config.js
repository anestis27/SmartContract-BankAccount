module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545, // default Ganache port
            network_id: "*" // Match any network id
        }
    }
};