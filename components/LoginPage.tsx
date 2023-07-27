import {SparklesIcon} from "@heroicons/react/20/solid";
import {Titillium_Web} from "next/font/google";
const headingFont=Titillium_Web({subsets: ['latin'], weight: "700"})

export default function LoginPage(){
    return(
        <div className={"w-1/3 flex flex-col justify-around border-2 border-gray-400 h-fit rounded-xl"}>
            <div className={"w-full h-10 flex flex-col justify-between"}>
                <h1 className={"w-32 my-4 text-black mx-auto font-bold"}>
                    Login or sign up
                </h1>
                <hr/>
            </div>
            <div className={"w-full p-8 h-fit"}>
                <h1 className={"w-80 my-4 text-2xl text-black font-bold"}>Welcome To SupaVacation</h1>
                <form>
                    <input placeholder={"Email"} type={"email"} className={"font-mono border-2 text-black focus:outline-none p-4 border-gray-400 rounded-t-xl w-full h-14"}/>
                    <input placeholder={"Password"} type={"password"} className={"font-mono border-2 text-black focus:outline-none p-4 border-t-0 border-gray-400 rounded-b-xl w-full h-14"}/>
                    <button className={"border-2 border-t-0 bg-rose-500 font-medium text-lg my-8 text-white rounded-lg w-full h-12"} type={"submit"}>Login</button>
                </form>
                <div className={"w-full flex flex-row"}>
                    <hr className={"w-1/2 my-3"}/>
                    <span className={"font-bold text-sm text-gray-500 mx-4"}>or</span>
                    <hr className={"w-1/2 my-3"}/>
                </div>
                <div className={"w-full my-2 font-bold flex flex-row h-10 border-2 border-gray-500 rounded-lg"}>
                    <img src={"./facebook.png"} className={"mx-10 align-middle self-start w-10 h-10"} alt={"FacebookIcon"}/>
                    <h1 className={"mx-10  self-center my-2 text-black"}>Continue with Facebook</h1>
                </div>
                <div className={"w-full my-2 font-bold flex flex-row h-10 border-2 border-gray-500 rounded-lg"}>
                    <img src={"./twitter.png"} className={"mx-10 align-middle self-start w-10 h-10"} alt={"TwitterIcon"}/>
                    <h1 className={"mx-10 self-center my-2 text-black"}>Continue with Twitter</h1>
                </div>
                <div className={"w-full my-2 font-bold flex flex-row h-10 border-2 border-gray-500 rounded-lg"}>
                    <img src={"./github.png"} className={"mx-10 align-middle self-start w-10 h-10"} alt={"GithubIcon"}/>
                    <h1 className={"mx-10 self-center my-2 text-black"}>Continue with Github</h1>
                </div>
            </div>
        </div>
    )
}