const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {//next is only used in middeleware to go to the next function
    const token = req.headers.authorization;//getting the token from the headers
    if (!token || !token.startsWith('Bearer ')) {//if there is no token or if the token does not start with bearer
        return res.status(401).json({ message: "Unauthorized access" });//401 means unauthorized
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);//here if it is verified then in decoded we will get the the users id details there
        req.user = { id: decoded.userId };//storing the user id in the req object to use it in the next function
        // console.log(req.user);
        // console.log(decoded);
        next();//going to the next function
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}