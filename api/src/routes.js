const router = require('express').Router();

const TestController = require('@controller/test');
const { getAll } = require('@controller/user/read');
const { createUser } = require('@controller/user/create');
const { deleteUser } = require("@controller/user/delete");

router.get('/',TestController.helloWolrd);
router.get('/users',getAll);
router.post('/user/create',createUser);
router.delete('/user/delete',deleteUser);

module.exports = router;