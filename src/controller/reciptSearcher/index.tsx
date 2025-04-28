import { useEffect, useMemo } from "react";

export default function ReceiptSearcher(updateState: any) {
    const worker: Worker = useMemo(
        () => new Worker(new URL("./web-worker.ts", import.meta.url)),
        []
    );
    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

    async function getReceipt() {
        try {
            worker.postMessage(5);
        } catch {
            console.log("falhou");
        }
    }

    // const searchAgain = async (n: number) => {
    //     const response = await fetch(
    //         "https://www.themealdb.com/api/json/v1/1/random.php"
    //     );
    //     const output = await response.json();
    //     console.log(output.meals[0]);
    //     if (n > 1) {
    //         await delay(1000);
    //         return searchAgain(n - 1);
    //     }
    //     return output.meals[0].strMeal;
    // };

    useEffect(() => {
        worker.onmessage = function (event) {
            console.log("data return ->", event.data);
            updateState({
                data: event.data,
            });
        };
    });

    return { getReceipt };
}
