import Head from "next/head.js";
import FormRegister from "@/components/Atoms/FormRegister.js";
import PhotoRegister from "@/components/Atoms/PhotoRegister.js";

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
        <div className="relative w-1/2 h-full sm:flex flex-col hidden">
            <PhotoRegister/>
        </div>
        <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
          <FormRegister/>
        </div>
      </div>
    </>
  );
}
