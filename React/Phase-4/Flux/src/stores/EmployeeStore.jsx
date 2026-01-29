// import React from 'react'
// import dispatcher from "../dispatcher/AppDispatcher" // Central Dispatcher
// import { EventEmitter } from 'events';



// // Internal data structure
// let _employees = [];
// class EmployeeStore extends EventEmitter {

//   getAllEmployees() {
//     return _employees;
//   }
// }
// const employeeStore = new EmployeeStore();
// // Register with dispatcher to handle actions
// dispatcher.register((action) => {
//   switch (action.type) {
   
//     case "Add_Employee":
//       _employees.push(action.payload);
//       employeeStore.emit("change"); //emitting or notifying UI
//       break;
//     default:
//       // No operation
//       break;
//   }
// });
// export default employeeStore;


// import dispatcher from "../dispatcher/AppDispatcher";

// // internal data
// let _employees = [];

// class SimpleEmitter {
//   constructor() {
//     this.listeners = {};
//   }

//   on(event, fn) {
//     this.listeners[event] = this.listeners[event] || [];
//     this.listeners[event].push(fn);
//   }

//   removeListener(event, fn) {
//     this.listeners[event] =
//       (this.listeners[event] || []).filter(l => l !== fn);
//   }

//   emit(event) {
//     (this.listeners[event] || []).forEach(fn => fn());
//   }
// }

// class EmployeeStore extends SimpleEmitter {
//   getAllEmployees() {
//     return _employees;
//   }
// }

// const employeeStore = new EmployeeStore();

// dispatcher.register(action => {
//   switch (action.type) {
//     case "Add_Employee":
//       _employees.push(action.payload);
//       employeeStore.emit("change");
//       break;

//     default:
//       break;
//   }
// });

// export default employeeStore;
import dispatcher from "../dispatcher/AppDispatcher";

let _employees = [];
let listeners = [];

const employeeStore = {
  getAllEmployees() {
    return _employees;
  },

  addChangeListener(callback) {
    listeners.push(callback);
  },

  removeChangeListener(callback) {
    listeners = listeners.filter(cb => cb !== callback);
  },

  emitChange() {
    listeners.forEach(cb => cb());
  }
};

// Register store with dispatcher
dispatcher.register((action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      _employees.push(action.payload);
      employeeStore.emitChange();
      break;

    default:
      break;
  }
});

export default employeeStore;
