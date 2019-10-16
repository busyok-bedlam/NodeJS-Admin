const { Router } = require('express');
const Item = require('../db/models/item');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const data = await Item.find({});
        res.send(data)
    }
    catch (err) {
        res.status(404).json({
            err: err.message
        })
    }

})


router.get('/add-item', async (req, res) => {
    await new Item({ name: "Bulat" }).save();
    res.json({
        data: "Success"
    })
})

module.exports = router;