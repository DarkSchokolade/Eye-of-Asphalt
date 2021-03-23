import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import SpeedLimitRef from '../models/speedLimitRefModel.js';

// @desc Fetch all locations
// @route GET /api/locations
// @access Public[might change]
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // so we have to put try catch every where so now we are going to use express-async-handler
    // with this we can use custom middleware
    const speedlimitrefs = await SpeedLimitRef.find({});
    res.json(speedlimitrefs);
  })
);

// @desc Fetch single location
// @route GET /api/locations/:id
// @access Private[need authorization]
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // const location = speedlimitrefs.find((ref) => ref._id == req.params.id);
    const location = await SpeedLimitRef.findById(req.params.id);
    if (location) {
      res.json(location);
    } else {
      // res.status(404).json({ message: 'Location not Found' });
      res.status(404);
      throw new Error('Location not Found');
    }
  })
);

export default router;
