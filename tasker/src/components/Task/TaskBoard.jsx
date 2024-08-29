import { useState } from "react";
import NoTask from "./NoTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import TaskSearch from "./TaskSearch";

const initialTasks = [
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
];

function TaskBoard() {
  const [tasks, setTask] = useState(initialTasks);
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [editTask, setEditTask] = useState(null);

  // handler functions

  const handleDeleteTask = (id) => {
    const remainingTask = tasks.filter((task) => task.id !== id);
    setTask(remainingTask);
  };

  const handleDeleteAllTask = () => {
    const confirm = window.confirm("Are You sure!");

    if (confirm) {
      setTask([]);
    }
  };

  const handleFavorite = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          favorite: !task.favorite,
        };
      }
      return task;
    });
    setTask(newTasks);
  };

  const handleAddEditTask = (newTask) => {
    if (!editTask) {
      setTask([...tasks, newTask]);
    } else {
      const updatedTask = tasks.map((task) => {
        if (task.id === newTask.id) {
          return {
            ...newTask,
          };
        }
        return task;
      });

      setTask(updatedTask);

      setEditTask(null);
    }
    setShow(false);
  };

  const handleKeyword = (value) => {
    setKeyword(value);
  };

  const filterTask = tasks.filter((task) => {
    if (keyword === "") return true;
    return task.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {show && (
          <TaskModal
            onHideModal={() => {
              setShow(false);
              setEditTask(null);
            }}
            onSave={handleAddEditTask}
            editTask={editTask}
          />
        )}
        <div className="p-2 flex justify-end">
          <TaskSearch onKeyword={handleKeyword} keyword={keyword} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <TaskAction
              onDeleteAll={handleDeleteAllTask}
              onShowModal={() => setShow(true)}
            />
          </div>

          <div className="overflow-auto">
            {filterTask.length < 1 ? (
              <NoTask />
            ) : (
              <TaskList
                tasks={filterTask}
                onDelete={handleDeleteTask}
                onFavorite={handleFavorite}
                onShow={setShow}
                onEdit={setEditTask}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskBoard;
