import Head from "next/head";
import Header from "../components/Header";

function classes() {
    return (
        <div className=" bg-hero-class bg-cover overflow-hidden h-screen">
            <Head>
            <title>classes</title>
            </Head>
            <Header/>
            <div className="flex flex-grow flex-col p-5 xl:px-24 md:grid-cols-2">
            <div className="textBlock-wrapper pl-20 mt-48">
            <h1 className="textBlock-title">
            <span className="text-7xl font-bold pl-5">Find a Class or </span>
            </h1>
            <h1 className="textBlock-title text-7xl font-bold pl-5">
            <span>Program</span>
            </h1>
            </div>
            <div className="flex pt-10">
                <div className="rounded-md">
                  <a
                    href="/"
                    className="w-full flex items-center ml-24 justify-center border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                   Join Now
                  </a>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default classes
