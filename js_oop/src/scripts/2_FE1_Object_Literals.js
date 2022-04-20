
const user = {
  name: 'John',
  age: 21,
  isStudent: true,
  blogs: ['OOP JS', 'FP', 'Javascript'],
  login: function () { console.log('logged in..') },
  gettBlogs: function () {
    // console.log(this.blogs);
    return this.blogs;
  }
};

user.gettBlogs().forEach(blog => {
  console.log(blog);
})

