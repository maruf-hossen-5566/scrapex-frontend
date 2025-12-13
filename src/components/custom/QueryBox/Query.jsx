import PageCount from "@/components/custom/QueryBox/PageCount";
import PlatformSelect from "@/components/custom/QueryBox/PlatformSelect";
import QueryInput from "@/components/custom/QueryBox/QueryInput";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { checkQueryInputs } from "@/lib/utils";
import useGlobalStore from "@/stores/globalStore";
import useQueryStore from "@/stores/queryStore";
import useOutputStore from "@/stores/outputStore";
import { toast } from "sonner";
import { startScraping } from "@/services/scrap.service";

const Query = () => {
    const searchQuery = useQueryStore((state) => state.searchQuery);
    const platform = useQueryStore((state) => state.platform);
    const pageCount = useQueryStore((state) => state.pageCount);
    const reset = useQueryStore((state) => state.reset);
    const isLoading = useGlobalStore((state) => state.isLoading);
    const setIsLoading = useGlobalStore((state) => state.setIsLoading);
    const setData = useOutputStore((state) => state.setData);

    const handleQuerySubmit = async (e) => {
        e.preventDefault();
        const queryData = {
            searchQuery: searchQuery,
            platform: platform,
            pageCount: pageCount,
        };
        setIsLoading(true);

        try {
            checkQueryInputs(queryData);
        } catch (e) {
            setIsLoading(false);
            console.log("Error: ", e);
            toast.error(String(e.message));
            return;
        }

        try {
            const res = await startScraping(queryData);
            const resData = res?.data?.data || null;
            console.log("Response Data: ", resData);
            if (resData) {
                setData(resData);
                toast.success("Data scrapped successfully.");
            }
        } catch (e) {
            toast.error(
                e?.response?.data?.detail || "Failed to start scraping...",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="w-full max-w-2xl mx-auto mb-24 grid gap-8">
                <QueryInput />

                <div className="w-full flex items-center gap-8">
                    <PlatformSelect />

                    <div className="w-full flex flex-col gap-3">
                        <PageCount />
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                    <Button
                        variant="ghost"
                        className="w-max"
                        onClick={() => reset()}
                        disabled={isLoading}
                    >
                        Reset / Clear
                    </Button>
                    {isLoading ? (
                        <Button
                            type="submit"
                            className="w-max"
                            onClick={() => setIsLoading(false)}
                            variant="destructive"
                        >
                            <Spinner />
                            Stop Scraping
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            className="w-max"
                            onClick={(e) => handleQuerySubmit(e)}
                        >
                            Start Scraping
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Query;
