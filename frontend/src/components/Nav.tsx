import Wrapper from "./Wrapper";
import { useSharedState } from "@/utils/store";
import { SignInButton } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Nav() {
  const [{ farcasterId }, dispatch] = useSharedState();
  const router = useRouter();

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
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://framenchips.s3.eu-west-1.amazonaws.com/logo.png"
                width={50}
                height={50}
                alt="My Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Frame n' Chips
              </span>
            </button>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <SignInButton
                onSuccess={({ fid, username }) => {
                  if (!fid || !username) return;
                  handleSignInWithFarcaster(fid, username);
                }}
              />
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      router.push("/create");
                    }}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Create frame
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}
