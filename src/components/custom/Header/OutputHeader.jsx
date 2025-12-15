import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import useOutputStore from "@/stores/outputStore";

const OutputHeader = () => {
    const clearOutputStore = useOutputStore((state) => state.clearOutputStore);

    const handleClearOutput = () => {
        clearOutputStore();
    };

    return (
        <>
            <div className="w-full shrink-0 h-24 px-6 md:px-10 border-">
                <div className="w-full h-full max-w-2xl mx-auto flex items-center lg:justify-end gap-6">
                    <Button
                        variant="outline"
                        onClick={() => handleClearOutput()}
                        className="text-red-500 rounded-full"
                    >
                        <>
                            <Trash2 />
                            Clear output
                        </>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default OutputHeader;
