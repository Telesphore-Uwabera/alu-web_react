/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Define the Director class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// Define the Teacher class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// Function to create an employee based on salary
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Type predicate to check if an employee is a Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Function teachClass
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
// Example Usage
var director = createEmployee(1000);
var teacher = createEmployee(200);
executeWork(director); // Expected: Getting to director tasks
executeWork(teacher); // Expected: Getting to work
console.log(teachClass('Math')); // Expected: Teaching Math
console.log(teachClass('History')); // Expected: Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QixpQ0FBaUM7QUFDakMsb0NBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vLyBEZWZpbmUgdGhlIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGluZyBEaXJlY3RvckludGVyZmFjZVxyXG52YXIgRGlyZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaXJlY3RvcigpIHtcclxuICAgIH1cclxuICAgIERpcmVjdG9yLnByb3RvdHlwZS53b3JrRnJvbUhvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0b3IucHJvdG90eXBlLmdldENvZmZlZUJyZWFrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0b3IucHJvdG90eXBlLndvcmtEaXJlY3RvclRhc2tzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERpcmVjdG9yO1xyXG59KCkpO1xyXG4vLyBEZWZpbmUgdGhlIFRlYWNoZXIgY2xhc3MgaW1wbGVtZW50aW5nIFRlYWNoZXJJbnRlcmZhY2VcclxudmFyIFRlYWNoZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZWFjaGVyKCkge1xyXG4gICAgfVxyXG4gICAgVGVhY2hlci5wcm90b3R5cGUud29ya0Zyb21Ib21lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICAgIH07XHJcbiAgICBUZWFjaGVyLnByb3RvdHlwZS5nZXRDb2ZmZWVCcmVhayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xyXG4gICAgfTtcclxuICAgIFRlYWNoZXIucHJvdG90eXBlLndvcmtUZWFjaGVyVGFza3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZWFjaGVyO1xyXG59KCkpO1xyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW4gZW1wbG95ZWUgYmFzZWQgb24gc2FsYXJ5XHJcbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeSkge1xyXG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xyXG59XHJcbi8vIFR5cGUgcHJlZGljYXRlIHRvIGNoZWNrIGlmIGFuIGVtcGxveWVlIGlzIGEgRGlyZWN0b3JcclxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZSkge1xyXG4gICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3b3JrIGJhc2VkIG9uIGVtcGxveWVlIHR5cGVcclxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWUpIHtcclxuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcclxuICAgIH1cclxufVxyXG4vLyBGdW5jdGlvbiB0ZWFjaENsYXNzXHJcbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzcykge1xyXG4gICAgaWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xyXG4gICAgICAgIHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xyXG59XHJcbi8vIEV4YW1wbGUgVXNhZ2VcclxudmFyIGRpcmVjdG9yID0gY3JlYXRlRW1wbG95ZWUoMTAwMCk7XHJcbnZhciB0ZWFjaGVyID0gY3JlYXRlRW1wbG95ZWUoMjAwKTtcclxuZXhlY3V0ZVdvcmsoZGlyZWN0b3IpOyAvLyBFeHBlY3RlZDogR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xyXG5leGVjdXRlV29yayh0ZWFjaGVyKTsgLy8gRXhwZWN0ZWQ6IEdldHRpbmcgdG8gd29ya1xyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpOyAvLyBFeHBlY3RlZDogVGVhY2hpbmcgTWF0aFxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdIaXN0b3J5JykpOyAvLyBFeHBlY3RlZDogVGVhY2hpbmcgSGlzdG9yeVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=