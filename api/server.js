require('dotenv').config();
require('module-alias/register');
const core = require('@service/core');
const db = require("@service/conectdb");

try{
    core.start();
    db.start();
}catch(error){
    console.log('[index] Uncaught error!');
    console.log(error);
}