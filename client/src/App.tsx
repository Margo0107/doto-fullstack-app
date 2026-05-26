function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-zinc-900 text-white text-3xl">
        <section className="flex flex-col gap-11 justify-between bg-zinc-800 rounded-xl p-7 py-6">
          <h1 className="text-4xl">Todo App</h1>
          <div>
            <input
              type="text"
              placeholder="describe the task"
              className="bg-zinc-700 rounded-lg p-4 py-2 focus:outline-blue-600 outline-none"
            />
            <button className="bg-blue-500 rounded-lg p-4 py-2">add</button>
          </div>

          <div>
            <ul className="flex gap-4 bg-zinc-700 p-4 py-2 rounded-lg">
              <li>Js & React</li>
              <button className="bg-red-500 tetx-lg rounded-lg p-2 py-1">delete</button>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
