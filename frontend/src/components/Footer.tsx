import Wrapper from "./Wrapper";
import { GithubIcon } from "@/assets/icons";
import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  transition: color 0.15s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export function Footer() {
  return (
    <Wrapper style={{ marginBottom: 0 }}>
      <Links>
        <Link href="#" target="_blank">
          Carlo
        </Link>
        <Link href="#" target="_blank">
          Christian
        </Link>
        <Link href="#" target="_blank">
          Michele
        </Link>
        <Link href="#" target="_blank">
          Riccardo
        </Link>
        <Link href="#" target="_blank">
          Silvio
        </Link>
      </Links>

      <Links>
        <Link href="https://github.com/web3pirates/ETHLondon" target="_blank">
          <GithubIcon />
        </Link>
      </Links>
    </Wrapper>
  );
}
