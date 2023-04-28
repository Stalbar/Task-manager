import { $authHost } from "./index";

export const getTasks = async () => {
  const { data } = await $authHost.get('/api/task/all');
  return data.tasks;
}

export const addTask = async (title, content, expiredAt, status) => {
  await $authHost.post('/api/task', { title, content, expiredAt, status });
}

export const deleteTask = async (id) => {
  await $authHost.delete(`/api/task/${id}`);
}

export const editTask = async (id, title, content, expiredAt, status) => {
  await $authHost.put(`/api/task/${id}`, { title, content, expiredAt, status });
}