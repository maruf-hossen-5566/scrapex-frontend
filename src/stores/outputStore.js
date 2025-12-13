import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOutputStore = create(
    persist(
        (set) => ({
            data: null,
            setData: (data) => set({ data: data }),
            clearData: () => set({ data: [] }),
        }),
        {
            name: "output-storage",
        },
    ),
);

export default useOutputStore;
