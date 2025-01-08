// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Create a table dynamically using Vanilla JS
const table = document.createElement("table");
const tableHeader = document.createElement("tr");
tableHeader.innerHTML = `<th>First Name</th><th>Location</th>`;
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
