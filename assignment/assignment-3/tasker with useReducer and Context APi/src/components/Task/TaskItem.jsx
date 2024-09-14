import { useModal } from "../../context/ModalProvider";
import { useTask } from "../../context/TaskProvider";
import {
  DELETE_TASK,
  EDIT_TASK,
  EDIT_TASK_REQUEST,
} from "../../reducer/task/actionType";
import Star from "./Star";

const TaskItem = ({ task }) => {
  const { taskDispatch } = useTask();
  const { setShow } = useModal();

  const handleDeleteTask = () => {
    const confirm = window.confirm("Are you Sure ?");
    if (confirm) {
      taskDispatch({
        type: DELETE_TASK,
        payload: task,
      });
    }
  };

  const handleEditTask = (editTask) => {
    taskDispatch({
      type: EDIT_TASK_REQUEST,
      payload: editTask,
    });
    setShow(true);
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td
        onClick={() => {
          taskDispatch({
            type: EDIT_TASK,
            payload: {
              ...task,
              favorite: !task.favorite,
            },
          });
        }}
      >
        <Star color={task.favorite ? "yellow" : ""} />
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.des}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={handleDeleteTask}>
            Delete
          </button>
          <button
            className="text-blue-500"
            onClick={() => handleEditTask(task)}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
