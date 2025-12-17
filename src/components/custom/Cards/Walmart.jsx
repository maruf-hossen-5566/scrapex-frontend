import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useOutputStore from "@/stores/outputStore";
import { Button, buttonVariants } from "@/components/ui/button";
import { Star } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const Walmart = () => {
    const data = useOutputStore((state) => state.data);

    return (
        <>
            {data &&
                data?.items?.map((item) => (
                    <Card
                        key={uuidv4()}
                        className="rounded-md pt-0 bg-accent dark:bg-background gap-4"
                    >
                        <CardHeader className="px-0 rounded-t-md overflow-hidden!">
                            <div className="max-h-44 h-full py-6 border-b border-input bg-white ">
                                <img
                                    src={item?.imageInfo?.thumbnailUrl}
                                    alt={item?.name}
                                    className="h-full w-full object-center object-scale-down"
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2 line-clamp-2 leading-normal capitalize">
                                {item?.priceInfo?.linePrice ||
                                    (item?.priceInfo?.linePriceDisplay &&
                                        item?.priceInfo?.linePriceDisplay?.split(
                                            " ",
                                        )[
                                            item?.priceInfo?.linePriceDisplay?.split(
                                                " ",
                                            ).length - 1
                                        ]) ||
                                    item?.price}
                            </CardTitle>
                            <CardDescription className="line-clamp-3">
                                {item?.name}
                            </CardDescription>
                            <CardDescription className="line-clamp-3 mt-3 flex items-center gap-1">
                                {Array.from(
                                    { length: item?.rating?.averageRating },
                                    () => (
                                        <span key={uuidv4()}>
                                            <Star
                                                size={14}
                                                stroke="yellow"
                                                fill="yellow"
                                            />
                                        </span>
                                    ),
                                )}
                                {item?.rating?.numberOfReviews > 0 && (
                                    <span className="text-xs">
                                        ({item?.rating?.numberOfReviews} rating
                                        {item?.rating?.numberOfReviews > 1 &&
                                            "s"}
                                        )
                                    </span>
                                )}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="mt-auto pt-2">
                            <a
                                // className="w-full"
                                href={`https://walmart.com${item?.url}`}
                                target="_blank"
                                className={
                                    buttonVariants({
                                        variant: "outline",
                                        size: "sm",
                                    }) + " w-full"
                                }
                            >
                                Go to product page
                            </a>
                        </CardFooter>
                    </Card>
                ))}
        </>
    );
};

export default Walmart;
