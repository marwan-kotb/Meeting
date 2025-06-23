const express = require('express');

const router = express.Router();
const meetingController = require('./meeting');

router.get('/', meetingController.index);
router.post('/', meetingController.add);
router.get('/view/:id', meetingController.view);
router.delete('/delete/:id', meetingController.deleteData);

module.exports = router