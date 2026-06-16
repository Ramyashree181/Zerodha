const { model } = require('mongoose');

const HoldingsSchema = require('../schemas/HoldingsSchema');

const HoldingsModel = model('holding', HoldingsSchema); // give the model name in singular; mongoose pluralizes it

module.exports = { HoldingsModel };