import { useEffect, useMemo, useRef } from "react";

export default function ReceiptSearcher(updateState: any) {
    const workerRef = useRef<Worker>(null);

    async function getReceipt() {
        try {
            workerRef.current?.postMessage(5);
        } catch {
            console.log("falhou");
        }
    }

    useEffect(() => {
        workerRef.current = new Worker(
            new URL("./web-worker.ts", import.meta.url)
        );
        workerRef.current.onmessage = (event: MessageEvent<number>) => {
            updateState({
                data: event.data,
            });
        };
        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    return { getReceipt };
}
