const express = require('express');
const router = express.Router();
const { usersCont } = require('../controllers/usersCont');

router.get('/', usersCont.sendUsersPage);
router.get('/all-users', usersCont.getAllUsers);
router.post('/add-user', usersCont.addUser);

module.exports = router;

