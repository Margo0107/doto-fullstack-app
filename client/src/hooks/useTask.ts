type Task = {
  id: number;
  text: string;
};

const API_URL = "http://localhost:5000";

export const useTask = () => {
  
  const getTask = async (): Promise<Task[] | undefined> => {
    try {
      const res = await fetch(`${API_URL}/tasks`);
      const result: Task[] = await res.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (data: {
    text: string;
  }): Promise<Task | undefined> => {
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result: Task = await res.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: number): Promise<{message: string} | undefined> => {
    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return { getTask, createTask, deleteTask };
};
