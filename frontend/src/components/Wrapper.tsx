import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Wrapper(props: Props) {
  const { children, style } = props;
  const WrapperClass = `w-95 flex justify-between items-center gap-6 p-5 fixed left-0 right-0 mx-auto`;

  return (
    <div className={WrapperClass} style={style}>
      {children}
    </div>
  );
}
