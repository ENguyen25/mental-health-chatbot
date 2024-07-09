import Image from "next/image"

export default function Header() {
    return (
        <div className="header-mask container">
            <div className="header w-full flex justify-center items-end">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
                    <Image src="/images/self-love.png" alt="mobile app" width={300} height={300} />
                    <div className="flex flex-col items-center text-center pb-10 lg:w-[400px]">
                        <h1 className="text-4xl">Never be lonely again.</h1>
                        <p className="text-xl">Our app provides all the resources you need to take care of yourself in the moment at no cost.</p>
                        <button className="pink-gradient-button text-xl w-fit mt-8">Sign Up Now</button>
                    </div>
                    <Image className="hidden lg:block" src="/images/self-love-mirror.png" alt="mobile app" width={300} height={300} />
                </div>
            </div>
        </div>
    )
}