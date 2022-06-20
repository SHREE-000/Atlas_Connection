const express = require('express')
const router = express.Router()
const customerData = require('../models/customerData');

router.get('/', async (req, res) => {
  const dataFromDb = await customerData.findOne({pdtid: "WD1020"});
  console.log(dataFromDb, 'its data from db');
  res.status(200).send('success');

});

module.exports = router;
