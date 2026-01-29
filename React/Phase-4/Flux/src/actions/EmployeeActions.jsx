import dispatcher from "../dispatcher/AppDispatcher";

export default function addEmployee(name) {
  dispatcher.dispatch({
    type: "ADD_EMPLOYEE",
    payload: name
  });
}
