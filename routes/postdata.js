const express = require('express')
const router = express.Router()
require('../connection');


// importing model
const RunModel = require('../models/dataschema')

router.post('/postdata', async (req, res) => {
    try {
        let data = new RunModel(req.body)
        //if we want to modify data we can do that here!
        await data.save()
        res.status(201).json({"success":data})
    } catch (error) {
        res.status(500).json({"Error":error})
        console.error(error)
    }
})
  


module.exports = router