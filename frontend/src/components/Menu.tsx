import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export default function Menu() {
  const MenuClass = `flex justify-start items-center gap-8 py-4 mb-8 border-b border-gray-300`;

  return (
    <div className={MenuClass}>
      <Title>
        <Link href="/">Home</Link>
      </Title>
      <Title>
        <Link href="/create">Create frame</Link>
      </Title>
    </div>
  );
}
