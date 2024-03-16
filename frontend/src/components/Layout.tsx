import { Footer } from "./Footer";
import { Nav } from "./Nav";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  const mainClass = `flex flex-col items-center justify-between bg-[#f4f7fa] text-[#4b5563] gap-6 w-full min-h-screen p-8`;

  return (
    <div
      id="layout"
      className={`bg-[#f4f7fa] min-h-screen w-screen overflow-x-scroll`}
    >
      <Nav />
      <main id="main" className={mainClass}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
