import api from "../axiosInstance";

export const Signup = async ({ firstName, lastName, email, password }) => {
  return await api.post("/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
};
export const signin = async ({ email, password }) => {
  return await api.post("/auth/signin", {
    email,
    password,
  });
};
