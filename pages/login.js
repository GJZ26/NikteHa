import Head from "next/head.js";
import Form from "../components/Atoms/Form.js";
import PhotoLogin from "@/components/Atoms/PhotoLogin.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikte Ha! | Login</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="w-full h-screen flex items-center">
        <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
          <Form/>
        </div>
        <div className="relative w-1/2 h-full sm:flex flex-col hidden">
          <PhotoLogin/>
        </div>
      </div>
    </>
  );
}
