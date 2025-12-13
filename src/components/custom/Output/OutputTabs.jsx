import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGlobalStore from "@/stores/globalStore";
import useQueryStore from "@/stores/queryStore";
import useOutputStore from "@/stores/outputStore";
import PreviewTabs from "./PreviewTabs";

const OutputTabs = () => {
    const { searchQuery } = useQueryStore();
    const isLoading = useGlobalStore((state) => state.isLoading);
    const setData = useOutputStore((state) => state.setData);
    const setIsLoading = useGlobalStore((state) => state.setIsLoading);

    const handleStop = () => {
        setIsLoading(false);
        setData(null);
    };

    return (
        <>
            <div className="w-full h-full max-w-2xl mx-auto">
                <h3 className="text-2xl font-poppins font-bold mb-12">
                    Showing <span className="text-blue-500">16</span> results
                    for <span className="text-blue-500">{searchQuery}</span>
                </h3>
                <Tabs defaultValue="card" className="h-max">
                    <TabsList className="w-full bg-accent sticky top-0 h-full z-10 px-0 py-4 mb-6 flex gap-2 border-b-2 rounded-none">
                        <TabsTrigger
                            value="card"
                            className="p-2.5 cursor-pointer hover:bg-primary/5"
                        >
                            Card
                        </TabsTrigger>
                        <TabsTrigger
                            value="json"
                            className="p-2.5 cursor-pointer hover:bg-primary/5"
                        >
                            Json
                        </TabsTrigger>
                        <TabsTrigger
                            value="csv"
                            className="p-2.5 cursor-pointer hover:bg-primary/5"
                        >
                            CSV
                        </TabsTrigger>
                        <TabsTrigger
                            value="stc"
                            className="p-2.5 cursor-pointer hover:bg-primary/5"
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
