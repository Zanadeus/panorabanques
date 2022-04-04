const express = require('express');
const router = express.Router();

const clientProfileCtrl = require('../controllers/clientProfiles');

router.post('/', clientProfileCtrl.createOneProfile);
router.get('/', clientProfileCtrl.getAllProfiles);
router.delete('/:email', clientProfileCtrl.deleteOneProfile);

module.exports = router;