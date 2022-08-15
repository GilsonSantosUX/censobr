const router = require('express').Router();

const TestController = require('@controller/test');

router.get('/',TestController.helloWolrd);

module.exports = router;