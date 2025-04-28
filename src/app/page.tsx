"use client";
import Loader from "@/components/loader";
import ReceiptSearcher from "@/controller/reciptSearcher";
import { useState } from "react";

export default function Home() {
    const [fetchState, setFetchState] = useState<any>({});
    const { getReceipt } = ReceiptSearcher(setFetchState);

    const handleClick = async () => {
        setFetchState({
            loading: true,
        });
        getReceipt();
    };

    return (
        <div className=" flex justify-center flex-col h-screen items-center">
            <button
                onClick={handleClick}
                className="border mb-5 border-white p-2 rounded-md hover:scale-90 transition-all duration-500"
            >
                clique aqui
            </button>
            <div
                className={`${
                    fetchState.loading ? "w-32" : "w-0 overflow-hidden"
                } transition-all duration-500`}
            >
                <Loader />
            </div>
            <div
                className={`${
                    fetchState.data ? "w-64" : "w-0 overflow-hidden"
                } transition-all duration-500 text-center`}
            >
                {fetchState.data}
            </div>
        </div>
    );
}
