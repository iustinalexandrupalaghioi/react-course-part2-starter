import { create } from "zustand";

interface UserStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<UserStore>((set) => ({
  user: "",
  login: (user) => set(() => ({ user: user })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
