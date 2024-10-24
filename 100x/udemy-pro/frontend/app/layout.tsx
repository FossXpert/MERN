'use client'
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utills/theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { useLoadUserQuery } from "../redux/features/api/apiSlice";
import Loader from './components/Loader/Loader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins',
});
const Josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Josefin',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${Josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {/* I AM DOING IT BECAUSE AFTER RELOADING THE PROFILE PIC IS COMING, TO FIX THAT ISSUE (VIDEO : 2:55:45) */}
              <Custom>{children}</Custom> 
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom : FC<{children: ReactNode}> = ({children}) =>{

  const {isLoading} = useLoadUserQuery({});

  return (
    <>
    {
      isLoading ? <Loader/> : <> {children}</>
    }
    </>
  )
}
