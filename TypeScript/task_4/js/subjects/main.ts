import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';
import { Teacher } from './Teacher';

// Create and export constants for Cpp, Java, and React
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeaching: 10 // Assuming experienceTeaching is the correct property name
};

// For Cpp subject, log to the console and call the required methods
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject, log to the console and call the required methods
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject, log to the console and call the required methods
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
