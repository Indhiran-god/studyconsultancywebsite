import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Masala Dosa',
      description: 'A crispy, savory pancake filled with spiced potato filling, served with chutney and sambar.',
      price: '₹120',
      category: 'Appetizer',
    },
    {
      id: 2,
      name: 'Chettinad Chicken Curry',
      description: 'A fiery, flavorful chicken curry with a blend of spices, a hallmark of Chettinad cuisine.',
      price: '₹250',
      category: 'Main Course',
    },
    {
      id: 3,
      name: 'Mutton Biryani',
      description: 'A fragrant rice dish cooked with tender mutton and aromatic spices.',
      price: '₹300',
      category: 'Main Course',
    },
    {
      id: 4,
      name: 'Filter Coffee',
      description: 'Authentic South Indian filter coffee served with hot milk and sugar.',
      price: '₹40',
      category: 'Drinks',
    },
    {
      id: 5,
      name: 'Payasam',
      description: 'A sweet dessert made with rice, milk, and cardamom, often served during festivals.',
      price: '₹150',
      category: 'Dessert',
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-orange-600">Our Delicious Menu</h1>
        <p className="text-lg mb-12">Enjoy a variety of authentic South Indian dishes with a modern twist.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {['Appetizer', 'Main Course', 'Drinks', 'Dessert'].map((category) => (
            <div key={category} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
              <ul>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-6">
                      <div className="flex flex-col text-left">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-xl font-semibold">{item.price}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
