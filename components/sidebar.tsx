import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const phoneModels = {
  samsung: [
    'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23 Ultra', 
    'Galaxy S23+', 'Galaxy S23', 'Galaxy S22 Ultra', 'Galaxy S22+', 
    'Galaxy S22', 'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21',
    'Galaxy A54 5G', 'Galaxy A34 5G', 'Galaxy A14', 'Galaxy Note 20 Ultra'
  ],
  apple: [
    'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16',
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 12 Pro Max'
  ],
  xiaomi: [
    'Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13T Pro', 'Xiaomi 13T',
    'Xiaomi 13 Pro', 'Xiaomi 13', 'Redmi Note 13 Pro+', 'Redmi Note 13 Pro',
    'Redmi Note 13', 'Redmi Note 12 Pro', 'Poco X6 Pro', 'Poco F6'
  ],
  google: [
    'Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9', 'Pixel 8a',
    'Pixel 8 Pro', 'Pixel 8', 'Pixel 7a', 'Pixel 7 Pro',
    'Pixel 7', 'Pixel 6a', 'Pixel 6 Pro', 'Pixel 6'
  ],
  huawei: [
    'P60 Pro', 'P60', 'Mate 60 Pro+', 'Mate 60 Pro', 'Mate 60',
    'P50 Pro', 'P50', 'Mate 50 Pro', 'Mate 50', 'Nova 11 Pro',
    'Nova 11', 'P40 Pro', 'P40', 'Mate 40 Pro'
  ]
};

interface SidebarProps {
  selectedBrand: string | null;
  selectedModel: string | null;
  onModelSelect: (model: string | null) => void;
  filters: {
    protection: string[];
    materials: string[];
    sort: string;
  };
  onFiltersChange: (filters: any) => void;
}

interface SidebarContentProps extends SidebarProps {
  mobile?: boolean;
  handleSortChange: (sort: string) => void;
  handleProtectionChange: (protection: string, checked: boolean) => void;
}

export default function Sidebar({ 
  selectedBrand, 
  selectedModel, 
  onModelSelect, 
  filters, 
  onFiltersChange 
}: SidebarProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleProtectionChange = (protection: string, checked: boolean) => {
    const newProtection = checked 
      ? [...filters.protection, protection]
      : filters.protection.filter(p => p !== protection);
    onFiltersChange({ ...filters, protection: newProtection });
  };

  const handleSortChange = (sort: string) => {
    onFiltersChange({ ...filters, sort });
  };

  return (
    <>
      {/* Mobile Filters Button */}
      <div className="lg:hidden mb-4">
        <Button 
          onClick={() => setMobileFiltersOpen(true)}
          variant="outline" 
          className="flex items-center gap-2 w-full justify-center"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block w-72 xl:w-80 space-y-6 pr-4`}>
        <SidebarContent 
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          onModelSelect={onModelSelect}
          filters={filters}
          onFiltersChange={onFiltersChange}
          handleSortChange={handleSortChange}
          handleProtectionChange={handleProtectionChange}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="absolute inset-0 flex">
            <div className="relative w-full max-w-xs bg-white h-full overflow-y-auto p-6">
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
              <SidebarContent 
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                onModelSelect={onModelSelect}
                filters={filters}
                onFiltersChange={onFiltersChange}
                mobile
                handleSortChange={handleSortChange}
                handleProtectionChange={handleProtectionChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({ 
  selectedBrand, 
  selectedModel, 
  onModelSelect, 
  filters, 
  onFiltersChange,
  mobile = false,
  handleSortChange,
  handleProtectionChange
}: SidebarContentProps) {
  return (
    <div className={`${mobile ? 'space-y-6' : 'space-y-6'}`}>
      {/* Filters Header */}
      <div className="flex items-center space-x-2 text-gray-900 font-semibold">
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filtres</span>
      </div>

      {/* Selected Brand */}
      {selectedBrand && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-blue-900 capitalize">{selectedBrand}</h3>
            <button 
              onClick={() => onModelSelect(null)}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Effacer
            </button>
          </div>
          
          {/* Phone Models */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <div className="text-sm font-medium text-gray-700 mb-2">Modèles disponibles:</div>
            {phoneModels[selectedBrand as keyof typeof phoneModels]?.map((model) => (
              <div key={model} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${model}-${mobile ? 'mobile' : 'desktop'}`}
                  name={`phoneModel-${mobile ? 'mobile' : 'desktop'}`}
                  checked={selectedModel === model}
                  onChange={() => onModelSelect(selectedModel === model ? null : model)}
                  className="text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label 
                  htmlFor={`${model}-${mobile ? 'mobile' : 'desktop'}`} 
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {model}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sort */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Trier</h3>
        <div className="relative">
          <select 
            className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={filters.sort}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option>Les plus populaires</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Nouveautés</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Protection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Protection</h3>
        <div className="space-y-3">
          {['solide', 'resistant', 'robuste'].map((protection) => (
            <div key={protection} className="flex items-center space-x-2">
              <Checkbox 
                id={`${protection}-${mobile ? 'mobile' : 'desktop'}`}
                checked={filters.protection.includes(protection)}
                onCheckedChange={(checked) => handleProtectionChange(protection, checked as boolean)}
              />
              <label 
                htmlFor={`${protection}-${mobile ? 'mobile' : 'desktop'}`} 
                className="text-sm text-gray-700 capitalize"
              >
                {protection}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Matériaux</h3>
        <Button variant="outline" className="w-full mb-3 bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 text-sm">
          Tous les matériaux
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="text-sm py-1.5 h-auto">
            Polylactel
          </Button>
          <Button variant="outline" className="text-sm py-1.5 h-auto">
            Spiegel
          </Button>
        </div>
      </div>

      {/* View Settings */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <span className="text-sm text-gray-600">Vue</span>
        <span className="text-sm text-gray-900 font-medium">9 par page</span>
      </div>
    </div>
  );
}