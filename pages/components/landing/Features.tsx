import Image from 'next/image';

type Feature = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    { id: 1, icon: '/images/chat.png', title: '24/7 Support', description: 'No need to wait for a therapy appointment or a crisis line. Our chat feature is available 24/7 at your fingertips.' },
    { id: 2, icon: '/images/notes.png', title: 'Personal Coping Tools', description: 'Create a list of all the coping skills you need for each emotion you are feeling. Access them anytime needed.' },
    { id: 3, icon: '/images/hands-and-heart.png', title: 'Instant Access to Help', description: 'If things get too hard, you can quickly access a crisis line in your area who will be available.' },
];

export default function Features() {
    return (
        <div className="w-full flex flex-col items-center py-10">
            <div className="w-[600px] text-center">
                <h2 className="mb-5">Quickly find peace of mind.</h2>
                <p>Our chatbot offers ongoing support, providing a listening ear for your challenges and offering diverse solutions. Explore personalized coping mechanisms alongside our AI counseling to enhance your well-being.</p>
            </div>
            <div className="py-10">
                <div className="w-[800px] grid grid-cols-3 grid-flow-row gap-4">
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