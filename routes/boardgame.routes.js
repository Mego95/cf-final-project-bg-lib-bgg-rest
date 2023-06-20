const express = require('express');
const router = express.Router();

const boardgameController = require('../constrollers/boardgame.controller');

router.get('/findboardgame/:bggid', boardgameController.findboardgame);
router.get('/hello', boardgameController.hello)

module.exports = router;