import { Teacher } from './Teacher';

namespace Subjects {
  export class Subject {
    teacher!: Teacher;  // Ensures 'teacher' is properly initialized

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

export { Subjects };  // Export the Subjects namespace to make it accessible outside
