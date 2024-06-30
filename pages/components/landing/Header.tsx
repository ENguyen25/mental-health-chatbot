import Image from "next/image"

export default function Header() {
    return (
        <div className="header w-full flex justify-center py-20">
            <div className="w-[1050px] flex justify-between items-center">
                <Image src="/images/self-love.png" alt="mobile app" width={300} height={300} />
                <div className="w-[400px] flex flex-col items-center pb-10 text-center">
                    <h1 className="mb-5">Never be lonely again.</h1>
                    <p className="text-2xl">Our app provides all the resources you need to take care of yourself in the moment at no cost.</p>
                    <button className="pink-gradient-button text-xl w-fit mt-8">Sign Up Now</button>
                </div>
                <Image src="/images/self-love-mirror.png" alt="mobile app" width={300} height={300} />
            </div>
        </div>
    )
}