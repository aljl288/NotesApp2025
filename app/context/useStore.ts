import { create } from "zustand";

interface Store {
  userList: string[];
  addUser: (user: string) => void;
  setUserList: (list: string[]) => void;
}

export const useStore = create<Store>((set) => ({
  userList: [],
  addUser: (user) => set((state) => ({ userList: [...state.userList, user] })),
  setUserList: (list) => set({ userList: list }),
}));
