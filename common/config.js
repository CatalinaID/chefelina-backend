var config = {};
const configFile = require('config');

// Generate a page access token for your page from the App Dashboard
config.SERVER_URL = (process.env.SERVER_URL) ?
    (process.env.SERVER_URL) :
    configFile.get('main.serverURL');

module.exports = config;