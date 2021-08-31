const express = require('express');
const Demo = require('../models/demo.js');
const router = express.Router();

//SHOW ALL DEMOS
router.get('/demos', async (req, res) => {
    try {
        const demos = await Demo.find();
        res.json(demos);
    } catch (error) {
        res.json({error: error});
    }
});

//CREATE A NEW DEMO
router.post('/', async (req, res) => {
    
    let demo = new Demo({
        name: req.body.name,
        url: req.body.url
    });

    console.log(demo);

    try {
        const savedDemo = await demo.save();
        res.json(savedDemo);
    } catch (error) {
        res.json({error: error});
    }
});

//UPDATE AN EXISTING DEMO
router.patch('/:demoId', async (req, res) => {
    try {
        const demo = await Demo.findById({ _id: req.params.demoId});
        if (req.body.name) {
            demo.name = req.body.name;
        }
        if (req.body.url) {
            demo.url = req.body.url;
        }
        demo.save();
        res(200);
        
    } catch (error) {
        res.json({error: error});
    }
});