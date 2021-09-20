const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/abracadabra'
            //MIDDLEWARE
        this.middleware();
        //ROUTES
        this.routes();
    }
    middleware() {
        //CORS
        this.app.use(cors());
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());
        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
        this.app.use(express.static('public/assets'));
    }
    routes() {
        this.app.use(this.path, require('../routes/abracadabra.routes'));
        this.app.use('/', require('../routes/404.routes'));
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('Server is running on http://localhost:' + this.port);
        });
    }
}


module.exports = Server;