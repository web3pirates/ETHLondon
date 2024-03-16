import Menu from "./Menu";
import Wrapper from "./Wrapper";
import { useSharedState } from "@/utils/store";
import { SignInButton, useProfile } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import Image from "next/image";
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
       

<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="https://framenchips.s3.eu-west-1.amazonaws.com/logo.png" width={50} height={50} alt="My Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Frame n' Chips</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <SignInButton
            onSuccess={({ fid, username }) => {
              if (!fid || !username) return;
              handleSignInWithFarcaster(fid, username);
            }}
          />
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/create" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create frame</a>
      </li>
            
    </ul>
  </div>
  </div>
</nav>

      </Wrapper>
    </>
  );
}

/*
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
*/
