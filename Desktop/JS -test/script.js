//1. Using the dishes array. Loop through the array using afor loop.Log out all the dishes.
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmons",
];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}
// a
//2.DOM manipulation
const testButton = document.createElement("button");
const buttonText = document.createTextNode("This is a button!");
testButton.appendChild(buttonText);
testButton.setAttribute("id", "test-button");
document.body.appendChild(testButton);
document.getElementById("test-button").addEventListener("click", () => {
  const h1Tag = document.createElement("h1");
  const textNode = document.createTextNode("JavaScript test");
  h1Tag.appendChild(textNode);
  document.body.style.backgroundColor = "#8e48ff";
  document.body.appendChild(h1Tag);
});

//3.Async API calls

// (async function () {
//   const response = await fetch("https://reqres.in/api/users");
//   if (response.ok) {
//     const content = await response.json();
//     document.querySelector("p").innerHTML = content.first_name;
//     console.log(first_name);
//   }
// })();

// fetch("https://reqres.in/api/users")
//   .then((response) => response.json())
//   .then((first_name) => {
//     console.log(first_name);
//   });

fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

function displayName(data) {
  const name = data.first_name[0];
  const nameDiv = document.getElementById("firstname");
}

const firstName = Array.first_name;
const heading = document.createElement("h1");
heading.innerHTML = firstName;

//4. Class

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello() {
    console.log("Hello! My name is " + this.firstName + ", nice to meet you.");
  }
}
const Peter = new Person("Peter");
Peter.sayHello();
