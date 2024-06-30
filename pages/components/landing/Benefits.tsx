import Image from "next/image";

export default function Benefits() {
    return (
        <div className="w-full flex flex-col items-center py-20">
            <h2 className="mb-10">Why you'll love Clarity</h2>
            <div className="w-[800px]">
                <div className="mb-16 flex justify-between items-center gap-16">
                    <div className="w-1/3">
                        <Image src="/images/support-chatbot.png" alt="mobile app" width={300} height={300} />
                    </div>
                    <div className="w-2/3">
                        <h3>24/7 Accessibility</h3>
                        <p>Life doesn’t follow a 9-to-5 schedule, and neither do your emotional needs. That’s why our app offers round-the-clock support, ready to assist you at any moment. Whether it’s late at night or during a busy afternoon, our features, including the responsive chatbot and extensive resource library, are always available to provide immediate help and guidance. No more waiting for office hours or appointments—your mental health companion is here for you, 24/7.</p>
                        <button className="pink-gradient-button mt-5">Get Instant Access Anytime</button>
                    </div>
                </div>
                <div className="mb-16 flex justify-between items-center gap-16">
                    <div className="w-1/3">
                        <Image src="/images/woman-phone.png" alt="mobile app" width={220} height={300} />
                    </div>
                    <div className="w-2/3">
                        <h3>Personalized Support</h3>
                        <p>Every individual’s mental health journey is unique, and so is our approach. Our app provides personalized support that adapts to your specific emotions and circumstances. Whether you need calming techniques for anxiety, uplifting prompts for low days, or practical advice for daily stress, we tailor our resources to fit your personal experience. With us, you’ll always have the right tools at the right time, making your path to well-being as effective and smooth as possible.</p>
                        <button className="pink-gradient-button mt-5">Discover Your Personalized Support Now</button>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-16">
                    <div className="w-1/3">
                        <Image src="/images/laptop-design.png" alt="mobile app" width={300} height={300} />
                    </div>
                    <div className="w-2/3">
                        <h3>Comprehensive Mental Health Tools</h3>
                        <p>From understanding your emotions to finding practical coping strategies, our app is your comprehensive solution for mental well-being. With a variety of tools like mood tracking, guided journal prompts, and community support, we cover every aspect of mental health care. Our holistic approach ensures that you have everything you need in one place, simplifying your journey to better mental health and empowering you to thrive every day.</p>
                        <button className="pink-gradient-button mt-5">Explore Your Complete Mental Health Toolkit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}