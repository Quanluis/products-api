module.exports = function notFoundHandler (req, res, next){
    res.status(404).send('LIONS, TIGERS AND BEARS! Oh my!! Nothing to see here!')
}
