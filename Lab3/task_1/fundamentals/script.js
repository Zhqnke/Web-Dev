//Hello, world!
alert("Hello World");


//Code structure 
//The modern mode, "use strict"
"use strict"; // is actually useful in the beginning but,then you can omit it 
alert("Hello");

[1,2].forEach(alert);

// one line comment
/*
multi comment
*/

let name = "Ilya";
let admin;
admin=name;
alert(admin);

let planet='land';
let people='visitors';




alert( `hello ${1}` ); 

alert( `hello ${"name"}` ); 

alert( `hello ${name}` );

//Interaction: alert, prompt, confirm
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss?");

alert( isBoss );


let person=prompt("What is your name?")
alert(`My name is ${person}`);

//Type Conversions
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value)

alert( "6" / "2" );
//Basic operators, maths
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let counter = 1;
alert( 2 * ++counter );

let counterx = 1;
alert( 2 * counterx++ ); 



let a = 1, b = 1;

let c = ++a; // ?
let d = b++;
alert(a,b,c,d);


let ab = 2;

let xa = 1 + (ab*= 2);
alert(xa);




let af = prompt("First number?", 1);
let bf = prompt("Second number?", 2);

alert(a + b); //


//Comparisons

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true



//Conditional branching: if, '?

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
else{
    alert("You are wrong");
}



let san=prompt("Write the number",0);
if(san>0) alert("the value is greater than zero!");
else if(san<0) alert("the value is the lower than zero!");
else alert("the value is the zero");


let result = (a + b < 4) ? 'Below' : 'Over'


let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  //Logical operators

  alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


alert( null || 2 || undefined ); // 2 

alert( alert(1) || 2 || alert(3) );//answer is the 3

alert(1 && null && 2);// null




if (-1 || 0) alert( 'first' );


if (-1 && 0) alert( 'second' );


if (null || -1 && 1) alert( 'third' );


//Nullish coalescing operator '??'


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder


let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// set height=100, if height is null or undefined
height = height ?? 100;


//Loops: while and for

for(let i=0;i<3;i++){
    alert(i);
}


let sum=0;
let sano=5;

while(sano>0){
    sum+=sano;
    sano--;
    alert(sum);
}


let i = 3;

while (i) {
  alert( i-- );
}// 1


let io = 0;
while (io < 3) {
  alert( `number ${io}!` );
  i++;
}



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); // a prime
}



//Switch 
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }


  let al = +prompt('a?', '');

switch (al) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

// functions 
function min(a, b) {
    return (a < b) ? a : b;
}

function pow(num, degree) {
    return num ** degree;
}

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

//arrow functions 
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

let ask = (question, yes, no) => confirm(question) ? yes() : no(); 
// or
// ask("Do you agree?",
//     () => alert("You agreed.");
//     () => alert("You canceled the execution.");
// );
 

// specials

// expression on the right side
let sumkk = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sumk = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;