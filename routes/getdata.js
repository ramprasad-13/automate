const express = require('express')
const router = express.Router()
require('../connection');

// importing model
const RunModel = require('../models/dataschema')

router.get('/getdata/:id', async (req, res) => {
    try {
        const {id} = req.params
        let data = await RunModel.findOne({runID:id})
        res.status(200).json({"success":data})
    } catch (error) {
        res.status(500).json({"Error":error})
        console.error(error)
    }
})

module.exports = router
