import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGlobalStore from "@/stores/globalStore";
import useOutputStore from "@/stores/outputStore";
import useQueryStore from "@/stores/queryStore";
import { useEffect } from "react";
import { toast } from "sonner";
import PreviewTabs from "./PreviewTabs";
import { getScrapedData } from "@/services/scrape.service.js";

const OutputTabs = () => {
    const { searchQuery } = useQueryStore();
    const isLoading = useGlobalStore((state) => state.isLoading);
    const setData = useOutputStore((state) => state.setData);
    const data = useOutputStore((state) => state.data);
    const pendingJobId = useOutputStore((state) => state.pendingJobId);
    const setPendingJobId = useOutputStore((state) => state.setPendingJobId);
    const clearOutputStore = useOutputStore((state) => state.clearOutputStore);
    const setIsLoading = useGlobalStore((state) => state.setIsLoading);

    const fetchScrapedData = async () => {
        if (pendingJobId === null) return;

        try {
            const res = await getScrapedData(pendingJobId);
            const resData = res?.data || null;
            if (!resData) {
                toast.error("No response data found.");
                return;
            }

            if (resData?.data?.status === "failed") {
                const em =
                    resData?.data?.error || "Failed to get scraped data.";
                toast.error(String(em));
                setPendingJobId(null);
                console.log("in if failed: ", em);
                setIsLoading(false);
                return;
            }

            if (resData?.data?.status === "finished") {
                const m = resData?.detail || "Data fetched successfully.";
                toast.success(String(m));
                setPendingJobId(null);
                setData(resData?.data?.data || null);
                console.log("in if finished: ", m);
                setIsLoading(false);
                return;
            }

            if (resData?.data?.status === "running") {
                const m = "Scraping is in progress.";
                toast.success(String(m));
                console.log("in if running: ", m);
                return;
            }
        } catch (e) {
            setPendingJobId(null);
            setIsLoading(false);
            console.log("Failed to getting scraped data: \n", e);
            toast.error(
                String(e) ||
                    String(
                        String(e?.response?.data?.detail) ||
                            "Failed to getting scraped data.",
                    ),
            );
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchScrapedData();

            // if (pendingJobId === null) {
            // }
        }, 4000);

        return () => clearInterval(intervalId);
    }, [pendingJobId]);

    return (
        <>
            <div className="w-full h-full max-w-2xl mx-auto">
                {/* <h3 className="text-2xl font-poppins font-bold mb-12">
                    Showing{" "}
                    <span className="text-blue-500">
                        {data?.items?.length || 0}
                    </span>{" "}
                    results for{" "}
                    <span className="text-blue-500">{searchQuery}</span>
                </h3>*/}
                <Tabs defaultValue="card" className="h-max">
                    <TabsList className="w-full bg-accent sticky top-0 h-full z-10 px-0 py-4 mb-6 flex gap-2 border-b-2 rounded-none">
                        <TabsTrigger
                            value="card"
                            className="p-2.5 cursor-pointer hover:bg-primary/15 rounded-full"
                        >
                            Card
                        </TabsTrigger>
                        <TabsTrigger
                            value="json"
                            className="p-2.5 cursor-pointer hover:bg-primary/15 rounded-full"
                        >
                            Json
                        </TabsTrigger>
                        <TabsTrigger
                            value="csv"
                            className="p-2.5 cursor-pointer hover:bg-primary/15 rounded-full"
                        >
                            CSV
                        </TabsTrigger>
                        <TabsTrigger
                            value="stc"
                            className="p-2.5 cursor-pointer hover:bg-primary/15 rounded-full"
                        >
                            Plain Text
                        </TabsTrigger>
                    </TabsList>

                    <div className="w-full min-h-96 flex items-center justify-center">
                        {isLoading ? (
                            <div className="text-center flex flex-col items-center justify-center">
                                <Spinner className="size-8 self-center" />
                                <span className="font-medium mt-4">
                                    Scraping in progress…
                                </span>
                                <span className="text-sm mt-2">
                                    This may take a few moments depending on the
                                    source and data size. Please hang tight —
                                    we’re fetching the results for you.
                                </span>
                            </div>
                        ) : (
                            <PreviewTabs />
                        )}
                    </div>
                </Tabs>
            </div>
        </>
    );
};

export default OutputTabs;
