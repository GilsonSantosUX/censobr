
const HomeController = {
    renderHome(req,res){
        res.sendFile(__dirname + '/index.html');
        //res.sendFile('/home/index.html', { root: __dirname });
    }
};

module.exports = HomeController;