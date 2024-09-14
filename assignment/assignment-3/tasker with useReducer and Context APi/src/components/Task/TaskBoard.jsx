import { useModal } from "../../context/ModalProvider";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

import TaskSearch from "./TaskSearch";

function TaskBoard() {
  const { show } = useModal();

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        <div className="p-2 flex justify-end">
          <TaskSearch />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <TaskAction />
          </div>

          <div className="overflow-auto">
            <TaskList />
          </div>
        </div>
      </div>
      {show && <TaskModal />}
    </section>
  );
}

export default TaskBoard;
