import { useTask } from "../../context/TaskProvider";
import NoTask from "./NoTask";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasksState } = useTask();
  const tasks = tasksState.tasks || [];

  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
            {" "}
            Description{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <NoTask />
        )}
      </tbody>
    </table>
  );
}

export default TaskList;
