'use client'
import MapFromHouse from "@/components/MapFromHouse";

export default function ListYourHome(){
    const secret:string | undefined=process.env["MAP_SECRET"]
    return(
        <div className={"flex flex-row bg-white w-full max-h-screen justify-around"}>
            <div className={"w-1/3 my-12 flex flex-col justify-around border-2 border-gray-400 h-fit rounded-xl"}>
                <div className={"w-full p-8 h-fit"}>
                    <h1 className={"w-80 my-4 text-2xl text-black font-bold"}>List your Home</h1>
                    <form>
                        <input placeholder={"Title"} type={"text"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 rounded-t-xl w-full h-14"}/>
                        <input placeholder={"Price"} type={"text"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 border-t-0 w-full h-14"}/>
                        <input placeholder={"Guests"} type={"text"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 border-t-0 w-full h-14"}/>
                        <input placeholder={"Beds"} type={"text"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 border-t-0 w-full h-14"}/>
                        <input placeholder={"Baths"} type={"text"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 border-t-0 w-full h-14"}/>
                        <textarea placeholder={"Description"} rows={3} className={"font-mono max-h-28 line-clamp-3 border-2 text-black focus:outline-none p-4 border-t-0 border-gray-400 rounded-b-xl w-full h-24"}/>
                        <button className={"border-2 border-t-0 bg-rose-500 font-medium text-lg my-3 text-white rounded-lg w-full h-12"} type={"submit"}>Add Home</button>
                    </form>
                </div>
            </div>
            <MapFromHouse/>
        </div>
    )
}