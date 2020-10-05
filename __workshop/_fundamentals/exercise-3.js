// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

//-------------------------------------------------

// Exercise 3
// ------------
// 1. Write a function that, when passed an array of *people* (person objects) as
// an argument and returns an array of their full names (each full name is a string).

function fullName(peopleArr) {
  // return something
  let s = [];
  peopleArr.forEach(element => {
    if("name" in element){
      let {name:{first="", middle="", last=""} = {}} = element;
      if(first===""){       // first is empty
        if(middle===""){  // middle is empty
          if(last===""){  // last is empty
            s.push("");
          }else{          // last is not empty
            s.push(last);
          }
        }else{  // middle is not empty
          if(last===""){  // last is empty
            s.push(`${middle} ${last}`);
          }else{          // last is not empty
            s.push(last);
          }
        }
      }else{          // first is not empty
        if(middle===""){  // middle is empty
          if(last===""){  // last is empty
            s.push("");
          }else{          // last is not empty
            s.push(`${first} ${last}`);
          }
        }else{  // middle is not empty
          if(last===""){  // last is empty
            s.push(`${first} ${middle}`);
          }else{          // last is not empty
            s.push(`${first} ${middle} ${last}`);
          }
        }
      }
    }
  });
  return s;
}

// https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8

// 2. Do a console.log to verify your function.
//console.log(fullName(people));
// 3. Run the test to validate: yarn test exercise-3

module.exports = { fullName, people };
