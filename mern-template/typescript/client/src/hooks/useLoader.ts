import { Router } from "next/router";
import { useEffect, useState } from "react";

const useLoader =() =>{
    const [loading, setLoading] = useState<boolean> (false);

    useEffect (()=> {
        const start = () =>{
            console.log("start");
            setLoading(true);
        };
        const end = () =>{
            console.log("finished");
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.on("routeChangeComplete", end);
            Router.events.on("routeChangeError", end);
        };

    }, []);
    return loading
}

export default useLoader;