const { model } = require('mongoose');

const PositionsSchema = require('../schemas/PositionsSchema');

const PositionsModel = model('position', PositionsSchema); // give the model name in singular; mongoose pluralizes it

module.exports = { PositionsModel };