/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Example usage of the Teacher interface
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);
// Example usage of the Directors interface
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Example usage of the printTeacher function
console.log(printTeacher("John", "Doe")); // Expected output: J. Doe
// Implement the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage of StudentClass
var student = new StudentClass("Jane", "Smith");
console.log(student.displayName()); // Expected output: Jane
console.log(student.workOnHomework()); // Expected output: Currently working

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsdUNBQXVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vLyBFeGFtcGxlIHVzYWdlIG9mIHRoZSBUZWFjaGVyIGludGVyZmFjZVxyXG52YXIgdGVhY2hlcjMgPSB7XHJcbiAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXHJcbiAgICBsYXN0TmFtZTogXCJEb2VcIixcclxuICAgIGxvY2F0aW9uOiBcIkxvbmRvblwiLFxyXG4gICAgY29udHJhY3Q6IGZhbHNlLFxyXG59O1xyXG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XHJcbi8vIEV4YW1wbGUgdXNhZ2Ugb2YgdGhlIERpcmVjdG9ycyBpbnRlcmZhY2VcclxudmFyIGRpcmVjdG9yMSA9IHtcclxuICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgICBsYXN0TmFtZTogXCJEb2VcIixcclxuICAgIGxvY2F0aW9uOiBcIkxvbmRvblwiLFxyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcclxuICAgIG51bWJlck9mUmVwb3J0czogMTcsXHJcbn07XHJcbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XHJcbi8vIEltcGxlbWVudCB0aGUgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uXHJcbnZhciBwcmludFRlYWNoZXIgPSBmdW5jdGlvbiAoZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xyXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGZpcnN0TmFtZS5jaGFyQXQoMCksIFwiLiBcIikuY29uY2F0KGxhc3ROYW1lKTtcclxufTtcclxuLy8gRXhhbXBsZSB1c2FnZSBvZiB0aGUgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uXHJcbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpOyAvLyBFeHBlY3RlZCBvdXRwdXQ6IEouIERvZVxyXG4vLyBJbXBsZW1lbnQgdGhlIFN0dWRlbnRDbGFzc1xyXG52YXIgU3R1ZGVudENsYXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3R1ZGVudENsYXNzKGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcbiAgICBTdHVkZW50Q2xhc3MucHJvdG90eXBlLndvcmtPbkhvbWV3b3JrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XHJcbiAgICB9O1xyXG4gICAgU3R1ZGVudENsYXNzLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0dWRlbnRDbGFzcztcclxufSgpKTtcclxuLy8gRXhhbXBsZSB1c2FnZSBvZiBTdHVkZW50Q2xhc3NcclxudmFyIHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKFwiSmFuZVwiLCBcIlNtaXRoXCIpO1xyXG5jb25zb2xlLmxvZyhzdHVkZW50LmRpc3BsYXlOYW1lKCkpOyAvLyBFeHBlY3RlZCBvdXRwdXQ6IEphbmVcclxuY29uc29sZS5sb2coc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTsgLy8gRXhwZWN0ZWQgb3V0cHV0OiBDdXJyZW50bHkgd29ya2luZ1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=