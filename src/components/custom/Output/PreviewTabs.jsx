import { Cards } from "@/components/custom/Output/Cards.jsx";
import { Csv } from "@/components/custom/Output/Csv";
import { Json } from "@/components/custom/Output/Json";
import { Stc } from "@/components/custom/Output/Stc";
import { TabsContent } from "@/components/ui/tabs";
import useOutputStore from "@/stores/outputStore";
import { CircleAlert } from "lucide-react";

function PreviewTabs() {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            {!data ? (
                <div className="min-h-96 w-full p-6 text-center flex flex-col items-center justify-center">
                    <CircleAlert />
                    <span className="font-medium mt-4">No results found</span>
                    <span className="text-sm mt-2">
                        There is currently no data available to show, so please
                        submit a request to fetch and display results.
                    </span>
                </div>
            ) : (
                <>
                    <TabsContent
                        value="card"
                        className="w-full flex gap-2 pb-6"
                    >
                        <Cards />
                    </TabsContent>
                    <TabsContent
                        value="json"
                        className="w-full h-full bg-transparent p-0 flex gap-2 mb-6 overflow-auto"
                    >
                        <Json />
                    </TabsContent>
                    <TabsContent
                        value="csv"
                        className="w-full h-auto! bg-transparent p-0 flex gap-2 mb-6"
                    >
                        <Csv />
                    </TabsContent>
                    <TabsContent
                        value="stc"
                        className="w-full h-auto! bg-transparent p-0 flex gap-2 mb-6"
                    >
                        <Stc />
                    </TabsContent>
                </>
            )}
        </>
    );
}

export default PreviewTabs;
