import React from "react";
import {Bars3Icon, SparklesIcon, UserIcon} from "@heroicons/react/20/solid";
import {Titillium_Web} from "next/font/google";
import Link from "next/link";
const headingFont=Titillium_Web({subsets: ['latin'], weight: "700"})
export default function Header(){
    return(
        <div className={"flex flex-row justify-between w-full overflow-hidden h-20 bg-gray-50 border-b-2 border-gray-200"}>
            <Link href={"/"} className={"flex mx-16 my-auto p-2 h-12 flex-row w-46"}>
                <SparklesIcon className="shrink-0 w-8 h-8 text-rose-500" />
                <h1 className={"text-3xl text-rose-500 "+headingFont.className}>Supa</h1>
                <h1 className={"text-3xl text-rose-500 "+headingFont.className}>Vacation</h1>
            </Link>
            <div className={"flex mx-16 my-auto p-2 h-14 flex-row justify-between w-64"}>
                <button className={"w-36 font-bold text-black border-2 border-transparent rounded-3xl hover:bg-gray-200 h-10"}><Link href={"/listYourHome"}>List your home</Link></button>
                <div className={"mx-2 h-10 flex flex-row justify-around w-24 border-2 border-gray-200 rounded-3xl hover:shadow-lg hover:shadow-gray-300"}>
                    <Bars3Icon className={"h-6 my-1.5 w-6 text-black"}/>
                    <UserIcon className={"w-6 my-1.5 h-6 text-white bg-pink-700 rounded-full"}/>
                </div>
            </div>
        </div>
    )
}