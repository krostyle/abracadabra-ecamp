const fs = require('fs');
const path = require('path');
const getUsuarios = (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(data);

}


const getUser = (req, res) => {
    const { usuarios } = JSON.parse(fs.readFileSync('./db/db.json'));
    const users = usuarios.map(user => user.toLowerCase());
    const { usuario } = req.params;
    const user = users.find(user => user === usuario);
    if (user) {
        res.sendFile(path.resolve(__dirname + '/../public/assets/who.jpeg'));
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}


const getImage = (req, res) => {
    //funcion para obtener un numero aleatorio entre 1 y 4
    const random = Math.floor(Math.random() * 4) + 1;
    console.log(random);
    console.log(req.params.n);
    if (req.params.n == random) {
        res.sendFile(path.resolve(__dirname + '/../public/assets/conejito.jpg'));
    } else {
        res.sendFile(path.resolve(__dirname + '/../public/assets/voldemort.jpg'));
    }


}
module.exports = {
    getUsuarios,
    getUser,
    getImage
}