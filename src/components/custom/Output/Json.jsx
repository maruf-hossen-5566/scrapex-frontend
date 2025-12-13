import useOutputStore from "@/stores/outputStore";
import { JsonView, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export const Json = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            <div className="w-full rounded-md p-4 bg-primary/5 border">
                <JsonView data={data?.slice(0, 10)} style={darkStyles} />
            </div>
        </>
    );
};
