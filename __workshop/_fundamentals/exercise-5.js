// Exercise 1
//
// 1. Write a function that accepts the object below, a key and a value and returns the objects that contain the same key/value pair
// e.g. getData(staffMembers, 'title', 'Web Developer II') returns
// [
//   {
//     name: "Jane Smith",
//     title: "Web Developer II",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 6,
//     },
//   },
// ];

// - If the provided key is any of the skillLevel items, you should return all objects that have skill levels at least that high.
// e.g. getdata(staffMembers, 'sql', 7) returns
// [
//   {
//     name: "Steve Rogers",
//     title: "Database Admin",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 9,
//     },
//   },
//   {
//     name: "Chuck Taylor",
//     title: "Web Developer III",
//     skillLevels: {
//       javascript: 8,
//       python: 7,
//       sql: 8,
//     },
//   },
// ];

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

const getData = (arr, key, val) => {
  // return something
  let list = [];
  let skills = ["javascript", "python", "sql"];
  arr.forEach(element => {
      // 1. Write a function that accepts the object below, a key and a value and returns the objects that contain the same key/value pair
      if(element.hasOwnProperty(key)){
        if(element[key]===val){
          list.push(element);
        }
      }
      // 2. If the provided key is any of the skillLevel items, you should return all objects that have skill levels at least that high.
      else if(skills.includes(key)){
        // check if object has property
        if(element.hasOwnProperty("skillLevels")){
          let {skillLevels:skl} = element;
          // check if has property
          if(skl.hasOwnProperty(key)){
            let num = skl[key];
            if(num>=val){
                list.push(element);
            }
          }
        }
      }
    }
  );
  return list;
};

// 2. Do a console.log to verify your function.
console.log(getData(staffMembers, 'sql', 7));
// 3. Run the test to validate: yarn test exercise-5

module.exports = { getData, staffMembers };
