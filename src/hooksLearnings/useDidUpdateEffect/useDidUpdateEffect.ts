import {useEffect, useRef} from "react";

export function useDidUpdateEffect(data: any, deps: any[]) {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            console.log(data)
        }
        didMountRef.current = true;
    }, deps)
}