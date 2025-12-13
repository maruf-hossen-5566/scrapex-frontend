import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
    persist(
        (set) => ({
            isDarkMode: false,
            isLoading: false,
            setIsDarkMode: (value) => set({ isDarkMode: value }),
            setIsLoading: (value) => set({ isLoading: value }),
        }),
        {
            name: "global-storage",
        },
    ),
);

export default useGlobalStore;
