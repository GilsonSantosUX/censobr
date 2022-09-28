const prisma = require("@db");

function createDatabase(){
    async function main() {
        // ... you will write your Prisma Client queries here
    }

    function start(){
        console.log('> [database] Starting...');
        main()
        .then(async () => {
                await prisma.$disconnect()
            }).catch(async (e) => {
                console.error(e)
                await prisma.$disconnect()
                process.exit(1)
            });
        console.log('> [database] Starting done! System ruinning!...');
    }

    function stop(){
        console.log('> [database] Stopping...');
        
        console.log('> [database] Stopping done!...');
    }

    return {
        start,
        stop
    }
}

module.exports = createDatabase();