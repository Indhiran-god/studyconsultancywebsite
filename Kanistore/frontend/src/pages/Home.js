import React from 'react';
import { FaCalendarAlt, FaUtensils, FaImage, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Home = () => {
  // Sample data for multiple restaurants (this can be fetched from an API)
  const restaurants = [
    {
      id: 1,
      name: "Restaurant A",
      description: "Authentic Tamil Nadu cuisine with traditional flavors.",
      image: "https://via.placeholder.com/300x200", // Replace with Tamil Nadu dish images
      location: "Chennai, Tamil Nadu",
      category: "South Indian",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Restaurant B",
      description: "Explore the coastal cuisine of Tamil Nadu with a variety of seafood.",
      image: "https://via.placeholder.com/300x200", // Coastal cuisine images
      location: "Marina Beach, Chennai",
      category: "Coastal",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Restaurant C",
      description: "A fusion of South Indian flavors and modern culinary techniques.",
      image: "https://via.placeholder.com/300x200", // Fusion cuisine images
      location: "Coimbatore, Tamil Nadu",
      category: "Fusion",
      rating: 4.8,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-gradient-to-r from-orange-600 to-red-600 text-white py-16" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x500")' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Tamil Nadu’s Finest Restaurant Booking App</h1>
          <p className="text-lg mb-8">Explore the rich culinary heritage of Tamil Nadu, from spicy curries to fresh coastal seafood.</p>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-orange-600">Featured Restaurants in Tamil Nadu</h2>
        <div className="flex justify-center mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mx-2">
            All Restaurants
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mx-2">
            South Indian
          </button>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 mx-2">
            Coastal
          </button>
          <button className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 mx-2">
            Fusion
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 flex justify-center items-center">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-red-600">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  {restaurant.location}
                </p>
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-yellow-400 ${index < Math.floor(restaurant.rating) ? 'text-yellow-500' : ''}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{restaurant.rating} / 5</span>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    View Menu
                  </button>
                  <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-orange-600">Book Your Table at the Best Tamil Nadu Restaurants</h2>
          <p className="text-lg mb-6">Select a date and time to reserve a table at your favorite restaurant in Tamil Nadu.</p>
          <div className="flex justify-center gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg w-64">
                <h3 className="text-xl font-semibold mb-4">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-md mb-4"
                />
                <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Reserve
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-orange-600">What Our Guests Are Saying</h2>
          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-gray-600 mb-4">"The food was amazing, and the ambiance captured the essence of Tamil Nadu's hospitality!"</p>
              <p className="font-semibold">Priya R.</p>
              <p className="text-sm text-gray-500">Food Enthusiast</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <p className="text-gray-600 mb-4">"Absolutely loved the coastal cuisine at Restaurant B, the freshest seafood I've had!"</p>
              <p className="font-semibold">Ravi K.</p>
              <p className="text-sm text-gray-500">Tourist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
