//changes 1.12, protect home page
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  //on the client side, different from serverAuth
  // 1.14

  const session = await getSession(context);

  // check if available session exists, if doesn't, it will redirect to /auth
  // if we click logout, we will redirect to /auth
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-5xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as: {user?.email}</p>
      <button className="h-10 w-full bg-white " onClick={() => signOut()}>
        Logout!
      </button>
    </>
  );
}
