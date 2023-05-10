import api from "./axiosInstance";

export const addToWaitlist = async ({ email, referralCode }) => {
  return await api.post("/waitlist", {
    email,referralCode
  });
};