import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";
export interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "ADD";
  task: Task;
}

interface DeleteTaskAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTaskAction | DeleteTaskAction;

const taskReducers = (
  state: Task[],
  action: AddTaskAction | DeleteTaskAction
): Task[] => {
  switch (action.type) {
    case "ADD":
      return [{ id: action.task.id, title: action.task.title }, ...state];
    case "DELETE":
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, tasksDispatch] = useReducer(taskReducers, []);
  return (
    <TaskContext.Provider value={{ tasks, tasksDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
