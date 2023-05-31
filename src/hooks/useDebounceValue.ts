import {useEffect, useState} from "react";

const DEBOUNCE_TIME = 350;

export default function useDebounceValue(value: any, debounceTime = DEBOUNCE_TIME) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, debounceTime)

        if( value === "" ) {
            clearTimeout(timeout);
            setDebouncedValue("");
        }

        return () => {
            clearTimeout(timeout);
        }

    }, [value]);

    return debouncedValue;
}
