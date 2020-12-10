import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actionsType";

const defaultState = [
  { id: 1, title: "nouvelle tache reducer", completed: false },
];
export const tasksList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return [
            { id: task.id, title: task.title, completed: !task.completed },
          ];
        } else {
          task;
        }
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
