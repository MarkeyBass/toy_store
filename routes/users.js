const express = require('express');
const router = express.Router();
const { usersCont } = require('../controllers/usersCont');

router.get('/', usersCont.sendUsersPage);
router.get('/all_users', usersCont.getAllUsers);
router.get('/show_user_form', usersCont.showUserForm);
router.post('/', usersCont.addUser);

module.exports = router;

