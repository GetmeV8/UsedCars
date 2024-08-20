import React,{useState} from 'react'

const ViewmoreList = () => {
    const carData = [
        { id: 1, name: 'Ford Raptor', price: '$24,300', sellerType: 'new', imageUrl: '/Images/veh1.jpg' },
        { id: 2, name: 'Kia K5 (Optima)', price: '$2,803', sellerType: 'clearance', imageUrl: '/Images/veh3.jpg' },
        { id: 3, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'premium', imageUrl: '/Images/veh2.jpg' },
        { id: 4, name: 'Mercedes S350-D', price: '$20,360', sellerType: 'premium', imageUrl: '/Images/veh2.jpg' },
        { id: 5, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'new', imageUrl: '/Images/veh2.jpg' },
        { id: 6, name: 'Toyota Land Cruiser Prado', price: '$18,430', sellerType: '3rdParty', imageUrl: '/Images/veh4.jpeg' },
        { id: 7, name: 'Mazda CX-5', price: '$4,250', sellerType: 'clearance', imageUrl: '/Images/veh6.jpg' },
        { id: 8, name: 'Mazda CX-3', price: '$5,930', sellerType: 'premium', imageUrl: '/Images/veh6.jpg' },
        { id: 9, name: 'Toyota Dyna Truck', price: '$9,050', sellerType: 'new', imageUrl: '/Images/veh7.jpg' },
        { id: 10, name: 'Jeep Wrangler', price: '$18,890', sellerType: '3rdParty', imageUrl: '/Images/veh8.jpg' },
    ];

    const [visibleCars, setVisibleCars] = useState(4);
    const [viewMore, setViewMore] = useState(false);

    const handleViewMore = () => {
        setVisibleCars(viewMore ? 4 : carData.length);
        setViewMore(!viewMore);
    };

    return (
        <div className="p-4 md:p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">All Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {carData.slice(0, visibleCars).map(car => (
                    <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={car.imageUrl} alt={car.name} className="w-full h-40 md:h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{car.name}</h3>
                            <p className="mt-2 text-red-600">{car.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button 
                    onClick={handleViewMore} 
                    className="px-6 py-2 text-white bg-[#c71523] rounded-lg hover:bg-red-400 transition duration-300"
                >
                    {viewMore ? 'View Less' : 'View More'}
                </button>
            </div>
        </div>
    );
}

export default ViewmoreList
