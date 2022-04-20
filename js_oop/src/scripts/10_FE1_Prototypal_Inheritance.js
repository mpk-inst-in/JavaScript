
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


const user1 = new User("John", "Admin@email.com");

function Admin(username, email, title) {

  User.call(this, username, email);
  this.title = title;

}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.addUser = function () {
  console.log("User added ...");
}
// console.log(user1);


const admin = new Admin('jane', 'jane@email.com', 'Admin');



console.log(admin)





