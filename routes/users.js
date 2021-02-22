const express = require('express');
const router = express.Router();
const userCont = require('../controllers/usersCont');

router.get('/', userCont.sendUsersPage);
router.get('/all-users', userCont.getAllUsers);
router.post('/add-user', userCont.addUser);

module.exports = router;

