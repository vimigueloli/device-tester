import { useEffect, useState } from "react";

export default function Loader() {
    const [loading, setloading] = useState<number>(0);
    const dots = Array.from(Array(loading));

    useEffect(() => {
        setTimeout(() => {
            if (loading > 3) {
                setloading(1);
            } else {
                setloading(loading + 1);
            }
        }, 300);
    }, [loading]);

    return (
        <div className="flex w-32 translate-x-4">
            <div className="mr-2">carregando </div>
            {dots.map((item, idx) => (
                <div key={idx}>.</div>
            ))}
        </div>
    );
}
