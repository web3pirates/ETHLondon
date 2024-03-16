import Menu from "./Menu";
import Wrapper from "./Wrapper";
import { handleSignInWithFarcaster } from "@/utils/signInWithFarcaster";
import { SignInButton } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";

export function Nav() {
  return (
    <>
      <Wrapper>
        <Menu />
        <div className="absolute right-0 top-3 p-5">
          <SignInButton
            onSuccess={async ({ fid, username }) => {
              if (!fid || !username) return;
              await handleSignInWithFarcaster(fid, username);
            }}
          />
        </div>
      </Wrapper>
    </>
  );
}
