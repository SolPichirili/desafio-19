const uploadImg = (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }

    res.send('Imagen subida');
}

module.exports = {
    uploadImg
}