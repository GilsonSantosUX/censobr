const app = require('@app');
const config = require('@config');

function createCore(){

    function start(){
        console.log('> [core] Starting...');

        app.listen(config.app.port,(err)=>{
            if(err){
                return console.log("error");
            }
            console.log(`Start server http://localhost:${config.app.port}`);
        });
        console.log('> [core] Starting done! System ruinning!...');
    }

    function stop(){
        console.log('> [core] Stopping...');
        
        console.log('> [core] Stopping done!...');
    }

    return {
        start,
        stop
    }
    
}

module.exports = createCore();