import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import useOutputStore from "@/stores/outputStore";

const OutputHeader = () => {
    const clearOutputStore = useOutputStore((state) => state.clearOutputStore);
    const data = useOutputStore((state) => state.data);

    const handleClearOutput = () => {
        clearOutputStore();
    };

    return (
        <>
            <div className="w-full shrink-0 h-24 px-6 md:px-10 border-">
                <div className="w-full h-full max-w-2xl mx-auto flex items-center justify-between gap-6">
                    {data && data?.items?.length > 0 ? (
                        <h3 className="py-6 text-2xl font-bold font-poppins">
                            <span className="ml-2 text-blue-500">
                                {data?.items?.length || 0}
                            </span>{" "}
                            results found
                        </h3>
                    ) : (
                        <h3 className="py-6 text-2xl font-bold font-poppins">
                            Output
                        </h3>
                    )}
                    {data && data?.items?.length > 0 && (
                        <Button
                            variant="ghost"
                            onClick={() => handleClearOutput()}
                            className="text-red-500 hover:text-white! hover:bg-red-500! rounded-full"
                        >
                            <>
                                <Trash2 />
                                Clear output
                            </>
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default OutputHeader;
