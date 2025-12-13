import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQueryStore from "@/stores/queryStore";
import useGlobalStore from "@/stores/globalStore";

const PageCount = () => {
    const { pageCount, setPageCount } = useQueryStore();
    const isLoading = useGlobalStore((state) => state.isLoading);

    const handlePageCountChange = (type) => {
        if (type === "+" && pageCount < 5) {
            setPageCount(pageCount + 1);
        } else if (type === "-" && pageCount > 1) {
            setPageCount(pageCount - 1);
        }
    };

    return (
        <>
            <div className="w-full flex items-center justify-between gap-3">
                <div className="w-full flex flex-col gap-3">
                    <Label
                        htmlFor="platform"
                        className="flex items-center justify-between gap-2"
                    >
                        <span>Pages</span>
                        <span className="text-xs text-blue-500">
                            Max 5 pages
                        </span>
                    </Label>
                    <div className="w-full flex items-center">
                        <Button
                            variant="outline"
                            className="w-max rounded-none rounded-l-md text-xl"
                            onClick={() => handlePageCountChange("-")}
                            disabled={isLoading}
                        >
                            -
                        </Button>
                        <Input
                            value={pageCount}
                            max={5}
                            min={1}
                            onChange={() => console.log("Hello there 😊")}
                            className="w-max flex-1 rounded-none"
                            disabled={isLoading}
                        />
                        <Button
                            variant="outline"
                            className="w-max rounded-none rounded-r-md text-xl"
                            onClick={() => handlePageCountChange("+")}
                            disabled={isLoading}
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageCount;
