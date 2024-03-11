import { useContext } from "react";
import useAuth from "../auth/useAuth";
import TaskContext from "./taskContext";

const useTasks = () => useContext(TaskContext);

const TaskList = () => {
  const { tasks, tasksDispatch } = useTasks();
  const { user } = useAuth();
  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          tasksDispatch({
            type: "ADD",
            task: { id: Date.now(), title: "task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => tasksDispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
