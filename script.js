'use strict';

// Scope practice

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    
    if(birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // function scoped
      output = 'New output' // reassigning outter scope var
      const firstName = 'bob'; // found as closest scope 
      const str = `Oh you are a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));

      console.log(output);
    }
    console.log(millenial)
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Brax'
calcAge(1996);
