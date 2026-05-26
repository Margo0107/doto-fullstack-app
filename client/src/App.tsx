import { useEffect, useState } from "react";

import { useTask } from "./hooks/useTask";

type Task = {
  id: number;
  text: string;
};

function App() {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const { getTask, createTask, deleteTask: removeTask } = useTask();

  // Load tasks when app starts
  useEffect(() => {
    const loadTasks = async () => {
      const data = await getTask();

      if (data) {
        setTasks(data);
      }
    };
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!text.trim()) return;

    const newTask = await createTask({ text });

    if (newTask) {
      setTasks((prev) => [...prev, newTask]);
    }
    setText("");
  };

  const deleteTask = async (id: number) => {
    await removeTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <section className="flex flex-col gap-11 justify-between bg-zinc-800 rounded-xl p-7 py-6">
          <h1 className="text-4xl">Todo App</h1>
          <div className="flex gap-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="input task"
              placeholder="describe the task"
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-xl outline-none transition focus:border-blue-500"
            />
            <button
              onClick={addTask}
              aria-label="add task"
              className="bg-blue-500 text-xl rounded-lg p-4 py-2 transition hover:bg-blue-500 active:scale-95"
            >
              add
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              <ul
                key={task.id}
                className="flex bg-zinc-700 p-4 py-2 rounded-lg justify-between items-center"
              >
                <li className="text-lg">{task.text}</li>
                <button
                  onClick={() => deleteTask(task.id)}
                  aria-label="delete task"
                  className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium transition hover:bg-red-400"
                >
                  delete
                </button>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
