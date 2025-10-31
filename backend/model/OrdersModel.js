const {model} = require("mongoose");
const {OrdersSchema}= require("../schemas/OrdersSchema")

const Ordersmodel = new model("order",OrdersSchema)

module.exports={Ordersmodel}