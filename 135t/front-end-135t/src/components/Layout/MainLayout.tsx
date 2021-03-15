import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

type Props = {
  children: ReactNode;
};

export default function MainLayout(props: Props) {
  return (
    <>
      <Header/>

      <Nav />

      {props.children}

      <Footer />
    </>
  );
}
