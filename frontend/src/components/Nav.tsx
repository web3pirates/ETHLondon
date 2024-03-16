import Menu from "./Menu";
import Wrapper from "./Wrapper";
import { useSharedState } from "@/utils/store";
import { SignInButton, useProfile } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Nav() {
  const [{ farcasterId }, dispatch] = useSharedState();

  const handleSignInWithFarcaster = async (fid: number, username: string) => {
    if (farcasterId) return;

    dispatch({
      type: "LOGIN",
      payload: {
        isLoggedIn: true,
        farcasterId: fid,
        farcasterHandle: username,
      },
    });
    toast("Logged in with farcaster ✅");
  };

  return (
    <>
      <Wrapper>
        <Menu />
        <div className="absolute right-0 top-3 p-5">
          <SignInButton
            onSuccess={({ fid, username }) => {
              if (!fid || !username) return;
              handleSignInWithFarcaster(fid, username);
            }}
          />
        </div>
        <ToastContainer />
      </Wrapper>
    </>
  );
}
