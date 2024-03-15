import { Footer } from "./Footer";
import { Nav } from "./Nav";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div
      id="layout"
      className={`bg-[#f4f7fa] min-h-screen w-screen overflow-x-scroll`}
    >
      <Nav />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f7fa",
          color: "#4b5563",
          gap: "3rem",
          width: "100%",
          padding: "2rem",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      <br />
      <Footer />
    </div>
  );
}
