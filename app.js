//  მასივი,  array

const points = [2, 4, 5, 1, 2, 7, 2, 5];
const myArr = [
  "test",
  1,
  true,
  false,
  null,
  undefined,
  30.09,
  points,
  ["test", "test2", "test3", [3, 4, 5]],
];

const num = points.length; //property თვისება
// console.log(points);
// console.log(myArr[8][3][1]);

// console.log(points[num - 1]);
// console.log(points.at(-1)); //method,

const newLen = points.push(30);
const lastRemoved = points.pop();
const removedFirst = points.shift();
const newLen2 = points.unshift(23);
// console.log(points);
const slicedArr = points.slice(1, 3);
// console.log(slicedArr);
// console.log(`your points: ${points.join(": _ :")}`);
// console.log(points.indexOf(100));

// object,  ობიექტი

const student = {
  firstName: "Nino",
  age: 20,
  points,
  isPresent: true,
  finalSciore: 100,
  contactInfo: {
    email: "example@gmail.com",
    phoneNumber: "+995 345 234 234",
  },
};

const userSelected = "firstName";
// console.log(student);
// console.log(student.age);
// console.log(student[userSelected]);
// console.log(student.contactInfo.email)

student.email2 = "example2@gmail.com";

// delete student.age;

// console.log(student);

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// let a = "test";
// let b = a;

// console.log(a, b);
// b = 10;
// console.log(a, b);

const stundet2 = {
  ...student,
  points: [...student.points],
  contactInfo: { ...student.contactInfo },
  lastName: "tst",
};
const stundet3 = { ...student };

stundet2.firstName = "Giorgi";
stundet3.firstName = "Lashs";
// console.log(student, stundet2);

const students = [student, stundet2, stundet3];
// console.log(students);

// console.log(Math.max(2, 4, 50, 1, 0, -19));
// console.log(Math.floor(23.9), Math.round(23.5), Math.ceil(23.1));
// console.log(Math.abs(-123));
// console.log(Math.random() * 5);
const now = new Date();
// console.log(now.getDate());
