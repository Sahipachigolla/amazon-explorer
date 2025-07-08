import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import FilterPanel from "./components/FilterPanel";

const dummyProducts = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/images/psychology-of-money.jpg",
    title: "The Psychology of Money - Morgan Housel",
    price: 349,
    rating: 4.6,
    category: "books",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/images/wallet.jpg",
    title: "Minimalist Men's Slim Wallet",
    price: 599,
    rating: 4.3,
    category: "accessories",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/images/boat-earphones.jpg",
    title: "boAt BassHeads 100 Wired Earphones",
    price: 399,
    rating: 4.2,
    category: "electronics",
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + "/images/pearl-earrings.jpg",
    title: "Zaveri Pearls Gold-Plated Earrings",
    price: 299,
    rating: 4.1,
    category: "jewellery",
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + "/images/t-shirt.jpg",
    title: "Puma Men's Regular Fit T-Shirt",
    price: 749,
    rating: 4.3,
    category: "clothing",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    maxPrice: 99999,
    minRating: 0,
  });
  const [showFilters, setShowFilters] = useState(false);

  const filtered = dummyProducts.filter((p) => {
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.category === "" || p.category === filters.category) &&
      p.price <= filters.maxPrice &&
      p.rating >= filters.minRating
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex justify-center">
        <SearchBar onSearch={(val) => setSearchQuery(val)} />
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4 flex justify-end">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-white px-4 py-2 rounded-lg shadow text-gray-700 font-semibold"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* 🔧 Mobile Filter Icon */}
<div className="mb-4 md:hidden flex justify-end">
  <button
    className="bg-white p-2 rounded-full shadow"
    onClick={() => setShowFilters(!showFilters)}
  >
    <span role="img" aria-label="filter">🔧</span>
  </button>
</div>

{/* 🧠 Responsive Layout with Conditional Filter */}
<div className="flex flex-col md:flex-row gap-6">
  {/* 👇 Mobile Filter Panel (Toggled) */}
  {showFilters && (
    <div className="block md:hidden w-full">
      <FilterPanel filters={filters} setFilters={setFilters} />
    </div>
  )}

  {/* 🖥 Desktop Filter Panel (Always Shown) */}
  <div className="hidden md:block">
    <FilterPanel filters={filters} setFilters={setFilters} />
  </div>

  {/* 🛍 Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
    {filtered.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>


      {/* Amazon Link */}
      <div className="text-center mt-8">
        <a
          href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=11354093371795955128&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9050484&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-lg hover:text-blue-800"
        >
          🔗 Explore more on Amazon
        </a>
      </div>
    </div>
  );
}

export default App;
