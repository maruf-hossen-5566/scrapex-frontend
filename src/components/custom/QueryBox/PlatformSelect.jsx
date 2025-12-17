import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectValue,
    SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import useQueryStore from "@/stores/queryStore";
import useGlobalStore from "@/stores/globalStore";

const PlatformSelect = () => {
    const { platform, setPlatform } = useQueryStore();
    const isLoading = useGlobalStore((state) => state.isLoading);

    return (
        <>
            <div className="w-full flex flex-col gap-3">
                <Label
                    htmlFor="platform"
                    className="flex items-center justify-between gap-2"
                >
                    <span>Platform</span>
                    <span className="text-xs text-blue-500">Can't change</span>
                </Label>
                <Select
                    value={platform}
                    onValueChange={(value) => setPlatform(value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Platform</SelectLabel>
                            <SelectItem value="walmart">Walmart</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
};

export default PlatformSelect;
