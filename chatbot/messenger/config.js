var config = {};
const configFile = require('config');

// App Secret can be retrieved from the App Dashboard
config.APP_SECRET = (process.env.MESSENGER_APP_SECRET) ?
    process.env.MESSENGER_APP_SECRET :
    configFile.get('messenger.appSecret');

// Generate a page access token for your page from the App Dashboard
config.PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
    (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
    configFile.get('messenger.pageAccessToken');

// Arbitrary value used to validate a webhook
config.VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) ?
    (process.env.MESSENGER_VALIDATION_TOKEN) :
    configFile.get('messenger.validationToken');

module.exports = config;