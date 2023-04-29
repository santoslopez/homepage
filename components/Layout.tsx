import { Nunito } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

import NavigationBar from "./NavigationBar";
import profileImage from "../public/assets/images/profile.png";

const nunito = Nunito({ subsets: ["latin"] })

function Layout({ children }) {
  return (
    <div className={`container mx-auto max-w-2xl p-3 mb-8 text-lg ${nunito.className}`}>
      <Head>
        <title>Brian Yu</title>
      </Head>
      <Image
        className="w-40 mx-auto pt-2"
        src={profileImage}
        alt="Brian Yu"
      />
      <h1 className="text-center text-4xl font-semibold py-3">
        Brian Yu
      </h1>
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
