import { useModal } from "../../context/ModalProvider";
import { useTask } from "../../context/TaskProvider";
import { DELETE_ALL_TASK } from "../../reducer/task/actionType";

function TaskAction() {
  const { taskDispatch } = useTask();
  const { setShow } = useModal();

  const handleDeleteTask = () => {
    const confirm = window.confirm("Are you Sure ?");
    if (confirm) {
      taskDispatch({
        type: DELETE_ALL_TASK,
      });
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setShow(true)}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleDeleteTask}
        >
          Delete All
        </button>
      </div>
    </>
  );
}

export default TaskAction;
