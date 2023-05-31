import {useEffect, useRef} from "react";


export default function useOnMount(callback: () => void) {
    const flag = useRef(false);

    useEffect(() => {
        if( !flag.current ) {
            callback();
            flag.current = true;
        }
    },[]);
}
