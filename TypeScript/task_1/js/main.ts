// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // Mandatory and readonly
    readonly lastName: string;  // Mandatory and readonly
    fullTimeEmployee: boolean;  // Mandatory
    yearsOfExperience?: number; // Optional
    location: string;           // Mandatory
    [propName: string]: any;    // Allows additional attributes
  }
  
  // Example usage of the Teacher interface
  const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
  };
  
  console.log(teacher3);
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number; // Mandatory
  }
  
  // Example usage of the Directors interface
  const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Define the interface for the printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage of the printTeacher function
  console.log(printTeacher("John", "Doe")); // Expected output: J. Doe
  
  // Define an interface for the constructor of StudentClass
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
  }
  
  // Define an interface for the StudentClass
  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage of StudentClass
  const student = new StudentClass("Jane", "Smith");
  console.log(student.displayName()); // Expected output: Jane
  console.log(student.workOnHomework()); // Expected output: Currently working
  