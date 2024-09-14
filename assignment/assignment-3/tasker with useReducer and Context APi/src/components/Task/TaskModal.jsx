import { useState } from "react";
import { useModal } from "../../context/ModalProvider";
import { useTask } from "../../context/TaskProvider";
import {
  ADD_TASK,
  EDIT_TASK,
  EDIT_TASK_REQUEST,
} from "../../reducer/task/actionType";

function TaskModal() {
  const { setShow } = useModal();
  const { tasksState, taskDispatch } = useTask();

  const [task, setTask] = useState(
    tasksState.editTask || {
      id: crypto.randomUUID(),
      title: "",
      des: "",
      tags: [],
      priority: "",
      favorite: false,
    }
  );

  const handleTaskChange = (e) => {
    const fieldName = e.target.name;
    let fieldValue = e.target.value;

    if (fieldName === "tags") {
      fieldValue = fieldValue.split(",");
    }

    setTask({
      ...task,
      [fieldName]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tasksState.editTask) {
      taskDispatch({
        type: EDIT_TASK,
        payload: task,
      });
    } else {
      taskDispatch({
        type: ADD_TASK,
        payload: task,
      });
    }
    setShow(false);
  };

  return (
    <div>
      <div className="w-full h-screen overflow-hidden fixed bg-[rgba(25,29,38,0.81)] top-0 left-0 z-30"></div>
      <div className="w-full h-screen absolute top-10 left-10 z-50 flex justify-center items-center overflow-hidden">
        <form
          className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 "
          onSubmit={handleSubmit}
        >
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add New Task
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                onChange={handleTaskChange}
                value={task.title}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="des"
                id="description"
                onChange={handleTaskChange}
                value={task.des}
                required
              ></textarea>
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  onChange={handleTaskChange}
                  value={task.tags}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  onChange={handleTaskChange}
                  value={task.priority}
                  required
                >
                  <option value="" disabled>
                    Select Priority
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-evenly lg:mt-20">
            <button
              type="button"
              className="rounded bg-red-400 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={() => {
                taskDispatch({
                  type: EDIT_TASK_REQUEST,
                  payload: null,
                });
                setShow(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {!tasksState.editTask ? "Create new Task" : "update Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
