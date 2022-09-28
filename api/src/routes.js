const router = require('express').Router();

const { renderHome } = require('@controller/home/index');
const { getAll, getUnique } = require('@controller/user/read');
const { createUser } = require('@controller/user/create');
const { deleteUser } = require("@controller/user/delete");
const  { login } = require("@controller/authentication");
const { getAuth } = require('@model/user');

router.get('/',renderHome);
// Router User
router.get('/users',getAll);
router.get('/user',getUnique);
router.post('/user/create',createUser);
router.delete('/user/delete',deleteUser);
router.get('/auth',login);

module.exports = router;