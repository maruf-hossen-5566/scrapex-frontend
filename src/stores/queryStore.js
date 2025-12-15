import { create } from "zustand";

const initialStore = {
    searchQuery: "Samsung s24 ultra",
    platform: "walmart",
    pageCount: 1,
};

const useQueryStore = create((set) => ({
    ...initialStore,
    setSearchQuery: (value) => set({ searchQuery: value }),
    setPlatform: (value) => set({ platform: value }),
    setPageCount: (value) => set({ pageCount: value }),
    reset: () => set(() => initialStore),
}));

export default useQueryStore;
