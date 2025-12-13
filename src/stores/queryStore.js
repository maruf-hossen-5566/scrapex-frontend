import { create } from "zustand";

const initialStore = {
    searchQuery: "",
    platform: "",
    pageCount: 1,
};

const useQueryStore = create((set) => ({
    ...initialStore,
    setSearchQuery: (value) => set({ initialStore, ["searchQuery"]: value }),
    setPlatform: (value) => set({ initialStore, ["platform"]: value }),
    setPageCount: (value) => set({ initialStore, ["pageCount"]: value }),
    reset: () => set(initialStore),
}));

export default useQueryStore;
