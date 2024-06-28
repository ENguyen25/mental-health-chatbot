type Feature = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    { id: 1, icon: '1', title: 'Feature One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, icon: '2', title: 'Feature Two', description: 'Description for feature two.' },
    { id: 3, icon: '2', title: 'Feature Three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 4, icon: '2', title: 'Feature Four', description: 'Description for feature four.' }
];

export default function Features() {
    return (
        <div className="w-full flex flex-col items-center py-10">
            <div className="w-[600px] text-center">
                <h2 className="mb-5">Quickly find peace of mind.</h2>
                <p>Our chatbot offers ongoing support, providing a listening ear for your challenges and offering diverse solutions. Explore personalized coping mechanisms alongside our AI counseling to enhance your well-being.</p>
            </div>
            <div className="py-10">
                <div className="w-[800px] grid grid-cols-2 grid-flow-row gap-4">
                    {features.map(feature => (
                        <div key={feature.id} className="bg-dark-blue-2 p-4 rounded-lg border border-purple-haze">
                            {/* <img src={feature.icon} alt={feature.title} /> */}
                            <h2 className="text-xl font-bold">{feature.title}</h2>
                            <p className="">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}