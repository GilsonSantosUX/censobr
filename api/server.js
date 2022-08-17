require('dotenv').config();
require('module-alias/register');
const init = require('@service/boot');
const db = require("@service/conectdb");
// const config = require('@config');

init();
db();