import { Footer } from "./Footer";
import { Nav } from "./Nav";
import React from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  const mainClass = `flex flex-col items-center bg-[#f4f7fa] text-[#4b5563] gap-6 w-full p-8`;

  return (
    <div id="layout" className={`bg-[#f4f7fa] min-h-screen w-screen `}>
      <Nav />
      <Toaster position="bottom-right" />
      <main id="main" className={mainClass}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
