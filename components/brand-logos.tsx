import { ChevronRight } from 'lucide-react';

const brands = [
  { name: 'Samsung', logo: '📱', id: 'samsung' },
  { name: 'Apple', logo: '🍎', id: 'apple' },
  { name: 'Xiaomi', logo: '📲', id: 'xiaomi' },
  { name: 'Google', logo: '🔵', id: 'google' },
  { name: 'Huawei', logo: '📳', id: 'huawei' }
];

interface BrandLogosProps {
  selectedBrand: string | null;
  onBrandSelect: (brand: string | null) => void;
}

export default function BrandLogos({ selectedBrand, onBrandSelect }: BrandLogosProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-8 border-b border-gray-200">
      <div className="flex justify-start md:justify-center items-center space-x-4 md:space-x-8 lg:space-x-12 min-w-max px-4">
        {brands.map((brand) => (
          <div 
            key={brand.name} 
            className="flex flex-col items-center group cursor-pointer px-1"
            onClick={() => onBrandSelect(selectedBrand === brand.id ? null : brand.id)}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl mb-1 md:mb-2 transition-colors ${
              selectedBrand === brand.id 
                ? 'bg-blue-100 border-2 border-blue-500' 
                : 'bg-gray-100 group-hover:bg-gray-200'
            }`}>
              {brand.logo}
            </div>
            <span className={`text-xs md:text-sm transition-colors ${
              selectedBrand === brand.id 
                ? 'text-blue-600 font-medium' 
                : 'text-gray-600 group-hover:text-blue-600'
            }`}>
              {brand.name}
            </span>
          </div>
        ))}
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400 flex-shrink-0" />
      </div>
    </div>
  );
}