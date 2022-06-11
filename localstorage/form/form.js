const studentForm = document.querySelector("#studentForm");
const displayStudents = document.querySelector(".display_text");

const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = [
  {
    name: nameInput,
    age: ageInput,
    roll: rollInput,
  },
];

console.log(students);
const addStudent = () => {
  students.forEach(({ name, age, roll }) => {
    //create elements
    const subcontainer = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("h2");
    const studentRoll = document.createElement("h2");

    //fill the elements
    studentName.textContent = "Name of student:" + name.value;
    studentAge.textContent = "Agee of student:" + age.value;
    studentRoll.textContent = "Roll number of student:" + roll.value;

    subcontainer.append(studentName, studentAge, studentRoll);
    displayStudents.appendChild(subcontainer);
  });
};

studentForm.onsubmit = (e) => {
  e.preventDefault();
  addStudent();
  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};
// const createStudentDiv = () => {
//   //create elements
//   const subcontainer = document.createElement("div");
//   const studentName = document.createElement("h2");
//   const studentAge = document.createElement("h2");
//   const studentRoll = document.createElement("h2");

//   //fill the elements
//   //   studentName.textContent = "Name of student:" + studentObject.name;
//   //   studentAge.textContent = "Agee of student:" + studentObject.age;
//   //   studentRoll.textContent = "Roll number of student:" + studentObject.roll;

//   subcontainer.append(studentName, studentAge, studentRoll);
//   displayStudents.appendChild(subcontainer);
// };
