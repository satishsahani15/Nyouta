"use client"

const Cards = () => {
  // For demo purposes, using console.log. Replace with actual navigation logic
  const handleNavigation = (category) => {
    console.log(`Navigating to: ${category}`)
    // Example navigation - replace with your routing logic
    // navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`)
  }

  const cardCategories = [
    // Top row
    { id: 1, title: "Wedding Invitations", route: "/wedding-invitations" },
    { id: 2, title: "Party Invitations", route: "/party-invitations" },
    { id: 3, title: "Wedding Itinerary", route: "/wedding-itinerary" },
    { id: 4, title: "Tags & Stickers", route: "/tags-stickers" },
    // Bottom row
    { id: 5, title: "Pooja Invitations", route: "/pooja-invitations" },
    { id: 6, title: "Ceremony Invitations", route: "/ceremony-invitations" },
    { id: 7, title: "Wedding Calendars", route: "/wedding-calendars" },
    { id: 8, title: "Wedding Games", route: "/wedding-games" },
  ]

  const handleShopNow = () => {
    console.log("Shop Now clicked - Navigate to shop page")
    // Add navigation to main shop page
    // navigate('/shop')
  }

  return (
    <div className="w-full bg-amber-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cards Grid Container */}
        <div className="relative">
          {/* Top Row Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {cardCategories.slice(0, 4).map((card) => (
              <div
                key={card.id}
                onClick={() => handleNavigation(card.title)}
                className="flex flex-col items-center cursor-pointer group transition-transform duration-200 hover:scale-105"
              >
                {/* Card Shape */}
                <div className="w-24 h-32 md:w-32 md:h-40 bg-white rounded-t-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200 flex items-center justify-center">
                  <div className="w-16 h-20 md:w-20 md:h-24 bg-gray-100 rounded-t-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full opacity-50"></div>
                  </div>
                </div>
                {/* Card Title */}
                <h3 className="text-white text-sm md:text-base font-medium text-center leading-tight px-2">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Central Shop Now Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleShopNow}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              SHOP NOW
            </button>
          </div>

          {/* Bottom Row Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {cardCategories.slice(4, 8).map((card) => (
              <div
                key={card.id}
                onClick={() => handleNavigation(card.title)}
                className="flex flex-col items-center cursor-pointer group transition-transform duration-200 hover:scale-105"
              >
                {/* Card Shape */}
                <div className="w-24 h-32 md:w-32 md:h-40 bg-white rounded-t-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200 flex items-center justify-center">
                  <div className="w-16 h-20 md:w-20 md:h-24 bg-gray-100 rounded-t-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full opacity-50"></div>
                  </div>
                </div>
                {/* Card Title */}
                <h3 className="text-white text-sm md:text-base font-medium text-center leading-tight px-2">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
