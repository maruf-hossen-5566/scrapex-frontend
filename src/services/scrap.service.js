import api from "./api";

export const startScraping = (data) => {
    return api.post("/scrap", data);
};

export const stopScraping = () => {
    return api.post("/scrap/cancel", { action: "stop" });
};
