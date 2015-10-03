// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '484817718348462', // your App ID
		'clientSecret' 	: 'c2eda1e93526e2eb5996b7b0d7173ba5', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	}

};