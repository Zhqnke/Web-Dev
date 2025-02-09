/*
let user={
    name:"John",
    age:18

};
alert(user.name);
alert(user.age);
*/

/*
function CreateUser(name,age){
    return{
        name:name,
        age:age,

    }
}
let user = CreateUser("John", 30);
alert(user.name); 
alert(user.age);
*/

/*
let User={
    name:"John",
    age:30,
    isAdmin:true

};
for(let key in User){
alert(key);
alert(User[key]);
}
*/

/*
let user={};
user.name='John';
user.surname='Smith';
user.name='Pete';
delete user.name;
alert(user.name);
alert(user.surname);
*/
function IsEmpty(obj){
    for(key in obj){
        return false;
    }
    return false;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function Sum(salaries){
let sum=0;
for (key in salaries){
    sum+=salaries[key];
}
return sum;
}

console.log(Sum(salaries));


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu){
    for(key in menu){
        if( typeof menu[key]=='Number'){
            menu[key]*=2;
        }
    }
    console.log(multiplyNumeric(menu));
  }