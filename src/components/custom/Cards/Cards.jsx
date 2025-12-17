import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useOutputStore from "@/stores/outputStore";
import Walmart from "./Walmart";
import Ebay from "./Ebay";
import Flipkart from "./Flipkart";

export const Cards = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full grid grid-cols-2 gap-6">
                    {data &&
                        (data?.platform === "walmart" ? (
                            <Walmart />
                        ) : data?.platform === "ebay" ? (
                            <Ebay />
                        ) : (
                            <Flipkart />
                        ))}
                </div>
            </div>
        </>
    );
};
