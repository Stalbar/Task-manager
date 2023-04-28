import { $authHost, $host } from "./index";

export const registration = async (email, password) => {
  await $host.post('api/user/registration', { email, password });
}

export const login = async (email, password) => {
  const { data } = await $host.posh('api/user/auth', { email, password });
  localStorage.setItem('token', data.accessToken);
}

export const check = async() => {
  const { data } = await $authHost.get('api/user/check');
  localStorage.setItem('token', data.accessToken);
}