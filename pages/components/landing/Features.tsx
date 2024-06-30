import Image from 'next/image';

type Feature = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    { id: 1, icon: '/images/chat.png', title: 'Personal Mental Health Companion', description: 'Need someone to talk to? Clarity is always here to listen. Whether you’re feeling anxious, stressed, or just need to vent, our chatbot provides a compassionate ear and helpful advice tailored to your needs.' },
    { id: 2, icon: '/images/notes.png', title: 'Tailorized Coping Strategies', description: 'Our app provides coping strategies tailored to your unique emotional needs. Whether you’re feeling a little stressed or deeply overwhelmed, we have the right tools to help you navigate through.' },
    { id: 3, icon: '/images/notebook.png', title: 'AI-Generated Journal Prompts', description: 'Unlock deeper self-awareness with our AI-generated journal prompts. Each prompt is crafted to help you reflect, understand your emotions, and discover new paths to personal growth.' },
    { id: 4, icon: '/images/graph.png', title: 'Emotion Tracking', description: 'Keep a daily log of your emotions and track your mood over time. Our tracker helps you recognize patterns and understand what influences your mental state.' },
    { id: 5, icon: '/images/library.png', title: 'Resource Library', description: 'Discover a curated selection of resources designed to help you navigate your mental health challenges. Whether you’re looking for practical tips or in-depth guidance, our library has you covered.' },
    { id: 6, icon: '/images/hands-and-heart.png', title: 'Emergency Support and Crisis Resources', description: 'Access crucial resources and support in times of crisis. Our app provides quick links to emergency contacts, hotlines, and professional help to ensure you’re never alone.' },
];

export default function Features() {
    return (
        <div className="w-full flex flex-col items-center py-20">
            <div className="w-[600px] text-center">
                <h2 className="mb-5">Quickly find peace of mind.</h2>
                <p>Our chatbot offers ongoing support, providing a listening ear for your challenges and offering diverse solutions. Explore personalized coping mechanisms alongside our AI counseling to enhance your well-being.</p>
            </div>
            <div className="py-10">
                <div className="w-[1000px] grid grid-cols-3 grid-flow-row gap-10">
                    {features.map(feature => (
                        <div key={feature.id} className="bg-dark-blue-2 p-6 rounded-lg border border-purple-haze">
                            <Image className="mx-auto mt-2 mb-6" src={feature.icon} alt={feature.title} width={70} height={70} />
                            <h4 className="font-bold">{feature.title}</h4>
                            <p className="">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}