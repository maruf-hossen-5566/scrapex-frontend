import api from "./api";

export const startScraping = (data) => {
    return api.post("/scrape", data);
};

export const fetchScrapedData = (id) => {
    return api.get(`/scrape/${id}`);
};

export const stopScraping = () => {
    return api.post("/scrape/cancel", { action: "stop" });
};
