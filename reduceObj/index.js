function groupBy (objects, key) {
  const result = objects.reduce((acc, student) => {
        
        const { key } = student;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(student);
        return acc;
      }, {});
  
}

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'));
// // {
// //   3: [
// //     { name: "Tirion", class: "B", mark: 3 },
// //     { name: "Keit", class: "A", mark: 3 },
// //   ],
// //   4: [
// //     { name: "Ramsey", class: "A", mark: 4 },
// //   ],
// // }

// const cb = (acc, user) => {
//     if (!Object.hasOwn(acc, user.age)) {
//       acc[user.age] = [];
//     }
//     acc[user.age].push(user.name);
//     return acc; // обязательно вернуть!
//   };