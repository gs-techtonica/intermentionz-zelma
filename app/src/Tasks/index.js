// Tasks component
import * as React from "react";

import useApi from "../auth/useApi";

// had to change name of file to get it to work
import styles from "./tasks.scss";

const Tasks = () => {
  // states & imports
  const [tasks, setTasks] = React.useState([]);
  const { loading, apiClient } = useApi();

  // load tasks when page loads (works when you put it inside useEffect hook)
  const loadTasks = React.useCallback(
    async () => setTasks(await apiClient.getTasks()),
    [apiClient],
  );
  const addTask = (task) => apiClient.addTask(task).then(loadTasks);
  // addTask func - loads tasks after adding task

  React.useEffect(() => {
    !loading && loadTasks();
  }, [loading, loadTasks]);

  // when it's loading show nothing, otherwise show tasks/affirmations
  return loading ? null : (
    <section>
      <div className="affirmation-wrapper">
        <TaskList className="huh" {...{ tasks }} />
        <AddTask {...{ addTask }} />
      </div>
    </section>
  );
};

// TaskList component
const TaskList = ({ tasks }) => (
  // center
  <table className="center">
    {/* <thead> */}
    <tbody>
      <th>Affirmations</th>
      {tasks.map(({ id, name }) => (
        <tr key={id}>
          <td className="text-center">{name}</td>
        </tr>
      ))}
    </tbody>
    {/* </thead> */}
  </table>
);

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
    <div>
      <form className="center" {...{ onSubmit }}>
        <label>
          New task:{" "}
          <input
            onChange={(e) => setTask(e.currentTarget.value)}
            value={task}
          />
        </label>
        <button disabled={!canAdd} className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Tasks;
