const app = require('@app');
const config = require('@config');

module.exports = (err) => {
    if(err){
        console.log("Erro ao conectar ao DB");
    }
}

app.listen(config.app.port,(err)=>{
    if(err){
        return console.log("error");
    }
    console.log(`Start server http://localhost:${config.app.port}`);
})