const express = require('express');
const router = express.Router();
const {Walve} = require('../Models/Walve');

router.get('/:WalveId', async (req, res) => {
    try {
      // Retrieve the MeterID from request parameters
      const WalveId = req.params.WalveId;
  
      // Query the database to find the document with the matching MeterID
      const meter = await Walve.findOne({ WaterValveID: WalveId });
  
      if (!meter) {
        // If no matching document is found, return a 404 Not Found response
        return res.status(404).json({ error: 'Meter not found' });
      }
  
      // If a matching document is found, send it as a JSON response
      res.json(meter);
    } catch (error) {
      // Handle any errors that may occur during the database query
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;