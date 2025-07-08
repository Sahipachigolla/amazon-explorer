import React from "react";

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-64">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All</option>
          <option value="headphones">Headphones</option>
          <option value="watch">Watches</option>
          <option value="stand">Stands</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: Number(e.target.value) })
          }
        />
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">Min Rating</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          className="w-full border border-gray-300 p-2 rounded"
          value={filters.minRating}
          onChange={(e) =>
            setFilters({ ...filters, minRating: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default FilterPanel;
