import {
  ADD_KEYWORD,
  ADD_TASK,
  DELETE_ALL_TASK,
  DELETE_TASK,
  EDIT_TASK,
  EDIT_TASK_REQUEST,
} from "./actionType";

export const initialTasks = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      des: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["web", "react", "vue"],
      priority: "High",
      favorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "hello world",
      des: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["web", "react", "vue"],
      priority: "High",
      favorite: false,
    },
  ],
  keyword: "",
  editTask: null,
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case DELETE_TASK: {
      const newTask = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        tasks: newTask,
      };
    }

    case DELETE_ALL_TASK: {
      return {
        ...state,
        tasks: [],
      };
    }
    case ADD_KEYWORD: {
      return {
        ...state,
        keyword: action.payload,
      };
    }

    case EDIT_TASK: {
      return {
        ...state,
        editTask: null,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }

          return {
            ...action.payload,
          };
        }),
      };
    }

    case EDIT_TASK_REQUEST: {
      return {
        ...state,
        editTask: state.editTask ? null : action.payload,
      };
    }

    default:
      return state;
  }
};

export default taskReducer;
