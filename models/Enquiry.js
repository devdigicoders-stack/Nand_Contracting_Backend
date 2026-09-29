const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    // Base fields
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    location: { type: String },
    message: { type: String, required: true },
    inquiryType: { type: String, required: true },
    
    // Dynamic fields (Optional)
    serviceRequired: { type: String },
    propertyType: { type: String },
    maintenanceType: { type: String },
    renovationType: { type: String },
    workforceCategory: { type: String },
    numWorkers: { type: String },
    requiredDate: { type: String },
    supportRequired: { type: String },
    emergencyType: { type: String },

    // Status
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
