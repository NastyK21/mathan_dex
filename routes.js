const {Router} = require('express');
const router = Router();
const controller = require('./controller');


router.get("/",controller.getdata);
router.post("/",controller.addData);

module.exports = router;
