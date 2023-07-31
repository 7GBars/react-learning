import {useEffect, useState} from "react";

export const useUserStatus = () => {
    const [status, setStatus] = useState(false);

    useEffect(() =>  {
        const intervalId = setInterval(() => {
            setStatus(Math.random() < 0.5);
        }, 6000)
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return status;
}