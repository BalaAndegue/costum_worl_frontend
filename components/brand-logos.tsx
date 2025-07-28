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
    <div className="flex justify-center items-center space-x-12 mb-12 pb-8 border-b border-gray-200">
      {brands.map((brand) => (
        <div 
          key={brand.name} 
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => onBrandSelect(selectedBrand === brand.id ? null : brand.id)}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 transition-colors ${
            selectedBrand === brand.id 
              ? 'bg-blue-100 border-2 border-blue-500' 
              : 'bg-gray-100 group-hover:bg-gray-200'
          }`}>
            {brand.logo}
          </div>
          <span className={`text-sm transition-colors ${
            selectedBrand === brand.id 
              ? 'text-blue-600 font-medium' 
              : 'text-gray-600 group-hover:text-blue-600'
          }`}>
            {brand.name}
          </span>
        </div>
      ))}
      <ChevronRight className="h-6 w-6 text-gray-400" />
    </div>
  );
}