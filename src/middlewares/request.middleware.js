const requestMiddleware = (req, res, next) => {
    
    if(req.method === 'GET' || req.method === 'DELETE' || Object.keys(req.body).length > 0){
        return next();
    }

    console.log({
        method: req.method,
        url: req.url,
        body: req.body,
        params: req.params
    });
    
    return res.status(400).json({ message: 'Invalid request. Check parameters.' });
}

module.exports = requestMiddleware;
