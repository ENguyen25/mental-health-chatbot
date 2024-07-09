import Image from "next/image"

export default function Header() {
    return (
        <div className="header-mask main-container pt-32 lg:pt-60">
            <div className="header w-full flex justify-center items-end">
                <div className="flex flex-col items-center lg:w-[1050px] lg:flex-row lg:justify-between lg:items-center lg:gap-10">
                    <Image src="/images/self-love.png" alt="mobile app" width={300} height={300} />
                    <div className="flex flex-col items-center text-center pb-10 sm:w-[500px]">
                        <h1 className="text-4xl xl:text-6xl xl:mb-10">Never be lonely again.</h1>
                        <p className="text-xl xl:text-2xl">Our app provides all the resources you need to take care of yourself in the moment at no cost.</p>
                        <button className="pink-gradient-button text-xl w-fit mt-8">Sign Up Now</button>
                    </div>
                    <Image className="hidden lg:block" src="/images/self-love-mirror.png" alt="mobile app" width={300} height={300} />
                </div>
            </div>
        </div>
    )
}