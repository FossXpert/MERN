'use client'
import Image from "next/image";
import Header from "./components/Header";
import Page from "./profile/Page";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
    <Provider store={store}>
      <Page/>
      <Toaster position="top-center" reverseOrder={false}/>
    </Provider>
    </>
  );
}
