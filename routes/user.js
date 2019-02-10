const express = require('express');
const router = express.Router();
const userController = require('../models/user');
const authMiddleware = require('../utils/auth')


// 유저 목록
router.post('/login', userController.login);

router.use('/get', authMiddleware)
router.get('/get', userController.get);
router.use('/post', authMiddleware)
router.post('/post', userController.post)


module.exports = router;