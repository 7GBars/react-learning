import {useEffect} from "react";


export const useLogger = (componentName: string, count: number) => {

    useEffect(() => {
        console.log(`${count} in ${componentName}`);
        count++
    })
}