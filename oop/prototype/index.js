function User (name, age) {
    this.name = name;
    this.age = age;
}

let user = new User('Slava', 53);
User.prototype.showName = function () {
    console.log(this.name);
}
console.log(user);
console.log(User)