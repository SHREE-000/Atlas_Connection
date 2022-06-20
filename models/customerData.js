const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NewCustomerviewSchema = new Schema({
  pdtid: { String },
  pdttype: { String },
  name: { String },
  mobno: { String },
  emailid: { String },
  date: { String },
  description: { String },
  invoice: { String },
  caseid: { String },
  casestatus: { String },
});

module.exports = mongoose.model("customerview", NewCustomerviewSchema);
