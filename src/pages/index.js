import Head from "next/head";
import Image from 'next/image'
import { useRouter } from "next/router";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from "../components/Header";
export default function Home() {
  const { push } = useRouter();
  return (
    <div className=" bg-hero-pattern bg-cover overflow-hidden h-screen">
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"/> 
        <title>TIA MORGAN</title>
      </Head>
      <Header/>
      <div className="flex flex-grow  p-5 xl:px-24 md:grid-cols-2">
      <div className="flex flex-col items-center pt-96 mt-36 pl-20">
      <InstagramIcon fontSize="large"  className="mb-5 cursor-pointer"/>
      <FacebookIcon fontSize="large"  className="mb-5 cursor-pointer"/>
      <TwitterIcon fontSize="large"  className="cursor-pointer"/>
      </div>
      <div className="textBlock-wrapper pl-96  mt-56 font-merienda">
        <h1 className="textBlock-title">
          <span className="text-9xl pl-24">Passion</span>
        </h1>
        <h1 className="textBlock-title text-9xl pl-24">
          <span>& Desire</span>
        </h1>
      </div>
      <div className=" flex flex-col mt-96 pt-60 pl-40">
      <button
          onClick={() => push("/classes")}
          className="w-32 text-2xl font-medium tracking-wider text-black focus:outline-none md:w-48 bg-yellow"
        >
          See more
        </button>
       <Image
       src="/img/Arrow.svg"
       alt="Arrow"
       width={100}
       height={25}
       objectFit="contain"
       className="cursor-pointer"
       />
      </div>
      </div>
    </div>
  );
}
