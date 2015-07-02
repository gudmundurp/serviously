'use strict';
//CORS function
(function() {

    exports.cors = function(req, res, next) {
        //Why does this get called several times each request?
        console.log('setting headers');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Accept');
        if ('OPTIONS' === req.method) {
            res.send(200);
        } else {
            next();
        }
    };

    exports.root = function(req, res) {
        res.send('the server is online');
    };
})();
