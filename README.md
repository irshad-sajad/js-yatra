# js-yatra
A code repo for javascript series from youtube


There are three types of execution contexts in JavaScript:
Global execution context: This is the default execution context that is created when the code is executed in a global scope.
Function execution context: This is the execution context that is created when a function is called.
Eval execution context: This is the execution context that is created when the eval() function is called

The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context


🔵For live demo:

browser > inspect > Sources

create a snippet with few functions and visually experience the call stack.
