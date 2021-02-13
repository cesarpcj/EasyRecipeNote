exports.randomNumber = function (length) {
	var text = "";
	var possible = "123456789";
	for (var i = 0; i < length; i++) {
		var sup = Math.floor(Math.random() * possible.length);
		text += i > 0 && sup == i ? "0" : possible.charAt(sup);
	}
	return Number(text);
};

exports.getAuthenticatedUser = (req) =>{
	let token;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
         token = req.headers.authorization.split(' ')[1];
    }else{
        token = null;
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) throw err;
		return user;

	})
}