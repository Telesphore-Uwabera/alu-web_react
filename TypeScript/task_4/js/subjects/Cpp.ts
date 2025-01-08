import { Subjects } from './Subject';  // Ensure to import the Subjects namespace
import { Teacher } from './Teacher';  // Import the Teacher interface

export class Cpp extends Subjects.Subject {
  getRequirements(): string {
    return "Here are the requirements for Cpp.";
  }

  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : "No available teacher";
  }
}
