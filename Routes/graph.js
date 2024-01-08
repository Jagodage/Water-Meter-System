const express = require('express');
const router = express.Router();
const {WaterUsage} = require('../Models/Graph');

router.get('/:MeterId', async (req, res) => {
  try {
    const MeterId = req.params.MeterId;
    const data = await WaterUsage.findOne({ MeterID: MeterId });
    res.json([data.April, data.May, data.June, data.July, data.Auguest]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

module.exports = router;