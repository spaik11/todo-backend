/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(todos, func) {
  let newArr = [];
  
  todos.forEach(todo => newArr.push(func(todo)))

  return newArr;
}

const filter = function(todos, func) {
  let newArr = [];

  todos.forEach(todo => func(todo) ? newArr.push(todo) : '');

  return newArr;
}

const twoPileSort = function(todos, func) {
  let newArr = [];

  todos.forEach(todo => func(todo) ? newArr.unshift(todo) : newArr.push(todo));

  return newArr;
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todos) {
  return todos.text;
}

const getCompleteness = function (todos) {
  return todos.complete;
}

const getPriority = function (todos) {
  return todos.priority;
}

const isComplete = function(todos) {
  return todos.complete;
}

const isNotComplete = function(todos) {
  return !todos.complete;
}
const isHighPriority = function(todos) {
  return todos.priority == 2;
}

const isLowPriority = function(todos) {
  return todos.priority == 1;
}


/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todos) {
  return map(todos, getTodoName);
}

const namesAndPriorities = function(todos) {
  let newArr = [];

  todos.forEach(todo => isHighPriority(todo) 
    ? newArr.push(`${getTodoName(todo)} - High`) 
    : newArr.push(`${getTodoName(todo)} - Low`));

  return newArr;
}

const justNotComplete = function(todos) {
  let newArr = [];

  todos.forEach(todo => !isComplete(todo) ? newArr.push(todo) : '');

  return newArr;
}

const justComplete = function(todos) {
  return filter(todos, isComplete);
}

const priority2Only = function(todos) {
  return filter(todos, isHighPriority);
}

const priority1Only = function(todos) {
  return filter(todos, isLowPriority);
}

const notCompleteFirst = function(todos) {

  return twoPileSort(todos, isNotComplete);
}

const priority2First = function(todos) {
  return twoPileSort(todos, isHighPriority);
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}