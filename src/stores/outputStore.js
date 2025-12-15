import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialStore = {
    data: null,
    pendingJobId: null,
};

const useOutputStore = create(
    persist(
        (set) => ({
            ...initialStore,
            setPendingJobId: (value) => set({ pendingJobId: value }),
            setData: (value) => set({ data: value }),
            clearOutputStore: () => set(() => initialStore),
        }),
        {
            name: "output-storage",
        },
    ),
);

export default useOutputStore;
