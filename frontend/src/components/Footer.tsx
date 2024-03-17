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
  color: #ffcc33;
  font-weight: 600;
  transition: color 0.15s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffcc33;
    }
  }
`;

export function Footer() {
  return (
    <Wrapper
      style={{
        bottom: 0,
        backgroundColor: "#002970",
      }}
    >
      <Links>
        <Link href="https://github.com/Clislabs" target="_blank">
          Clislabs
        </Link>
        <Link href="https://github.com/Knos01" target="_blank">
          Knos01
        </Link>
        <Link href="https://github.com/MicheleSottocasa" target="_blank">
          MicheleSottocasa
        </Link>
        <Link href="https://github.com/Riksa011" target="_blank">
          Riksa011
        </Link>
        <Link href="https://github.com/SBfin" target="_blank">
          SBfin
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
