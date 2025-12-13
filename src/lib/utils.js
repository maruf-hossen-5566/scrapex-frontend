import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const checkQueryInputs = (data) => {
    const query = data["searchQuery"];
    const platform = data["platform"];
    const pageCount = data["pageCount"];

    if (!query || String(query).trim() == "") {
        throw new Error("Search query must be given.");
    }

    if (!platform || String(platform).trim() == "") {
        throw new Error("Platform name must be given.");
    }

    if (!pageCount || pageCount > 5) {
        throw new Error("Page count should not exceed 5");
    } else if (!pageCount || pageCount < 1) {
        throw new Error("Page count must be at least 1");
    }
    return false;
};
