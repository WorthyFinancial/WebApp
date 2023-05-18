import { persist } from "zustand/middleware";
const { create } = require("zustand");

export const useAuth = create(
  persist(
    (set) => ({
      user: {},
      setUser: (user) =>
        set(() => ({
          user: user,
        })),
        logout : () => {
          set(() => ({user : null}))
          localStorage.removeItem("auth");
        } 
    }),
    {
      name: "auth",
    }
  )
);
