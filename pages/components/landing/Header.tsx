import Image from "next/image"

export default function Header() {
    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-[800px] flex">
                <div className="w-1/2 flex flex-col justify-end pb-10">
                    <h1 className="mb-5">Never be lonely again.</h1>
                    <p>Our app provides all the resources you need to take care of yourself in the moment at no cost.</p>
                    <button className="pink-gradient-button w-fit mt-8">Try Clarity for Free</button>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Image  src="/images/mobile-app.png" alt="mobile app" width={220} height={300} />
                </div>
            </div>
        </div>
    )
}