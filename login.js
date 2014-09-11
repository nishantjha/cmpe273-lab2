function Login() {
	// sessionId -> user map
	this.sessionMap = {
		2711991 : { name: 'Nishant Jha', email: 'nishant.jha@sjsu.edu' }
	};
}

Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};


Login.prototype.login = function(_name, _email) {
        sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};


Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);

};

module.exports = new Login();
