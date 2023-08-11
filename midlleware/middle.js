
async function middleware (req,res,next){
    const email = req.body.email;
    const password = req.body.password;
    if (email > 12) {
        res.send(401).json({
            message:"email not correct"
        })
    }
    else if(password < 5){
        res.send(401).json({
            message:"password not correct"
        })
    }
    else{
        req.email = email;
        req.password = password;
    }
    
}

module.exports = middleware;