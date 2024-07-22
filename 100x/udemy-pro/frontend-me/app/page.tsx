'use client'
import Image from "next/image";
import Page from "./main/Page";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
    
      <Page/>
      <Toaster position="top-center" reverseOrder={false}/>
    </>
  );
}
