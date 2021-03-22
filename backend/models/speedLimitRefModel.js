import mongoose from 'mongoose';

const speedLimitRefSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    speedlimit: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Active',
    },
  },
  {
    timestamp: true,
  }
);

const SpeedLimitRef = mongoose.model('SpeedLimitRef', speedLimitRefSchema);

export default SpeedLimitRef;
