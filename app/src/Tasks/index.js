// Tasks component
import * as React from "react";

import useApi from "../auth/useApi";

// had to change name of file to get it to work
import "./tasks.scss";

const Tasks = () => {
  // states & imports
  const [tasks, setTasks] = React.useState([]);
  const { loading, apiClient } = useApi();

  // comment
  // load tasks when page loads (works when you put it inside useEffect hook)
  const loadTasks = React.useCallback(
    async () => setTasks(await apiClient.getTasks()),
    [apiClient],
  );
  // addTask func - loads tasks after adding task
  // taskName is more descriptive and similar to apiClient
  const addTask = (taskName) => apiClient.addTask(taskName).then(loadTasks);

  // delete & load task - you could name it anything, but id is more descriptive
  // 'tasks' implies it's an object, when in reality it's just the id
  const deleteTask = (id) => apiClient.deleteTask(id).then(loadTasks);

  React.useEffect(() => {
    !loading && loadTasks();
  }, [loading, loadTasks]);

  // when it's loading show nothing, otherwise show tasks/affirmations
  return loading ? null : (
    <section>
      <div className="affirmation-wrapper">
        {/* creating obj w/ 2 attributes - tasks & deleteTasks (you could do "tasks: taskState" tasks(L) = name, tasks(R) is the value) */}
        {/* 'object shorthand syntax' */}
        <TaskList {...{ tasks, deleteTask }} />
        <AddTask {...{ addTask }} />
      </div>
    </section>
  );
};

// TaskList component
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <table className="center">
        {/* <thead> */}
        <tbody>
          <th colspan="2">Affirmations</th>
          {tasks.map(({ id, name }) => (
            <tr key={id}>
              <td className="text-center">
                {/* <input type="checkbox" id="delete" /> */}
                {name}
              </td>
              <td className="delete-column">
                {/* you have access to id from tasks */}
                <button className="delete-btn" onClick={() => deleteTask(id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* </thead> */}
      </table>
      {/* when you click 'delete' is deletes task*/}
    </div>
  );
};

const AddTask = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="center">
      <form {...{ onSubmit }}>
        <label>
          <input
            onChange={(e) => setTask(e.currentTarget.value)}
            value={task}
            placeholder="Enter Affirmation/Mention"
          />
        </label>
        <button className="add-btn" disabled={!canAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Tasks;
