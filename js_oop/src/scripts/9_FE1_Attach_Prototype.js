
function User(username, email) {

  this.username = username;
  this.email = email;


}

//attach methods to a prototype

User.prototype.login = function () {

  console.log(`${this.username} has logged in`);
  return this;
}

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
}


const user1 = new User("John", "Admin");
// user1.login();
// user1.logout();

user1.login().logout().login()






