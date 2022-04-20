
function User(username, email) {

  this.username = username;
  this.email = email;

  this.login = function () {

    console.log(`${this.username} has logged in`);
  }

}

const user1 = new User("John", "Admin");
console.log(user1);

