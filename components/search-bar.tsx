import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative max-w-2xl w-full">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="iPhone 12 Pro, Samsung Galaxy A54, Huawei P40..."
          className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
        />
      </div>
    </div>
  );
}