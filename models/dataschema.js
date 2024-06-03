const mongoose = require('mongoose');

const testCaseStepSchema = new mongoose.Schema({
  stepID: Number,
  stepname: String,
  stepstatus: String,
  exception: String,
  bug: String,
  screenshots: [String],
  executiontime: String,
});

const testCaseSchema = new mongoose.Schema({
  testcaseid: String,
  testcasename: String,
  totalsteps: Number,
  passpercentage: String,
  failpercentage: String,
  testcaseexecutionTime: Number,
  steps: [testCaseStepSchema],
});

const runSchema = new mongoose.Schema({
  runID: Number,
  runName: String,
  testCases: [testCaseSchema],
});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;
