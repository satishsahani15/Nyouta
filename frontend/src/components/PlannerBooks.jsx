// import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function PlannerBook() {
  const productCategories = ["Wedding", "Management", "Guest Management"]

  const ProductCard = ({ title = "Product Name Here" }) => (
    <div className="bg-orange-50 rounded-lg p-8 text-center min-h-[200px] flex flex-col justify-center">
      <div className="text-gray-600 text-lg font-medium mb-4">
        Design
        <br />
        Here
      </div>
      <div className="text-sm text-gray-500 mt-auto">"{title}"</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white px-6 py-4">
        {/* <nav className="flex items-center space-x-2 text-sm">
          <span className="text-gray-700">Home</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">Menu page</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">Planner Books</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </nav> */}
      </div>

      {/* Hero Section */}
      <div className="bg-orange-100 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 pr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Planner Books</h1>
            <p className="text-lg text-gray-700 mb-4 italic">
              "The Perfect Planner for Your Special Day Ran Your Perfect Day, Step by Step"
            </p>
            <p className="text-gray-600 leading-relaxed">
              We offer comprehensive wedding planning tools, including a wedding planner book, guest management booklet,
              and a wedding notepad to keep every detail organized. From managing guests to tracking your plans, our
              products ensure a seamless, stress-free celebration.
            </p>
          </div>
          {/* <div className="flex-shrink-0">
            <Image
              src="/wedding-banner.png"
              alt="Wedding planning materials with flowers and notepad"
              width={350}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Planner Books Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-pink-500 mb-6">Planner Books</h2>

          {/* Category Tags */}
          <div className="flex space-x-4 mb-8">
            {productCategories.map((category, index) => (
              <span key={index} className="text-gray-700 text-sm">
                {category}
                {index < productCategories.length - 1 && <span className="ml-4 text-gray-400">|</span>}
              </span>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>

        {/* For Wedding Notes Section */}
        <div>
          <h2 className="text-3xl font-bold text-pink-500 mb-6">For Wedding Notes</h2>

          {/* Category Tags */}
          <div className="flex space-x-4 mb-8">
            {productCategories.map((category, index) => (
              <span key={index} className="text-gray-700 text-sm">
                {category}
                {index < productCategories.length - 1 && <span className="ml-4 text-gray-400">|</span>}
              </span>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

