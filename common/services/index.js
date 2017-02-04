var messenger = require('../../chatbot/messenger/VerificationService');

exports.verifyRequestSignature = function(req, res, buf) {
    messenger.verifyRequestSignature(req, res, buf);
};