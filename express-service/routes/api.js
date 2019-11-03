const { Router } = require('express');
const Item = require('../db/models/item');
const User = require('../db/models/user');

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


router.post('/add-item', async (req, res) => {
    const { name } = req.body;
    const item = await new Item({ name }).save();
    res.json({
        item,
        success: true
    })
})

router.post('/add-user', async (req,res) => {
    const { email, login, password} = req.body;
    const user = await new User({
        login,
        password,
        email
    });
    res.json({
        user,
        success: true
    })
});

module.exports = router;