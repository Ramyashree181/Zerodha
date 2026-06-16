const { model } = require('mongoose');

const OrdersSchema = require('../schemas/OrdersSchema');

const OrdersModel = model("order", OrdersSchema); //give the model name in singular mongoose will convert it into plural

module.exports = { OrdersModel };