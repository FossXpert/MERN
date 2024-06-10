import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function ({Component, pageProps} : AppProps){
    
    return <Component {...pageProps} />
}