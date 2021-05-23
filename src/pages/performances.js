import Head from "next/head";
import Header from "../components/Header";
import Image from 'next/image'

function performances() {
    return (
        <div className=" bg-amazon_blue-light bg-cover overflow-hidden h-screen">
            <Head>
            <title>performances</title>
            </Head>
            <Header/>
            <div className=" flex flex-grow items-center justify-center pt-20">
            <Image
            src="/img/left.jpg"
            alt="center-image"
            width={500}
            height={500}
            objectFit="contain"
            className="cursor-pointer shadow"
            />
        <Image
       src="/img/center.jpg"
       alt="center-image"
       width={500}
       height={500}
       objectFit="contain"
       className="cursor-pointer shadow"
       />
        <Image
       src="/img/right.jpg"
       alt="center-image"
       width={500}
       height={500}
       objectFit="contain"
       className="cursor-pointer shadow"
       />
    </div>
        </div>
    )
}

export default performances
