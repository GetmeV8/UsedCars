import React, { useState } from 'react';

const Listing = () => {
    const carData = [
        { id: 1, name: 'Ford Raptor', price: '$24,300', sellerType: 'new', imageUrl: '/Images/veh1.jpg' },
        { id: 2, name: 'Kia K5 (Optima)', price: '$2,803', sellerType: 'clearance', imageUrl: '/Images/veh3.jpg' },
        { id: 3, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'premium', imageUrl: '/Images/veh2.jpg' },
        { id: 4, name: 'Mercedes S350-D', price: '$20,360', sellerType: 'premium', imageUrl: '/Images/veh4.jpeg' },
        { id: 5, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'new', imageUrl: '/Images/veh9.jpg' },
        { id: 6, name: 'Mazda', price: '$8,360', sellerType: 'new', imageUrl: '/Images/veh7.jpg' },
        { id: 7, name: 'Toyota', price: '$8,360', sellerType: 'new', imageUrl: '/Images/veh6.jpg' },
        { id: 8, name: 'Toyota Land Cruiser Prado', price: '$18,430', sellerType: '3rdParty', imageUrl: '/Images/veh8.jpg' },
        { id: 9, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'premium', imageUrl: '/Images/veh5.jpeg' },
        { id: 10, name: 'Toyota Hiace Van', price: '$8,360', sellerType: 'premium', imageUrl: '/Images/veh10.jpg' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('new');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCars = carData.filter(car => car.sellerType === selectedCategory);

    return (
        <div className="p-4 md:p-8 bg-gray-100">
            <div className="flex flex-wrap justify-around mb-8 space-y-2 md:space-y-0">
                {/* <button 
                    onClick={() => handleCategoryChange('new')} 
                    className={`px-4 py-2 rounded h-8 ${selectedCategory === 'new' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'}`}
                >
                    New Arrivals
                </button> */}
                <button 
                    onClick={() => handleCategoryChange('new')} 
                    className={`px-4 py-2 rounded ${selectedCategory === 'new' ? 'bg-[#c71523] text-white' : 'bg-red-200 text-red-800'}`}
                >
                    New Arrivals
                </button>
                <button 
                    onClick={() => handleCategoryChange('premium')} 
                    className={`px-4 py-2 rounded ${selectedCategory === 'premium' ? 'bg-[#c71523] text-white' : 'bg-red-200 text-red-800'}`}
                >
                    Premium Class
                </button>
                <button 
                    onClick={() => handleCategoryChange('3rdParty')} 
                    className={`px-4 py-2 rounded ${selectedCategory === '3rdParty' ? 'bg-[#c71523] text-white' : 'bg-red-200 text-red-800'}`}
                >
                    3rd Party Seller
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredCars.map(car => (
                    <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={car.imageUrl} alt={car.name} className="w-full h-40 md:h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-sm md:text-lg font-semibold">{car.name}</h3>
                            <p className="mt-2 text-blue-600 text-xs md:text-base">{car.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listing;
