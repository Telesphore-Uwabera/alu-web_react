import { Subjects } from './js/subjects/Subject';
import { Teacher } from './js/subjects/Teacher';
import { Cpp } from './js/subjects/Cpp';
import { Java } from './js/subjects/Java';

const cpp = new Cpp();
const teacher: Teacher = { firstName: "Alice", lastName: "Johnson", experienceTeaching: 5 };
cpp.setTeacher(teacher);
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(teacher);
console.log(java.getAvailableTeacher());
