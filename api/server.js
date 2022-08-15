require('dotenv').config();
require('module-alias/register');
const init = require('@service/boot');
const config = require('@config');

init();