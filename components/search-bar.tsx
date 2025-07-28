import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex justify-center px-4 mb-6 sm:mb-8">
      <div className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
        <input
          type="text"
          placeholder="iPhone 12 Pro, Samsung Galaxy A54, Huawei P40..."
          className="w-full pl-9 sm:pl-12 pr-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 sm:bg-gray-100 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
        />
      </div>
    </div>
  );
}