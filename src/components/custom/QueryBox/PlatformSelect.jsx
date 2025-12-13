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
                <Label htmlFor="platform">Platform</Label>
                <Select
                    value={platform}
                    onValueChange={(value) => setPlatform(value)}
                    disabled={isLoading}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Platforms</SelectLabel>
                            <SelectItem value="walmart">Walmart</SelectItem>
                            <SelectItem value="Flipkart">Flipkart</SelectItem>
                            <SelectItem value="eBay">eBay</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
};

export default PlatformSelect;
