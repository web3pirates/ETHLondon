import styles from "../styles/styles.module.css";
import { useSharedState } from "@/utils/store";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #dee2e6;
`;

export function Nav() {
  const [{ user }] = useSharedState();

  return (
    <Wrapper>
      <Menu>
        <Title>
          <Link href="/">Home</Link>
        </Title>
      </Menu>
      <div style={{ display: "flex", gap: "10px" }}>
        {user && (
          <button
            className={styles.connectButton}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img
              src="/images/github.png"
              alt={`Github image`}
              width={15}
              height={15}
            />
            {user.login}
          </button>
        )}
      </div>
    </Wrapper>
  );
}
