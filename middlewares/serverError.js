module.exports = function serverErrorHandler(err, req, res, next){
    console.log(err);
    res.status(500).json({
        msg: "something done brokkeee"
    });
}