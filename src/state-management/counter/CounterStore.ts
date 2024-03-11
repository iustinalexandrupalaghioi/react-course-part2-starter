import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set((state) => ({ max: state.max + 5 })),
}));
if (process.env.NODE_ENV === "development")
  mountStoreDevtool("counter tool", useCounterStore);
export default useCounterStore;
