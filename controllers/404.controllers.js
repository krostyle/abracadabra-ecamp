const page404 = (req, res) => {
    res.status(404).send('Esta página no Existe');
}

module.exports = {
    page404
}