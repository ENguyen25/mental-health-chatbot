type Feature = {
    id: number;
    icon: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    { id: 1, icon: '1', title: 'Feature One', description: 'Description for feature one.' },
    { id: 2, icon: '2', title: 'Feature Two', description: 'Description for feature two.' },
    { id: 3, icon: '2', title: 'Feature Three', description: 'Description for feature three.' },
    { id: 4, icon: '2', title: 'Feature Four', description: 'Description for feature four.' }
];

export default function Features() {
    return (
        <div className="w-full flex justify-center py-10">
            <div className="w-[1000px] grid grid-cols-2 grid-flow-row gap-4">
                {features.map(feature => (
                    <div key={feature.id} className="bg-dark-blue-2 p-4 rounded-lg">
                        {/* <img src={feature.icon} alt={feature.title} /> */}
                        <h2 className="text-xl font-bold">{feature.title}</h2>
                        <p className="">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}