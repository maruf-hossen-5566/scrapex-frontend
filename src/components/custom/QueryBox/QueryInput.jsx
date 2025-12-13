import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useQueryStore from "@/stores/queryStore";
import useGlobalStore from "@/stores/globalStore";

const QueryInput = () => {
    const { searchQuery, setSearchQuery } = useQueryStore();
    const isLoading = useGlobalStore((state) => state.isLoading);

    return (
        <>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor="search_query">Search Query</Label>
                <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    id="search_query"
                    placeholder="e.g. Laptop, Camera, Monitor"
                    disabled={isLoading}
                />
            </div>
        </>
    );
};

export default QueryInput;
