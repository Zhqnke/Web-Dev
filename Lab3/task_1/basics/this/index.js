let userp={
    name:"John",
    age:15
};
/*
user.sayHi=function(){
    alert("Hello");
}
user.sayHi();
*/

/*
sayHi(){
    alert(this.name);
}
user.sayHi()
*/


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );


  let calculutar={
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      }
  };
  calculutar.read();
  alert(calculutar.sum());
  alert(calculutar.mul());